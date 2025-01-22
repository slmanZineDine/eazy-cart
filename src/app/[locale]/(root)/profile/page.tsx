import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

const ProfilePage = () => {
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
          <h2 className="text-2xl font-bold text-primary">Slman Zinedine</h2>
          <p>example@email.com</p>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
