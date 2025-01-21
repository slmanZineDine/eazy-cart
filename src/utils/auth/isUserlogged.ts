import { cookies } from "next/headers";

export const isUserlogged = async () => (await cookies()).has("theToken");
