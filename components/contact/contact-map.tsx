"use client"

import { useState } from "react"

export default function ContactMap() {
  const [activeBranch, setActiveBranch] = useState<"manikonda" | "hitec">("manikonda")

  const maps = {
    manikonda: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3240360793543!2d78.36797127368949!3d17.396230302553267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb954fadc49b9b%3A0xb0e529fb031d12e1!2sTruglow%20Skin%20%26%20Hair%20Clinic!5e0!3m2!1sen!2sin!4v1782744971283!5m2!1sen!2sin",
    hitec: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3806.022520063684!2d78.3693782!3d17.4586362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6ab263b5bafaafd%3A0xdcbeac3c20ba7b84!2sTruglow%20Skin%20%26%20Hair%20Clinic!5e0!3m2!1sen!2sin!4v1782746836829!5m2!1sen!2sin"
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Find Us</h2>
        <div className="inline-flex rounded-lg p-1 bg-amber-50 self-start sm:self-auto border border-amber-100">
          <button
            onClick={() => setActiveBranch("manikonda")}
            className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
              activeBranch === "manikonda"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-amber-800 hover:text-amber-900 hover:bg-amber-100/50"
            }`}
          >
            Manikonda
          </button>
          <button
            onClick={() => setActiveBranch("hitec")}
            className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
              activeBranch === "hitec"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-amber-800 hover:text-amber-900 hover:bg-amber-100/50"
            }`}
          >
            HITEC City
          </button>
        </div>
      </div>
      <div className="h-64 bg-gray-200 rounded-lg overflow-hidden relative shadow-inner">
        <iframe
          src={maps[activeBranch]}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
