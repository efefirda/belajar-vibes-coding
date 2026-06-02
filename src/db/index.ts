import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connectionString = Bun.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is required");
}

// Create connection pool
export const pool = mysql.createPool(connectionString);

// Create drizzle database instance
export const db = drizzle(pool, { schema, mode: "default" });
