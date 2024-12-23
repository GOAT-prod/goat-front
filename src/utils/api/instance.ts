import { Fetches } from "@siberiacancode/fetches";

export const headers: Record<string, string> = {
  Authorization: process.env.NEXT_PUBLIC_AUTH_KEY || "",
};

export const api = new Fetches({
  baseURL: "http://188.225.45.200:8080",
  // baseURL: "http://localhost:8080",
});
