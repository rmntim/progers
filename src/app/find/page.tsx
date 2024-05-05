import { RoomCard } from "~/components/room-card";
import { auth } from "~/server/auth";
import { getRooms } from "~/server/data-access/room";
import { unstable_noStore as noStore } from "next/cache";

export default async function FindRooms() {
  noStore();
  const session = await auth();
  const rooms = await getRooms();

  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center gap-4 p-4">
      <h1 className="pt-4 text-3xl font-bold">Find Rooms</h1>
      <div className="container grid grid-flow-row grid-cols-1 gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            deleteable={room.userId === session?.user.id}
          />
        ))}
      </div>
    </main>
  );
}
