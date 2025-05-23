"use client";

// React
import { useActionState } from "react";
// My-Components
import { Button } from "@/components/ui/button";
import InputField from "@/components/common/custom-input";
// Server-Action
import { login } from "@/services/actions/authAction";
// Icons
import { User } from "lucide-react";

const LoginForm = ({
  translations,
}: {
  translations: { [key: string]: string };
}) => {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form action={action} noValidate>
      <InputField
        label={translations.username}
        name="username"
        placeholder="Enter slman or admin"
        isRequired={false}
        icon={<User />}
        containerClassName="mb-4"
        defaultValue={state?.data.username ?? ""}
        error={state?.errors}
      />
      <InputField
        type="password"
        name="password"
        label={translations.password}
        placeholder="Enter 12345678"
        isRequired={false}
        inputClassName="!pr-14 !pl-2"
        dir="ltr"
        defaultValue={state?.data.password ?? "12345678"}
        error={state?.errors}
      />
      <button
        type="button"
        className="ms-auto block text-sm transition-colors duration-300 hover:text-primary"
      >
        هل نسيت كلمة المرور؟
      </button>

      <p className="mt-2 flex items-center gap-2 text-red-400">
        {state?.errors?.responseErr ?? ""}
      </p>

      <Button
        disabled={pending}
        size="lg"
        className={`mt-8 w-full text-lg ${pending ? "cursor-wait" : ""}`}
      >
        {translations.login}
      </Button>
    </form>
  );
};

export default LoginForm;
