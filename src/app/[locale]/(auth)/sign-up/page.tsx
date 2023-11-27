// "use client";

import { authOptions } from "@/app/utils/auth";
import GithubSignInButton from "@/components/auth/github-sign-in-button";
import { getServerSession } from "next-auth";
// import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/admin");
  }
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="">
        <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
        <div className="space-y-4 mt-5">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block
            rounded-md border-0 px-3 py-3 shadow-sm ring-1 ring-inset ring-purple-700 
            focus:ring-2 focus:ring-inset focus:ring-purple-700"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-purple-700 px-3 py-3 text-sm font-semibold
            text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2">
        Already have an account?{" "}
        <Link className="text-white hover:underline" href="/login">
          Log in now!
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSignInButton />
        {/* <button
          onClick={() => signIn("github")}
          className="bg-[#333] p-3 rounded-md"
        >
          <Icon icon="mdi:github" />
        </button> */}
        {/* <button className="bg-[#333] p-3 rounded-md">
          <Icon icon="ant-design:google-outlined" />
        </button> */}
      </div>
    </div>
  );
}
