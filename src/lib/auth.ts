import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../database";
import { openAPI } from "better-auth/plugins";
 
export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: drizzleAdapter(db, {
        provider: "sqlite",
    }),
    plugins: [openAPI()]
});
