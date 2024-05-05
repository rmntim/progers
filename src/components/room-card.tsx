"use client";
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
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
} from "~/components/ui/alert-dialog";
import { deleteRoomAction } from "~/app/your-rooms/actions";

type RoomCardProps = {
  room: Room;
  deleteable: boolean;
};

export function RoomCard({ deleteable, room }: RoomCardProps) {
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
        {deleteable && <DeleteButton roomId={room.id} />}
      </CardFooter>
    </Card>
  );
}

function DeleteButton({ roomId }: { roomId: string }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructiveOutline"
          size="icon"
          className="border-none"
        >
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            room.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => await deleteRoomAction(roomId)}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function TrashIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
