import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import { Hono } from "hono";
import { z } from "zod/v3";
import pkg from "../package.json" with { type: "json" };

// Explicit env typing keeps Worker bindings checked and refactor‑friendly.
type Bindings = CloudflareEnv;

// Define our MCP agent with tools
// McpAgent wraps the MCP server lifecycle on Cloudflare Workers.
export class MyMCP extends McpAgent<Bindings> {
  // Advertise name/version so clients and logs can correlate deployments.
  server = new McpServer({
    name: pkg.name,
    version: pkg.version,
  });

  async init() {
    // Register tools at startup so misconfigurations fail fast.
    // Minimal smoke‑test tool; extend/replace with real capabilities.
    this.server.registerTool(
      "greet",
      {
        title: "Greet",
        description: "Greets a person by name.",
        inputSchema: {
          name: z.string().describe("The name of the person to greet"),
        },
      },
      async (args: { name?: string }) => {
        const name = args.name || "World";

        return {
          content: [
            {
              type: "text",
              text: `Hello, ${name}!`,
            },
          ],
        };
      },
    );

    // Resources help clients fetch static or dynamic data without
    // hard‑coding implementation details on the client side.
    this.server.registerResource(
      "hello",
      "hello://greeting",
      {
        description: "A static JSON resource with greeting data.",
        mimeType: "application/json",
      },
      async () => ({
        contents: [
          {
            uri: "hello://greeting",
            mimeType: "application/json",
            text: JSON.stringify({
              message: "Welcome to MCP!",
              timestamp: new Date().toISOString(),
              data: {
                greeting: "Hello",
                language: "en",
              },
            }),
          },
        ],
      }),
    );

    // Prompts give clients higher‑level instructions composed from
    // tools and resources, keeping conversational logic consistent.
    this.server.registerPrompt(
      "friendly-greet",
      {
        description:
          "A friendly greeting prompt that uses the greet tool and hello resource.",
        argsSchema: {
          username: z.string().describe("The name of the user to greet."),
        },
      },
      async (args: { username?: string }) => {
        const username = args.username || "friend";

        return {
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `Please greet ${username} using the 'greet' tool, and then show the data from the 'hello://greeting' resource to provide additional context about our greeting service.`,
              },
            },
          ],
        };
      },
    );
  }
}

// Hono hosts the MCP endpoint and leaves room for future routes.
const app = new Hono<{ Bindings: Bindings }>();

// Mount the SSE endpoint under a stable path to decouple concerns.
app.mount("/", (req, env, ctx) => {
  return MyMCP.mount("/sse").fetch(req, env, ctx);
});

export default app;
