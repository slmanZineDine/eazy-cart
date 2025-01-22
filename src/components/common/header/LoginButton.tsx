// My-Components
import CustomLink from "../custom-link";
// Thrid-Party =====> shadcn-ui
import { buttonVariants } from "@/components/ui/button";
// Data
import { paths } from "@/constants/paths";
import { isUserlogged } from "@/utils/auth/isUserlogged";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

const LoginButton = async ({ className = "" }: { className?: string }) => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { navbar } = await getDictionary(locale);

  // ################### UTILS ###################
  const isLogged = await isUserlogged();

  if (isLogged) {
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
