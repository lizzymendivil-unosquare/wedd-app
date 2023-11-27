"use client";

import { signIn } from "next-auth/react";
import { Icon } from "@iconify/react";

export default function GithubSignInButton() {
  return (
    <button
      onClick={() => signIn("github")}
      className="bg-[#333] p-3 rounded-md"
    >
      <Icon icon="mdi:github" />
    </button>
  );
}
