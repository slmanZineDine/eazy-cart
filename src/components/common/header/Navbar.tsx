"use client";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";
// My-Hooks
import useOutsideClick from "@/hooks/common/useOutsideClick";
// Icons
import {
  House,
  Menu,
  MessageCircle,
  Pencil,
  Store,
  Users,
  X,
} from "lucide-react";
// Data
import { paths } from "@/constants/paths";

const Navbar = () => {
  // ################### NEXT HOOKS ###################
  const pathName = usePathname();

  // ################### CUSTOM HOOKS ###################
  const [isOpen, setIsOpen, navbarRef] = useOutsideClick<HTMLUListElement>();

  // ################### DATA ###################
  const links = [
    {
      id: 1,
      title: "Home",
      icon: <House className="cursor-pointer min700:hidden" />,
      href: paths.home.root,
    },
    {
      id: 2,
      title: "About",
      icon: <Pencil className="cursor-pointer min700:hidden" />,
      href: paths.about.root,
    },
    {
      id: 3,
      title: "Shop",
      icon: <Store className="cursor-pointer min700:hidden" />,
      href: "/#shop",
    },
    {
      id: 4,
      title: "Our Team",
      icon: <Users className="cursor-pointer min700:hidden" />,
      href: paths.ourTeam.root,
    },
    {
      id: 5,
      title: "Contact",
      icon: <MessageCircle className="cursor-pointer min700:hidden" />,
      href: paths.contact.root,
    },
  ];

  return (
    <>
      <div
        className={`${isOpen ? "" : "max700:hidden"} absolute bottom-0 mx-auto w-11/12 rounded-2xl bg-background p-4 min700:static min700:h-full min700:w-auto min700:rounded-none min700:p-0`}
      >
        <ul
          className={
            "min700:flex-between grid grid-cols-3 items-center justify-center rounded-2xl min700:h-full"
          }
          ref={navbarRef}
        >
          {links.map((link) => (
            <li
              key={link.id}
              className="min700:h-full"
              onClick={() => setIsOpen(false)}
            >
              <Link
                className={`${pathName === link.href ? "text-secondary" : ""} flex-center flex-col whitespace-nowrap p-2 font-semibold text-muted-foreground transition-colors hover:text-secondary min700:h-full`}
                href={link.href}
                prefetch={false}
              >
                {link.icon}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <X
          className="ms-auto cursor-pointer text-muted-foreground transition-colors hover:text-secondary min700:hidden"
          size={30}
          onClick={() => setIsOpen(false)}
        />
      </div>
      {!isOpen && (
        <Menu
          className="me-2 ms-auto cursor-pointer min700:hidden"
          onClick={() => setIsOpen(true)}
        />
      )}
    </>
  );
};

export default Navbar;
