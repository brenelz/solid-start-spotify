import type { Config } from "drizzle-kit";

export default {
    schema: "./src/lib/db.ts",
    out: "./drizzle",
    dialect: "sqlite",
    dbCredentials: {
        url: './db/sqlite.db'
    },
} satisfies Config;