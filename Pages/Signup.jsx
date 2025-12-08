import React, { useState } from "react";
import SocialButton from "../Components/SocialButton";
import Stepper from "../Components/Stepper";
import PasswordInput from "../Components/PasswordInput"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ first: "", last: "", email: "", password: "" });

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT GRADIENT CARD */}
        <motion.div
  className="relative gradient-panel neon-card p-12 flex flex-col justify-between rounded-[35px] overflow-hidden"
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>

  {/* Aurora Layer */}
  <div className="aurora"></div>

  {/* Floating Particles */}
  <div className="particle left-20 bottom-10" style={{ animationDelay: "0s" }}></div>
  <div className="particle left-48 bottom-16" style={{ animationDelay: "2s" }}></div>
  <div className="particle right-24 bottom-8" style={{ animationDelay: "4s" }}></div>
  <div className="particle right-36 bottom-20" style={{ animationDelay: "6s" }}></div>

  {/* Content */}
  <div className="relative z-20 text-center pt-6">
    <div className="text-sm text-zinc-200 mb-4 tracking-wider uppercase">Project UI</div>

    <h1 className="text-5xl font-extrabold mb-4 drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)]">
      Get Started <span className="text-white">with Us</span>
    </h1>

    <p className="text-zinc-200 text-lg opacity-90">
      Complete these easy steps to register your account.
    </p>
  </div>

  {/* Stepper */}
  <div className="relative z-20 mt-10 space-y-6">

    <motion.div
      className="glass-box py-5 px-6 rounded-xl flex items-center gap-4 border-white/20"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-semibold shadow-md">
        1
      </div>
      <div className="text-white text-[16px] font-medium">Sign up your account</div>
    </motion.div>

    <div className="glass-box py-5 px-6 rounded-xl flex items-center gap-4 opacity-85">
      <div className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center font-semibold">2</div>
      <div className="text-white/90 text-[16px]">Set up your workspace</div>
    </div>

    <div className="glass-box py-5 px-6 rounded-xl flex items-center gap-4 opacity-75">
      <div className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center font-semibold">3</div>
      <div className="text-white/90 text-[16px]">Set up your profile</div>
    </div>
  </div>

  <div className="relative z-20 text-center mt-10 text-sm text-white/80">
    © Project UI
  </div>
</motion.div>


        {/* RIGHT FORM */}
        <div className="bg-[#0b0b0c] rounded-[18px] p-8 border border-zinc-800 shadow-xl">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-2">Sign Up Account</h2>
            <p className="text-sm text-zinc-400 mb-4">Enter your personal data to create your account.</p>

            <div className="space-y-3 mb-4">
              <div className="flex gap-3">
                <SocialButton type="google">Google</SocialButton>
                <SocialButton type="github">Github</SocialButton>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 border-b border-zinc-700"></div>
                <div className="text-zinc-500 text-sm">Or</div>
                <div className="flex-1 border-b border-zinc-700"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                className="bg-[rgba(255,255,255,0.04)] py-3 px-4 rounded-md border border-zinc-700 placeholder:text-zinc-400"
                placeholder="eg. John"
                value={form.first}
                onChange={(e) => setForm({ ...form, first: e.target.value })}
              />
              <input
                className="bg-[rgba(255,255,255,0.04)] py-3 px-4 rounded-md border border-zinc-700 placeholder:text-zinc-400"
                placeholder="eg. Francisco"
                value={form.last}
                onChange={(e) => setForm({ ...form, last: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-[rgba(255,255,255,0.04)] py-3 px-4 rounded-md border border-zinc-700 placeholder:text-zinc-400"
                placeholder="eg. johnfrans@gmail.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="mb-1">
              <PasswordInput
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <div className="text-xs text-zinc-500 mt-2">Must be at least 8 characters.</div>
            </div>

            <div className="mt-6">
              <button className="w-full py-3 rounded-md bg-white text-black font-semibold">Sign Up</button>
            </div>

            <div className="text-center mt-4 text-sm text-zinc-400">
               have an account? <Link to="/login" className="text-white underline">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
