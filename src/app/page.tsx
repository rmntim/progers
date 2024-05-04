import { Button } from "~/components/ui/button";
import { db } from "~/server/db";

export default async function HomePage() {
  const rooms = await db.query.room.findMany();

  return (
    <main className="flex min-h-screen flex-col justify-start gap-4 p-4">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="flex max-h-max flex-row justify-between rounded-lg border-[1px] border-stone-400 p-4"
        >
          <div className="flex max-h-max flex-col gap-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold">{room.name}</h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">{room.description || "No description"}</p>
              <span className="text-sm text-stone-400">{room.language}</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Button>Join</Button>
          </div>
        </div>
      ))}
    </main>
  );
}
