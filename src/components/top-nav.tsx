import { ModeToggle } from "~/components/mode-toggle";
import { SignIn } from "~/components/sign-in";
import { auth } from "~/server/auth";
import { SignOut } from "~/components/sign-out";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export async function TopNav() {
  const session = await auth();
  const logoLink = session === null ? "/" : "/find";

  return (
    <nav className="flex items-center justify-between border-b p-4">
      <Link href={logoLink} className="text-2xl font-bold">
        progers
      </Link>
      <div className="flex items-center gap-4">
        {session === null ? (
          <SignIn />
        ) : (
          <div className="flex flex-row items-center gap-4">
            <p>{session.user?.name}</p>
            <SignOut />
            <Button variant="outline" size="icon" asChild>
              <Link href="/create-room">
                <PlusIcon />
              </Link>
            </Button>
          </div>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}

function PlusIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
