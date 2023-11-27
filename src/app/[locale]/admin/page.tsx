import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <h1 className="mt-3 text-white">Welcome to Admin Page!</h1>
    </>
  );
}
