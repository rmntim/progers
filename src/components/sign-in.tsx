import { signIn } from "~/auth";
import { Button } from "~/components/ui/button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        await signIn("github");
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
}
