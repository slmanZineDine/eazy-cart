"use client";
import InputField from "@/components/common/custom-input";
import { Button } from "@/components/ui/button";
import { authAction } from "@/services/actions/authAction";
import { User } from "lucide-react";
import React, { useActionState } from "react";

const LoginForm = () => {
  const [state, action, pending] = useActionState(authAction, undefined);

  return (
    <form action={action} noValidate>
      <InputField
        label="Username"
        name="username"
        placeholder="Enter Slman"
        isRequired={false}
        icon={<User />}
        containerClassName="mb-4"
        inputClassName=""
        defaultValue={state?.data.username ?? ""}
        error={state?.errors}
        // dir="ltr"
      />
      <InputField
        type="password"
        name="password"
        label="Password"
        placeholder="Enter 12345678"
        isRequired={false}
        containerClassName=""
        inputClassName=""
        dir="ltr"
        defaultValue={state?.data.password ?? ""}
        error={state?.errors}
      />
      <button
        type="button"
        className="ms-auto block text-sm transition-colors duration-300 hover:text-primary"
        // onClick={() => setShowForgetPasswordModel(true)}
      >
        هل نسيت كلمة المرور؟
      </button>

      <p>{state?.errors?.responseErr ?? ""}</p>

      <Button disabled={pending} className="mt-8 w-full">
        تسجيل الدخول
      </Button>
      {/* 
    <Button
      color="primary"
      className="mt-8"
      type="submit"
      disabled={isLoading}
    >
      {isLoading && (
        <LoadingSpinner color="text-white" size="loading-sm" />
      )}
      تسجيل الدخول
    </Button> */}
    </form>
  );
};

export default LoginForm;
