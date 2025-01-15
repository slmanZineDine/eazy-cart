// Next
import Link from "next/link";
// Thrid-Party =====> shadcn-ui
import { buttonVariants } from "@/components/ui/button";
// Data
import { paths } from "@/constants/paths";

const LoginButton = () => {
  return (
    <Link
      className={`${buttonVariants({
        size: "default",
        variant: "default",
      })} ms-2`}
      href={paths.login}
      prefetch={false}
    >
      Login
    </Link>
  );
};

export default LoginButton;
