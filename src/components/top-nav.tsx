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
        {session === null ? (
          <SignIn />
        ) : (
          <div className="flex flex-row items-center gap-4">
            <p>{session.user?.name}</p>
            <SignOut />
          </div>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}
