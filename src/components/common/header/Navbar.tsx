"use client";

// Next
import { useParams, usePathname } from "next/navigation";
// My-Components
import CustomLink from "../custom-link";
// My-Hooks
import useOutsideClick from "@/hooks/common/useOutsideClick";
// Icons
import {
  House,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Pencil,
  Store,
  Users,
  X,
} from "lucide-react";
// Data
import { paths } from "@/constants/paths";
import { ReactNode } from "react";
import { UserRole } from "@/constants/enums";

const Navbar = ({
  translations,
  role,
  children,
}: {
  translations: { [key: string]: string };
  role?: string;
  children: ReactNode;
}) => {
  // ################### NEXT HOOKS ###################
  const { locale } = useParams();
  const pathName = usePathname();

  // ################### CUSTOM HOOKS ###################
  const [isOpen, setIsOpen, navbarRef] = useOutsideClick<HTMLDivElement>();

  // ################### DATA ###################
  const links = [
    {
      id: 1,
      title: translations.home,
      icon: <House className="cursor-pointer min700:hidden" />,
      href: paths.home.root,
      isShow: true,
    },
    {
      id: 2,
      title: translations.about,
      icon: <Pencil className="cursor-pointer min700:hidden" />,
      href: paths.about.root,
      isShow: true,
    },
    {
      id: 3,
      title: translations.dashboard,
      icon: <LayoutDashboard className="cursor-pointer min700:hidden" />,
      href: paths.dashboard.root,
      isShow: role === UserRole.ADMIN,
    },
    {
      id: 4,
      title: translations.shop,
      icon: <Store className="cursor-pointer min700:hidden" />,
      href: paths.shop,
      isShow: role !== UserRole.ADMIN,
    },
    {
      id: 5,
      title: translations.ourTeam,
      icon: <Users className="cursor-pointer min700:hidden" />,
      href: paths.ourTeam.root,
      isShow: true,
    },
    {
      id: 6,
      title: translations.contact,
      icon: <MessageCircle className="cursor-pointer min700:hidden" />,
      href: paths.contact.root,
      isShow: true,
    },
  ];

  return (
    <>
      <div
        className={`${isOpen ? "" : "max700:hidden"} absolute inset-x-0 bottom-0 z-50 mx-auto w-11/12 rounded-2xl bg-background p-4 min700:static min700:h-full min700:w-auto min700:rounded-none min700:p-0`}
        ref={navbarRef}
      >
        <ul className="min700:flex-between grid grid-cols-3 items-center justify-center rounded-2xl min700:h-full">
          {links.map(
            (link) =>
              link.isShow && (
                <li
                  key={link.id}
                  className="min700:h-full"
                  onClick={() => setIsOpen(false)}
                >
                  <CustomLink
                    className={`${pathName === link.href ? "text-secondary" : ""} flex-center flex-col whitespace-nowrap p-2 font-semibold text-muted-foreground transition-colors hover:text-secondary min700:h-full`}
                    href={`/${locale}/${link.href}`}
                  >
                    {link.icon}
                    {link.title}
                  </CustomLink>
                </li>
              ),
          )}
        </ul>
        {children}
        <X
          className="ms-auto cursor-pointer text-muted-foreground transition-colors hover:text-secondary min700:hidden"
          size={30}
          onClick={() => setIsOpen(false)}
        />
      </div>
      {!isOpen && (
        <Menu
          className="me-2 ms-auto shrink-0 cursor-pointer min700:hidden"
          onClick={() => setIsOpen(true)}
        />
      )}
    </>
  );
};

export default Navbar;
