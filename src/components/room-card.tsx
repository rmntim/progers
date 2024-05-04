import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { GITHUB_PREFIX } from "~/lib/utils";
import { type Room } from "~/server/db/schema";

export function RoomCard({ room }: { room: Room }) {
  return (
    <Card className="w-1/2 transition-colors hover:cursor-pointer hover:border-stone-200">
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>
          {room.description || "No description"}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between text-sm text-stone-400">
        <p>{room.language}</p>
        {room.repository && (
          <a href={room.repository} target="_blank" rel="noreferrer">
            {room.repository.slice(GITHUB_PREFIX.length)}
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
