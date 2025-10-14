# Repository Guidelines

## Project Structure & Module Organization
- `src/` – TypeScript entry `src/index.ts`, containing the Hono app and `MyMCP`.
- `tests/` – Vitest suites as `*.test.ts`; mirror source structure for clarity.
- `wrangler.jsonc` – Cloudflare Workers config and Durable Object binding.
- Support configs: `tsconfig.json`, `biome.json`, `.editorconfig`, `cloudflare-env.d.ts` (generated; do not edit).

## Build, Test, and Development Commands
- `pnpm dev` – Launch Wrangler dev server at `http://127.0.0.1:8787`; hot reload worker.
- `pnpm deploy` – Publish the worker to Cloudflare.
- `pnpm type-check` – Run TypeScript compiler in no-emit mode.
- `pnpm lint` / `pnpm lint:fix` – Lint and optionally auto-fix with Biome.
- `pnpm format` – Format source using Biome defaults.
- `pnpm cf-typegen` – Regenerate typed bindings for secrets and bindings.

## Coding Style & Naming Conventions
- Language: TypeScript ESNext with ESM modules; 2-space indent, LF endings, max 80 chars.
- Use double quotes; prefer descriptive camelCase functions and PascalCase classes (e.g., `MyMCP`).
- File names stay kebab-case such as `my-tool.ts`.

## Testing Guidelines
- Use Vitest; add new suites under `tests/feature-name.test.ts`.
- Keep tests deterministic and cover tool handlers and worker routes.
- Run `pnpm test` (alias for Vitest, if configured) or `pnpm vitest run`; pair with `pnpm dev` for manual verification via MCP Inspector.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `fix:`, `chore:`). Describe scope and intent succinctly.
- PRs include summary, motivation or linked issue, validation steps (commands + expected results), and rollback notes.
- Document any new bindings or secrets in the PR description; never commit secret values.

## Security & Configuration Tips
- Node >= 20.6.0 and pnpm required; match `package.json` engines.
- Manage secrets via `wrangler secret put`; exclude from source control.
- SSE endpoint lives at `/sse`; avoid exposing additional routes without review.
