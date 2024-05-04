import { signOut } from "~/server/auth";
import { Button } from "~/components/ui/button";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="flex flex-col items-center gap-2"
    >
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
