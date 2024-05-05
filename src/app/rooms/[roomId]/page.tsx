import GithubLink from "~/components/github-link";
import VideoPlayer from "~/components/video-player";
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
      <div className="grid max-h-max grid-cols-4 gap-4">
        <div className="col-span-3 flex h-max flex-col items-center justify-center rounded-md border p-4">
          <VideoPlayer room={room} />
        </div>
        <div className="col-span-1 flex flex-col items-start justify-between gap-4 rounded-md border p-8">
          <div>
            <h2 className="text-2xl font-bold">{room.name}</h2>
            {room.repository && (
              <GithubLink
                className="py-4 text-stone-400"
                repository={room.repository}
              />
            )}
            <p>{room.description ? room.description : "No description"}</p>
          </div>
          <p className="text-stone-400">Language: {room.language}</p>
        </div>
      </div>
    </main>
  );
}
