"use server";

// Next
import { redirect } from "next/navigation";
// Utils
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
// Lib
import { getSession } from "@/libs/iron-session";
// Data
import { paths } from "@/constants/paths";
import { getUserByUsername, PASSWORD } from "@/constants/data";

export async function login(_: any, formData: FormData) {
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

  // Connect to backend
  const user = getUserByUsername(username);

  if (!user || user.password !== PASSWORD) {
    return {
      errors: { responseErr: errors.loginErr },
      data,
    };
  }

  // Store Session
  const session = await getSession();

  session.username = user.username;
  session.role = user.role;
  session.isLoggedIn = true;

  await session.save();

  redirect(`/${locale}/${paths.home.root}`);
}

export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect(`/${paths.home.root}`);
}
