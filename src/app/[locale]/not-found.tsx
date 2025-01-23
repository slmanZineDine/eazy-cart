import { paths } from "@/constants/paths";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="flex-center text-textColor container h-screen flex-col gap-4">
        <Image
          height={300}
          width={400}
          alt="not-found"
          src="/assets/svg/NotFound.svg"
          className="-mb-4 -mt-16"
        />
        <p className="text-center text-3xl">الصفحة غير موجودة</p>
        <div className="flex-between gap-4">
          <Link
            href={`/${paths.home.root}`}
            className="hover:bg-primaryDarker rounded-lg bg-primary p-2 text-white transition-colors duration-300"
          >
            عودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </section>
    </main>
  );
}
