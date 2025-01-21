// Next
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
import Image from "next/image";
// React
import { ReactNode } from "react";

const TextImage = async ({
  imageSrc,
  children,
}: {
  imageSrc: string;
  children: ReactNode;
}) => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { common } = await getDictionary(locale);

  return (
    <section className="section-padding">
      <div className="flex-between container flex-col gap-8 lg:flex-row lg:items-start">
        <div>
          {children}
          <div className="text-muted-foreground">
            <p>{common.paragraphOne}</p>
            <p className="my-6">{common.paragraphTwo}</p>
            <p>{common.paragraphTwo}</p>
          </div>
        </div>
        <Image width={400} height={600} src={imageSrc} alt="Image." />
      </div>
    </section>
  );
};

export default TextImage;
