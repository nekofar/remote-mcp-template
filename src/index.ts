import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import { Hono } from "hono";
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
      "hello",
      {
        title: "Hello",
        description: "Returns a hello world message.",
      },
      async () => ({ content: [{ type: "text", text: "Hello world!" }] }),
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
