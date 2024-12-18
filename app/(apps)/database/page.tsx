import { redirect } from "next/navigation";

export default async function Database() {
  redirect("/database/admin");
}
