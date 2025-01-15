// Next
import Link from "next/link";
import Image from "next/image";
// Data
import { paths } from "@/constants/paths";

const Logo = () => {
  return (
    <Link href={paths.home.root} prefetch={false} className="shrink-0">
      <Image
        width={100}
        height={76}
        alt="Logo"
        src="/assets/images/icon.png"
        priority
      />
    </Link>
  );
};

export default Logo;
