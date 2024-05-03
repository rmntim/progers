import { signIn } from "~/server/auth";
import { Button } from "~/components/ui/button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
}
