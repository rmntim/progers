"use server";

import { env } from "~/env";
import { auth } from "~/server/auth";
import { StreamChat } from "stream-chat";

export async function generateToken() {
  const session = await auth();

  if (!session) {
    throw new Error("Not logged in");
  }

  const apiKey = env.NEXT_PUBLIC_STREAM_API_KEY;
  const appSecret = env.STREAM_APP_SECRET;

  const serverClient = StreamChat.getInstance(apiKey, appSecret);
  const token = serverClient.createToken(session.user.id);
  return token;
}
