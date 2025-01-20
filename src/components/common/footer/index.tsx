// Next
import Image from "next/image";
// My-Components
import SocialMedia from "../social-media";
import BottomFooter from "./BottomFooter";
import SectionTitle from "../section-title";
import ConnectionInfo from "./ConnectionInfo";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
import getDictionary from "@/utils/translation";
import { Languages } from "@/constants/enums";

const Footer = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const {
    footer: { company, account, download },
  } = await getDictionary(locale);

  return (
    <footer className="section-padding">
      <div className="container flex flex-col gap-4 py-4 md:flex-row">
        <section className="w-full border-b pb-4 md:w-1/3 md:border-b-0">
          <SectionTitle title="Eazy" mainWord="Cart" />
          <SocialMedia />
          <ConnectionInfo />
        </section>
        <div className="grid w-full grid-cols-1 gap-6 md:w-2/3 md:gap-4 xs:grid-cols-3">
          <section>
            <h2 className="mb-4 text-xl font-bold text-secondary">
              {company.title}
            </h2>
            <ul
              className={`flex flex-wrap items-center gap-1 divide-x ${locale === Languages.ARABIC ? "divide-x-reverse" : ""} px-1 ps-2 text-muted-foreground xs:flex-col xs:items-start xs:divide-x-0`}
            >
              <li className="border-secondary ps-2">{company.about}</li>
              <li className="border-secondary ps-2">{company.services}</li>
              <li className="border-secondary ps-2">{company.caseStudies}</li>
              <li className="border-secondary ps-2">{company.blog}</li>
              <li className="border-secondary ps-2">{company.contact}</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-bold text-secondary">
              {account.title}
            </h2>
            <ul
              className={`flex flex-wrap items-center gap-1 divide-x ${locale === Languages.ARABIC ? "divide-x-reverse" : ""} px-1 ps-2 text-muted-foreground xs:flex-col xs:items-start xs:divide-x-0`}
            >
              <li className="border-secondary ps-2">{account.signIn}</li>
              <li className="border-secondary ps-2">{account.viewCart}</li>
              <li className="border-secondary ps-2">{account.myWishlist}</li>
              <li className="border-secondary ps-2">{account.trackMyOrder}</li>
              <li className="border-secondary ps-2">
                {account.compareProducts}
              </li>
            </ul>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-bold text-secondary">
              {download}
            </h2>
            <Image
              width={646}
              height={250}
              src="/assets/images/google-play.png"
              alt="Google play link."
            />
          </section>
        </div>
      </div>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
