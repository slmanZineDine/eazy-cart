// Next
import Link from "next/link";
import Image from "next/image";
// Data
import { paths } from "@/constants/paths";

const Logo = ({ width, height }: { width: number; height: number }) => {
  return (
    <Link href={`/${paths.home.root}`} prefetch={false} className="shrink-0">
      <Image
        width={width}
        height={height}
        alt="Logo"
        src="/assets/images/icon.png"
        priority
      />
    </Link>
  );
};

export default Logo;
