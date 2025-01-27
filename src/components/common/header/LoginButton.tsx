// My-Components
import CustomLink from "../custom-link";
// Thrid-Party =====> shadcn-ui
import { buttonVariants } from "@/components/ui/button";
// Utils
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
// Libs
import { getSession } from "@/libs/iron-session";
// Data
import { paths } from "@/constants/paths";

const LoginButton = async ({ className = "" }: { className?: string }) => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { navbar } = await getDictionary(locale);

  // ################### IRON SESSION ###################
  const { isLoggedIn } = await getSession();

  if (isLoggedIn) {
    return <></>;
  } else {
    return (
      <CustomLink
        className={`${buttonVariants({
          size: "default",
          variant: "default",
        })} ${className}`}
        href={`/${locale}/${paths.login}`}
      >
        {navbar.login}
      </CustomLink>
    );
  }
};

export default LoginButton;
