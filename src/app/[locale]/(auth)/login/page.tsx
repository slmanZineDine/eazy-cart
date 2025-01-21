import LoginForm from "./_components/LoginForm";
import DeliverySvg from "@/components/common/svg-components/DeliverySvg";
import Logo from "@/components/common/header/Logo";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

const LoginPage = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { navbar, common } = await getDictionary(locale);

  return (
    <>
      <section className="flex-center w-full flex-col bg-background pt-12 lg:w-1/2">
        <div className="container md:px-16">
          <div className="flex-center">
            <Logo width={200} height={125} />
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
