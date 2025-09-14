# Remote MCP Template

[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/nekofar/remote-mcp-template?include_prereleases)](https://github.com/nekofar/remote-mcp-template/releases)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/nekofar/remote-mcp-template/build.yml)](https://github.com/nekofar/remote-mcp-template/actions/workflows/build.yml)
[![GitHub](https://img.shields.io/github/license/nekofar/remote-mcp-template)](https://github.com/nekofar/remote-mcp-template/blob/master/LICENSE)
[![X (formerly Twitter) Follow](https://img.shields.io/badge/follow-%40nekofar-ffffff?logo=x&style=flat)](https://x.com/nekofar)
[![Farcaster (Warpcast) Follow](https://img.shields.io/badge/follow-%40nekofar-855DCD.svg?logo=farcaster&logoColor=f5f5f5&style=flat)](https://warpcast.com/nekofar)
[![Donate](https://img.shields.io/badge/donate-nekofar.crypto-a2b9bc?logo=ethereum&logoColor=f5f5f5)](https://ud.me/nekofar.crypto)

Remote MCP Template is a minimal, production‑ready starter for building and
deploying a Model Context Protocol (MCP) agent on Cloudflare Workers. It hosts
an MCP server behind a Server‑Sent Events (SSE) endpoint and uses a Durable
Object to manage lifecycle and state, giving you a fast, scalable foundation to
add your own tools and capabilities.

Key features and goals:

- Cloudflare Workers + Durable Object hosting for the MCP server
- SSE endpoint mounted at `/sse` for MCP clients and the Inspector
- Hono app entry with a simple example tool you can extend
- TypeScript, pnpm, and Biome for a clean, typed DX
- Typed Cloudflare environment bindings and easy local dev with Wrangler
