import Link from "next/link";
import { Button } from "~/components/ui/button";

export default async function HomePage() {
  return (
    <main className="flex min-h-screen min-w-full flex-col justify-center gap-4 p-4">
      <h1 className="text-7xl font-bold">Progers</h1>
      <h2 className="text-4xl text-stone-400">
        Find developers to work with, with no hassle.
      </h2>

      <div className="flex flex-row gap-4">
        <Button>
          <Link href="/create-room">Create Room</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/find">Find Rooms</Link>
        </Button>
      </div>
    </main>
  );
}
