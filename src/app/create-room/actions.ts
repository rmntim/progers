"use server";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { room, type Room } from "~/server/db/schema";

export async function createRoom(newRoom: Omit<Room, "userId" | "id">) {
  const session = await auth();
  if (!session) {
    throw new Error("No session");
  }
  await db.insert(room).values({ ...newRoom, userId: session.user.id });
}
