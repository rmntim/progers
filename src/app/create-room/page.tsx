import { CreateRoomForm } from "./create-room-form";

export default function CreateRoom() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-4">
      <h1 className="text-3xl font-bold">Create Room</h1>
      <CreateRoomForm />
    </main>
  );
}
