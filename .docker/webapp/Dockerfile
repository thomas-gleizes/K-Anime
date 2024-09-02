FROM node:22-slim

RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm config set store-dir /usr/local/pnpm/.pnpm-store
