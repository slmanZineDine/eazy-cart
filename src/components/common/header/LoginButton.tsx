// Show user profile icon if use is logging

import { buttonVariants } from "@/components/ui/button";
import CustomLink from "../customLink";
import { paths } from "@/constants/paths";

const LoginButton = () => {
  return (
    <CustomLink
      className={`${buttonVariants({
        size: "default",
        variant: "default",
      })} ms-2`}
      href={paths.login}
    >
      Login
    </CustomLink>
  );
};

export default LoginButton;
