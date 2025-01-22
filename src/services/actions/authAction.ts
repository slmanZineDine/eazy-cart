"use server";

import { paths } from "@/constants/paths";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const user = {
  username: "slman",
  password: "12345678",
};

export async function authAction(_: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const locale = await getCurrentLocale();
  const { errors } = await getDictionary(locale);

  const data = {
    username: formData.get("username")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };

  // Validation
  if (data.username.trim() === "") {
    return { errors: { username: errors.username }, data };
  } else if (data.password.trim() === "") {
    return { errors: { password: errors.password }, data };
  }

  if (data.username !== user.username || data.password !== user.password) {
    return {
      errors: { responseErr: errors.loginErr },
      data,
    };
  }

  (await cookies()).set("theToken", crypto.randomUUID(), {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 1000 * 60 * 60), // 1 Hour
  });

  redirect(`/${locale}/${paths.home.root}`);
}

export async function logout() {
  (await cookies()).delete("theToken");
  redirect(`/${paths.home.root}`);
}
