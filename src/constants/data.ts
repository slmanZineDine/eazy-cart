import { Languages, UserRole } from "./enums";

export const APP_LANGUAGES = {
  العربية: Languages.ARABIC,
  English: Languages.ENGLISH,
};

export const USERS = {
  slman: {
    username: "slman",
    name: "Slman Zinedine",
    role: UserRole.USER,
    email: "slman@email.com",
  },
  admin: {
    username: "admin",
    name: "Eazy Cart Admin",
    role: UserRole.ADMIN,
    email: "admin@email.com",
  },
};
