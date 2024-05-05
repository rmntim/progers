import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { type Room } from "~/server/db/schema";
import { Button } from "~/components/ui/button";
import GithubLink from "~/components/github-link";

export function RoomCard({ room }: { room: Room }) {
  return (
    <Card className="w-full">
      <div className="flex flex-row items-center justify-between pr-6">
        <CardHeader>
          <CardTitle>{room.name}</CardTitle>
          <CardDescription>
            {room.description ? room.description : "No description"}
          </CardDescription>
        </CardHeader>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join</Link>
        </Button>
      </div>
      <CardFooter className="flex justify-between text-sm text-stone-400">
        <p>{room.language}</p>
        {room.repository && <GithubLink repository={room.repository} />}
      </CardFooter>
    </Card>
  );
}
