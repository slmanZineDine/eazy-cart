import { Languages, UserRole } from "./enums";

export const APP_LANGUAGES = {
  العربية: Languages.ARABIC,
  English: Languages.ENGLISH,
};

export const PASSWORD = "12345678";

export const USERS = [
  {
    username: "slman",
    name: "Slman Zinedine",
    role: UserRole.USER,
    email: "slman@email.com",
    password: PASSWORD,
  },
  {
    username: "admin",
    name: "Eazy Cart Admin",
    role: UserRole.ADMIN,
    email: "admin@email.com",
    password: PASSWORD,
  },
];

export function getUserByUsername(username: string) {
  return USERS.find((user) => user.username === username);
}
