import GithubLink from "~/components/github-link";
import { getRoom } from "~/server/data-access/room";

type RoomProps = {
  params: {
    roomId: string;
  };
};

export default async function Room({ params }: RoomProps) {
  const { roomId } = params;
  const room = await getRoom(roomId);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <main className="min-w-screen flex min-h-screen flex-col gap-4 p-4">
      <div className="flex flex-row items-center justify-between gap-4">
        <h1 className="pt-4 text-3xl font-bold">{room.name}</h1>
        {room.repository && (
          <GithubLink className="text-stone-400" repository={room.repository} />
        )}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 flex aspect-video items-center justify-center rounded-md border">
          VIDEO PLAYER
        </div>
        <div className="col-span-1 flex items-center justify-center rounded-md border">
          INFO PANEL
        </div>
      </div>
      <div className="flex flex-row items-center justify-between p-4">
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-2xl font-bold">Description</h2>
          <p>{room.description ? room.description : "No description"}</p>
        </div>
        <div>
          <h2 className="text-stone-400">{room.language}</h2>
        </div>
      </div>
    </main>
  );
}
