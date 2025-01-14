// Third-Party =====> shadcn-ui
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-[250px]" />
        <div className="flex-between w-[250px]">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
