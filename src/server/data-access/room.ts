import { eq } from "drizzle-orm";
import { unstable_noStore as noStore } from "next/cache";
import { db } from "~/server/db";
import { room as roomTable } from "~/server/db/schema";

export async function getRooms() {
  noStore();
  const rooms = await db.query.room.findMany();
  return rooms;
}

export async function getRoom(roomId: string) {
  noStore();
  const room = await db.query.room.findFirst({
    where: eq(roomTable.id, roomId),
  });
  return room;
}
