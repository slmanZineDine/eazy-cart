// My-Components
import CustomLink from "../customLink";
// Thrid-Party =====> shadcn-ui
import { buttonVariants } from "@/components/ui/button";
// Data
import { paths } from "@/constants/paths";

const LoginButton = () => {
  return (
    <CustomLink
      className={`${buttonVariants({
        size: "default",
        variant: "default",
      })} ms-2`}
      href={paths.login}
      prefetch={false}
    >
      Login
    </CustomLink>
  );
};

export default LoginButton;
