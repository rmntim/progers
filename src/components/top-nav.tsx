import { ModeToggle } from "~/components/mode-toggle";
import { SignIn } from "~/components/sign-in";
import { auth } from "~/server/auth";
import { SignOut } from "~/components/sign-out";

export async function TopNav() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between p-4">
      <a href="/" className="text-2xl font-bold">
        progers
      </a>
      <div className="flex items-center gap-4">
        <ModeToggle />
        {session === null ? (
          <SignIn />
        ) : (
          <SignOut username={session.user?.name ?? "unknown"} />
        )}
      </div>
    </nav>
  );
}
