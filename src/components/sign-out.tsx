import { signOut } from "~/server/auth";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function SignOut({ username }: { username: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="flex flex-col items-center gap-2"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button type="submit">Sign Out</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Signed in as {username}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </form>
  );
}
