// My-Components
import CustomLink from "../custom-link";
// Thrid-Party =====> shadcn-ui
import { buttonVariants } from "@/components/ui/button";
// Data
import { paths } from "@/constants/paths";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

const LoginButton = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { navbar } = await getDictionary(locale);

  return (
    <CustomLink
      className={`${buttonVariants({
        size: "default",
        variant: "default",
      })} ms-2`}
      href={`/${paths.login}`}
      prefetch={false}
    >
      {navbar.login}
    </CustomLink>
  );
};

export default LoginButton;
