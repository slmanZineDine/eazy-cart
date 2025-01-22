import { cookies } from "next/headers";

export const isUserlogged = async () => (await cookies()).has("theToken");
export const getUserRole = async () => (await cookies()).get("theRole")?.value;
