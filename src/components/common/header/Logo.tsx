import Image from "next/image";
import CustomLink from "../customLink";
import { paths } from "@/constants/paths";

const Logo = () => {
  return (
    <CustomLink href={paths.home.root} className="shrink-0">
      <Image
        width={100}
        height={76}
        alt="Logo"
        src="/assets/images/icon.png"
        priority
      />
    </CustomLink>
  );
};

export default Logo;
