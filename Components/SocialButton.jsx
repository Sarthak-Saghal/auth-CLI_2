import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function SocialButton({ type = "google", children }) {

  const base =
    "w-full flex items-center justify-center sm:justify-start gap-2 py-3 px-2 " +
    "rounded-md border border-zinc-700 bg-transparent hover:brightness-110 " +
    "transition";

  return (
    <button className={base}>
      {type === "google" ? (
        <FaGoogle className="text-lg" />
      ) : (
        <FaGithub className="text-lg" />
      )}
      <span className="text-sm">{children}</span>
    </button>
  );
}
