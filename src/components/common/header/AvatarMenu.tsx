import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import LogoutButton from "./LogoutButton";
import CustomLink from "../custom-link";
import { Skeleton } from "@/components/ui/skeleton";
import { paths } from "@/constants/paths";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
import getDictionary from "@/utils/translation";

const AvatarMenu = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { common } = await getDictionary(locale);

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
          <h2 className="text-lg font-bold text-primary">Slman Zinedine</h2>
          <p>example@email.com</p>
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
