// Next
import { Metadata } from "next";
// My-Components
import LoginForm from "./_components/LoginForm";
import Logo from "@/components/common/header/Logo";
import DeliverySvg from "@/components/common/svg-components/DeliverySvg";
// Utils
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
// Data
import { Locale } from "@/i18n.config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const locale = (await params).locale;

  const { navbar } = await getDictionary(locale);

  return { title: { absolute: navbar.login } };
}

const LoginPage = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { navbar, common } = await getDictionary(locale);

  return (
    <>
      <section className="flex-center w-full flex-col bg-background pt-12 lg:w-1/2">
        <div className="container md:px-16">
          <div className="flex-center">
            <Logo width={175} height={100} />
          </div>

          <h2 className="flex-center mb-8 mt-2 gap-2 text-4xl font-bold">
            {navbar.login} 👋
          </h2>
          {/* ========================== Form ========================== */}
          <LoginForm translations={common} />
        </div>
      </section>
      <section className="lg:flex-center hidden w-1/2">
        <DeliverySvg />
      </section>
    </>
  );
};

export default LoginPage;
