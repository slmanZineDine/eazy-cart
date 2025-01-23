"use client";

import { paths } from "@/constants/paths";
import Image from "next/image";
import Link from "next/link";

// type Props = {
//   error: Error;
//   reset: () => void;
// };
const ErrorPage = () => {
  return (
    <section className="flex-center text-textColor container h-screen flex-col gap-2">
      <Image
        height={300}
        width={400}
        alt="not-found"
        src="/assets/svg/error.svg"
        className="-mb-4 -mt-16"
      />
      <h1 className="text-8xl font-bold">Error Status</h1>
      <p className="text-center text-3xl">Error Message</p>
      <Link
        href={`/${paths.home.root}`}
        className="hover:bg-primaryDarker rounded-lg bg-primary p-2 text-white transition-colors duration-300"
      >
        عودة إلى الصفحة الرئيسية
      </Link>
    </section>
  );
};
export default ErrorPage;
