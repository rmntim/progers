import NextAuth from "next-auth";
import { db } from "./db";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub],
});
