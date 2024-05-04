import { CreateRoomForm } from "./create-room-form";

export default function CreateRoom() {
  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center gap-4 p-4">
      <h1 className="pt-4 text-3xl font-bold">Create Room</h1>
      <CreateRoomForm />
    </main>
  );
}
