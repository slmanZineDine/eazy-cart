// Third-Party =====> shadcn-ui
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Libs
import { getSession } from "@/libs/iron-session";
// Data
import { getUserByUsername } from "@/constants/data";

const ProfilePage = async () => {
  // ################### IRON SESSION ###################
  const { username } = await getSession();

  // ################### USER ###################
  const user = getUserByUsername(username);

  return (
    <section className="section-padding">
      <div className="flex-center container flex-col">
        <Avatar className="mb-6 size-40">
          <AvatarImage
            src="/assets/images/avatar.png"
            alt="user avatar"
            className="cursor-pointer"
          />
          <AvatarFallback>
            <Skeleton className="size-full" />
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary">{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
