import { Fetches } from "@siberiacancode/fetches";

export const headers: Record<string, string> = {
  Authorization: process.env.NEXT_PUBLIC_AUTH_KEY || "",
};

export const api = new Fetches({
  baseURL: "http://localhost:8080",
});
