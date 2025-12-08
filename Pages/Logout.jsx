import React from "react";
import { Link } from "react-router-dom";

export default function Logout() {
  // In a real app you'd clear tokens, etc.
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center text-white max-w-sm bg-[#0b0b0c] p-8 rounded-[18px] border border-zinc-800">
        <h2 className="text-xl font-semibold mb-2">You are logged out</h2>
        <p className="text-zinc-400 mb-4">Thanks for visiting. Come back soon!</p>
        <Link to="/login" className="inline-block mt-3 py-2 px-4 rounded-md bg-white text-black">Sign In</Link>
      </div>
    </div>
  );
}
