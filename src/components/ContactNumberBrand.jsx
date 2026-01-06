import React from "react";
import { Phone } from "lucide-react";

const brandDigits = [
  { letter: "A", digit: "2" },
  { letter: "A", digit: "2" },
  { letter: "I", digit: "4" },
  { letter: "W", digit: "9" },
  { letter: "A", digit: "2" },
  { letter: "A", digit: "2" },
];

export default function ContactNumberBrand() {
  return (
    <a
      href="tel:+917096224922"
      aria-label="Call AAIWAA Digital Solution"
      className="no-underline"
    >
      <div className="mx-auto mb-14 flex items-center gap-5 rounded-2xl bg-white px-6 py-4 shadow-lg hover:shadow-xl transition cursor-pointer w-fit">

        {/* Phone Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
          <Phone size={20} />
        </div>

        {/* 7096 Prefix */}
        <div className="text-xl font-bold text-slate-900 tracking-wide">
          7096
        </div>

        {/* AAIWAA + Numbers */}
        <div className="flex items-end gap-4">
          {brandDigits.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-xl font-bold text-slate-900 leading-none">
                {item.letter}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-600">
                {item.digit}
              </div>
            </div>
          ))}
        </div>

      </div>
    </a>
  );
}
