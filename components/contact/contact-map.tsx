"use client"

import { useState } from "react"

export default function ContactMap() {
  const [activeBranch, setActiveBranch] = useState<"manikonda" | "hitec">("manikonda")

  const maps = {
    manikonda: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.123456789!2d78.370626!3d17.3962244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb954fadc49b9b%3A0xb0e529fb031d12e1!2sTruglow%20Skin%20%26%20Hair%20Clinic!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    hitec: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.275811352467!2d78.36830587516805!3d17.446876683451558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e36e6378e9%3A0x1c8b3554e2c0b40e!2sSMR%20Vinay%20Technopolis!5e0!3m2!1sen!2sin!4v1718440000000!5m2!1sen!2sin"
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
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>
      </div>
    </div>
  )
}
