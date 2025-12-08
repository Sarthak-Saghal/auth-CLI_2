import React from "react";

export default function Stepper({ steps = ["Sign up your account", "Set up your workspace", "Set up your profile"], active = 0 }) {
  return (
    <div className="space-y-4">
      {steps.map((s, i) => {
        const isActive = i === active;
        return (
          <div key={s} className={`flex items-center gap-3 p-4 rounded-xl ${isActive ? "bg-white text-black" : "bg-[rgba(255,255,255,0.06)] text-zinc-200"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${isActive ? "bg-black text-white" : "bg-zinc-700 text-white"}`}>
              {i + 1}
            </div>
            <div className="text-sm">{s}</div>
          </div>
        );
      })}
    </div>
  );
}
