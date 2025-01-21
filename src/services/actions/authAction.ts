"use server";

import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const user = {
  username: "slman",
  password: "12345678",
};

export async function authAction(_: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = {
    username: formData.get("username")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };

  // Validation
  if (data.username.trim() === "") {
    return { errors: { username: "Username is required." }, data };
  } else if (data.password.trim() === "") {
    return { errors: { password: "Password is required." }, data };
  }

  if (data.username !== user.username || data.password !== user.password) {
    return {
      errors: { responseErr: "Invalid username or password." },
      data,
    };
  }

  (await cookies()).set("theToken", crypto.randomUUID(), {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 1000 * 60 * 60), // 1 Hour
  });

  const Locale = await getCurrentLocale();
  redirect(`/${Locale}/`);
}

export async function logout() {
  (await cookies()).delete("theToken");
}
