// Third-Party =====> shadcn-ui
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// My-Components
import CustomLink from "../custom-link";
import LogoutButton from "./LogoutButton";
// Utils
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
// Libs
import { getSession } from "@/libs/iron-session";
// Data
import { paths } from "@/constants/paths";
import { getUserByUsername } from "@/constants/data";

const AvatarMenu = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { common } = await getDictionary(locale);

  // ################### IRON SESSION ###################
  const { username } = await getSession();

  // ################### USER ###################
  const user = getUserByUsername(username);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="ms-2">
          <AvatarImage
            src="/assets/images/avatar.png"
            alt="user avatar"
            className="cursor-pointer"
          />
          <AvatarFallback>
            <Skeleton className="size-full" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer flex-col py-4 hover:!bg-transparent">
          <h2 className="text-lg font-bold text-primary">{user?.name}</h2>
          <p>{user?.email}</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="mb-2 border-y hover:!bg-muted">
          <CustomLink
            href={`/${locale}/${paths.profile.root}`}
            className="w-full"
          >
            {common.profile}
          </CustomLink>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:!bg-transparent">
          <LogoutButton translations={common} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;
