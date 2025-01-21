import LoginForm from "./_components/LoginForm";
import DeliverySvg from "@/components/common/svg-components/DeliverySvg";
import Logo from "@/components/common/header/Logo";

const LoginPage = () => {
  return (
    <main className="flex-between">
      <section className="flex h-screen w-full flex-col items-start justify-start bg-white pt-12 md:w-7/12">
        <div className="container md:px-16">
          <Logo />

          <h2 className="flex-center mb-8 mt-2 gap-2 text-2xl font-bold">
            Login 👋
            {/* <PiHandWavingFill className="text-3xl text-yellow-500" /> */}
          </h2>
          {/* ========================== Form ========================== */}
          <LoginForm />
        </div>
      </section>
      <section className="md:flex-center hidden h-screen w-6/12">
        <DeliverySvg />
      </section>
    </main>
  );
};

export default LoginPage;
