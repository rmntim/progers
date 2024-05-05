"use server";

import { revalidatePath } from "next/cache";
import { auth } from "~/server/auth";
import { deleteRoom, getRoom } from "~/server/data-access/room";

export async function deleteRoomAction(roomId: string) {
  const session = await auth();
  if (!session) {
    throw new Error("No session");
  }

  const room = await getRoom(roomId);

  if (room?.userId !== session.user.id) {
    throw new Error("Not your room");
  }

  await deleteRoom(roomId);

  revalidatePath("/your-rooms");
}
