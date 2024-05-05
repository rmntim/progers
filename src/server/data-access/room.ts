import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { room, room as roomTable } from "~/server/db/schema";

export async function getRooms() {
  const rooms = await db.query.room.findMany();
  return rooms;
}

export async function getRoom(roomId: string) {
  const room = await db.query.room.findFirst({
    where: eq(roomTable.id, roomId),
  });
  return room;
}

export async function getRoomsByUserId(userId: string) {
  const rooms = await db.query.room.findMany({
    where: eq(roomTable.userId, userId),
  });
  return rooms;
}

export async function deleteRoom(roomId: string) {
  await db.delete(room).where(eq(room.id, roomId));
}
