// My-Components
import Logo from "./Logo";
import Navbar from "./Navbar";
import CartButton from "./CartButton";
import LoginButton from "./LoginButton";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
import getDictionary from "@/utils/translation";

const Header = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { navbar } = await getDictionary(locale);

  return (
    <header className="fixed inset-x-0 bottom-4 z-40 w-full rounded-full bg-background drop-shadow-md transition-[bottom] duration-500 min700:bottom-[calc(100%-var(--header-height))] min700:rounded-none">
      <nav className="flex-between container relative h-headerHeight">
        <Logo />
        <Navbar translations={navbar} />
        <div className="flex-between gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <CartButton />
          <LoginButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
