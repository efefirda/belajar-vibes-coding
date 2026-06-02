# Belajar Vibes Coding

A fast, modern backend boilerplate powered by **Bun**, **ElysiaJS**, **Drizzle ORM**, and **MySQL**.

## Features

- **Runtime**: [Bun](https://bun.sh) (extremely fast all-in-one JavaScript/TypeScript toolchain)
- **Web Framework**: [ElysiaJS](https://elysiajs.com) (fast, type-safe web framework with end-to-end type safety)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team) (TypeScript-first ORM with database-first feel)
- **Database**: [MySQL](https://www.mysql.com)

---

## Getting Started

### 1. Install Dependencies

Install all dependencies using Bun:

```bash
bun install
```

### 2. Database Environment Setup

Copy `.env.example` to `.env` and fill in your MySQL credentials:

```bash
cp .env.example .env
```

### 3. Run the Development Server

Start the development server with live watch mode:

```bash
bun dev
```

The server will start running at `http://localhost:3000`.

---

## Project Structure

- `src/index.ts` - ElysiaJS server and route setup.
- `src/db/index.ts` - Drizzle database connection pooling and initialization.
- `src/db/schema.ts` - Database schema definitions using Drizzle MySQL core.
- `drizzle.config.ts` - Configuration file for Drizzle Kit.
