# MCP Server Template (HTTP/SSE)

[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/nekofar/remote-mcp-template?include_prereleases)](https://github.com/nekofar/remote-mcp-template/releases)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/nekofar/remote-mcp-template/build.yml)](https://github.com/nekofar/remote-mcp-template/actions/workflows/build.yml)
[![GitHub](https://img.shields.io/github/license/nekofar/remote-mcp-template)](https://github.com/nekofar/remote-mcp-template/blob/master/LICENSE)
[![X (formerly Twitter) Follow](https://img.shields.io/badge/follow-%40nekofar-ffffff?logo=x&style=flat)](https://x.com/nekofar)
[![Farcaster (Warpcast) Follow](https://img.shields.io/badge/follow-%40nekofar-855DCD.svg?logo=farcaster&logoColor=f5f5f5&style=flat)](https://warpcast.com/nekofar)
[![Donate](https://img.shields.io/badge/donate-nekofar.crypto-a2b9bc?logo=ethereum&logoColor=f5f5f5)](https://ud.me/nekofar.crypto)

> [!WARNING]
> Please note that the project is currently in an experimental phase, and it is subject to significant changes as it
> progresses.

## Description
Remote MCP Template is a minimal, production‑ready starter for building and
deploying a Model Context Protocol (MCP) agent on Cloudflare Workers. It hosts
an MCP server behind a Server‑Sent Events (SSE) endpoint and uses a Durable
Object to manage lifecycle and state, giving you a fast, scalable foundation to
add your own tools and capabilities.

Key features and goals:

- Cloudflare Workers and Durable Object hosting for the MCP server
- SSE endpoint mounted at `/sse` for MCP clients and the Inspector
- Hono app entry with a simple example tool you can extend
- TypeScript, pnpm, and Biome for a clean, typed DX
- Typed Cloudflare environment bindings and easy local dev with Wrangler


## Using This Template

You can use this repository as a template to create a new GitHub repository with the same directory structure and files.
Here's how:

1. On the [repository page](https://github.com/nekofar/remote-mcp-template), click the **Use this template**
   button.
2. Choose the owner of the new repository and enter a repository name.
3. Optionally, add a description for your repository.
4. Choose the repository visibility (Public or Private).
5. Click **Create repository from template** to create your new repository.

After creating your repository from this template, clone it and install the dependencies:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
cd YOUR-REPOSITORY
pnpm install
```

## Usage

Here's how you can use this template:

- **Building**: Run `pnpm run build` to compile your TypeScript MCP server.
- **Running Tests**: Execute `pnpm run test` to run tests for your MCP server.
- **Linting**: Use `pnpm run lint` to lint your TypeScript code with Biome.
- **Development**: Run `pnpm run dev` to start the MCP server in development mode.
- **Inspector**: Run `pnpm run inspector` to launch the MCP Inspector for debugging and testing your server interactively.

## License

This project is licensed under the Apache-2.0 License -
see the [LICENSE](https://github.com/nekofar/remote-mcp-template/blob/master/LICENSE) file for details.
