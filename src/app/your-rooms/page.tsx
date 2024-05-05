import { RoomCard } from "~/components/room-card";
import { auth } from "~/server/auth";
import { getRoomsByUserId } from "~/server/data-access/room";

export default async function YourRooms() {
  const session = await auth();
  const rooms = await getRoomsByUserId(session?.user.id ?? "");

  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center gap-4 p-4">
      <h1 className="pt-4 text-3xl font-bold">Your Rooms</h1>
      <div className="container grid grid-flow-row grid-cols-1 gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </main>
  );
}
