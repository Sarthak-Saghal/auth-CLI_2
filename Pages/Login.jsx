import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialButton from "../Components/SocialButton";
import PasswordInput from "../Components/PasswordInput";
import { motion } from "framer-motion";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-md sm:max-w-2xl bg-[#0b0b0c] rounded-[18px] p-6 sm:p-8 
                   border border-zinc-800 shadow-[0_0_30px_rgba(255,255,255,0.04)]"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >

        {/* FIXED WRAPPER — THIS IS THE MAIN FIX */}
        <div className="w-full flex flex-col items-center sm:items-start">

          {/* Title */}
          <motion.h2
            className="text-xl sm:text-2xl font-semibold mb-2 text-center sm:text-left"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Welcome back
          </motion.h2>

          <motion.p
            className="text-xs sm:text-sm text-zinc-400 mb-4 text-center sm:text-left"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Sign in to your account
          </motion.p>

          {/* Social Buttons */}
          <motion.div
            className="space-y-3 mb-4 w-full"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Social Buttons Row */}
            <motion.div
              className="grid grid-cols-2 gap-3 w-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <SocialButton type="google">Google</SocialButton>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <SocialButton type="github">Github</SocialButton>
              </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="flex items-center gap-3 w-full"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex-1 border-b border-zinc-700"></div>
              <div className="text-zinc-500 text-xs sm:text-sm">Or</div>
              <div className="flex-1 border-b border-zinc-700"></div>
            </motion.div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="mb-3 w-full"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <input
              className="w-full bg-[rgba(255,255,255,0.04)] py-3 px-4 rounded-md 
                         border border-zinc-700 placeholder:text-zinc-400 
                         focus:border-purple-400 focus:shadow-[0_0_8px_rgba(168,85,247,0.5)]
                         transition text-sm sm:text-base"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </motion.div>

          {/* Password */}
          <motion.div
            className="mb-3 w-full"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <PasswordInput
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </motion.div>

          {/* Remember + Forgot */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center 
                       text-sm text-zinc-400 mb-4 gap-2 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              <span className="text-xs sm:text-sm">Remember me</span>
            </label>

            <Link
              to="/forgot-password"
              className="text-white underline text-xs sm:text-sm"
            >
              Forgot password?
            </Link>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            className="w-full py-3 rounded-md bg-white text-black font-semibold 
                       shadow-[0_4px_12px_rgba(255,255,255,0.3)] 
                       text-sm sm:text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            Sign In
          </motion.button>

          {/* Signup link */}
          <motion.div
            className="text-center mt-4 text-xs sm:text-sm text-zinc-400 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            Don't have an account?{" "}
            <Link to="/signup" className="text-white underline">
              Sign up
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}
