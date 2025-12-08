import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-[#0b0b0c] rounded-[18px] p-8 border border-zinc-800">
        <h2 className="text-xl font-semibold mb-2">Forgot Password</h2>
        <p className="text-sm text-zinc-400 mb-4">Enter your email and we'll send you a reset link.</p>

        <input
          className="w-full bg-[rgba(255,255,255,0.04)] py-3 px-4 rounded-md border border-zinc-700 placeholder:text-zinc-400 mb-4"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full py-3 rounded-md bg-white text-black font-semibold">Send Reset Link</button>

        <div className="text-center mt-4 text-sm text-zinc-400">
          Remembered? <Link to="/login" className="text-white underline">Log in</Link>
        </div>
      </div>
    </div>
  );
}
