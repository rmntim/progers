import { RoomCard } from "~/components/room-card";
import { db } from "~/server/db";

export default async function HomePage() {
  const rooms = await db.query.room.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-4 pt-8">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </main>
  );
}
