# @portfolio/config

This package contains all shared configuration used across the Portfolio monorepo.

## Responsibilities

- ESLint configuration
- Prettier configuration
- TypeScript configuration
- Tailwind CSS configuration
- PostCSS configuration

Applications inside `apps/` consume these shared configurations to ensure consistency across the workspace.

## Philosophy

Single source of truth.
Avoid duplicated configuration.
