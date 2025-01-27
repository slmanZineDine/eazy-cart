import { SessionOptions } from "iron-session";

export const defaultSession: SessionData = {
  username: "",
  role: "",
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  // TODO: Add password to .env file
  password: "J3vL#29w^7ks!mRzVp0b@Xy#jKs8Fw1u",
  cookieName: "session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + 1000 * 60 * 60), // 1 Hour
  },
};
