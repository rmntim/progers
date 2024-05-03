import { signOut } from "~/server/auth";
import { Button } from "~/components/ui/button";

export function SignOut({ username }: { username: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <p>Signed in as {username}</p>
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
