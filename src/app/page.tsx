import { RoomCard } from "~/components/room-card";
import { Button } from "~/components/ui/button";
import { db } from "~/server/db";
import { SearchBar } from "../components/search-bar";
import Link from "next/link";

export default async function HomePage() {
  const rooms = await db.query.room.findMany();

  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center gap-8 p-4 pt-8">
      <div className="flex w-full flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Find Rooms</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
      <SearchBar />
      <div className="container grid grid-flow-row grid-cols-1 gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </main>
  );
}
