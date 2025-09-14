# Repository Guidelines

This guide helps contributors build, run, and extend the Cloudflare
Workers–based MCP agent in this repository.

## Project Structure & Module Organization

- `src/` — TypeScript sources. Entry: `src/index.ts` (Hono app + `MyMCP`).
- `wrangler.jsonc` — Cloudflare Workers config (Durable Object `MyMCP`).
- `tsconfig.json`, `biome.json`, `.editorconfig` — TS, lint/format, editor.
- `cloudflare-env.d.ts` — Generated env types; do not edit by hand.
- `tests/` — Place new Vitest tests here as `*.test.ts`.

## Build, Test, and Development Commands

- `pnpm dev` — Run locally with Wrangler (`http://127.0.0.1:8787`).
- `pnpm deploy` — Deploy to Cloudflare Workers.
- `pnpm type-check` — TypeScript type checking (no emit).
- `pnpm lint` / `pnpm lint:fix` — Lint and auto‑fix with Biome.
- `pnpm format` — Format code with Biome.
- `pnpm cf-typegen` — Regenerate Cloudflare env types.
- Inspect MCP: `npx @modelcontextprotocol/inspector \
  http://127.0.0.1:8787/sse`.

## Coding Style & Naming Conventions

- Language: TypeScript (ESNext, ESM). Indent 2 spaces; LF; UTF‑8.
- Quotes: double (Biome). Max line length 80 (EditorConfig).
- Naming: PascalCase classes (`MyMCP`); camelCase vars/functions; kebab‑case
  file names (e.g., `my-tool.ts`).
- Keep modules small; export a clear default or named API.

## Testing Guidelines

- No formal harness yet; validate changes via `pnpm dev` and the MCP
  Inspector.
- Prefer Vitest; place tests in `tests/` as `*.test.ts`.
- Aim for meaningful coverage of tools and request handlers; keep tests
  deterministic.

## Commit & Pull Request Guidelines

- Use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, etc.
- PRs include: concise summary, motivation/linked issue, validation steps
  (commands and expected result), and risks/rollback notes.
- Keep changes focused and aligned with the existing style.

## Security & Configuration Tips

- Do not commit secrets. Use `wrangler secret put <NAME>`.
- Required: Node `>=20.6.0` and `pnpm` as declared in `package.json`.
- SSE endpoint is mounted at `/sse`; avoid exposing extra routes without
  review.

