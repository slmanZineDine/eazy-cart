"use server";

import { USERS } from "@/constants/data";
import { paths } from "@/constants/paths";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const PASSWORD = "12345678";

export async function authAction(_: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const locale = await getCurrentLocale();
  const { errors } = await getDictionary(locale);

  const data = {
    username: formData.get("username")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };

  const { username, password } = data;

  // Validation
  if (username.trim() === "") {
    return { errors: { username: errors.username }, data };
  } else if (password.trim() === "") {
    return { errors: { password: errors.password }, data };
  }

  if (username !== USERS[username].username || password !== PASSWORD) {
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
  (await cookies()).set("theRole", USERS[username].role, {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 1000 * 60 * 60), // 1 Hour
  });

  redirect(`/${locale}/${paths.home.root}`);
}

export async function logout() {
  (await cookies()).delete("theToken");
  (await cookies()).delete("theRole");
  redirect(`/${paths.home.root}`);
}
