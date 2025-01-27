// My-Components
import Logo from "./Logo";
import Navbar from "./Navbar";
import CartButton from "./CartButton";
import AvatarMenu from "./AvatarMenu";
import LoginButton from "./LoginButton";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
// Utils
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
// Libs
import { getSession } from "@/libs/iron-session";

const Header = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { navbar } = await getDictionary(locale);

  // ################### IRON SESSION ###################
  const { isLoggedIn, role } = await getSession();

  return (
    <header className="fixed inset-x-0 bottom-4 z-40 w-full rounded-full bg-background drop-shadow-md transition-[bottom] duration-500 min700:bottom-[calc(100%-var(--header-height))] min700:rounded-none">
      <nav className="flex-between container relative h-headerHeight">
        <Logo width={100} height={76} />
        <Navbar translations={navbar} role={role}>
          <div className="flex-center my-4">
            <LoginButton className="h-10 rounded-md px-8 min700:hidden" />
          </div>
        </Navbar>
        <div className="flex-between gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <CartButton />
          {isLoggedIn && <AvatarMenu />}
          <LoginButton className="ms-2 hidden min700:block" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
