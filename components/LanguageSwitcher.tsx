"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  // Determine opposite language for the switcher
  const targetLang = language === "vi" ? "en" : "vi";
  const displayText = language === "vi" ? "English" : "Tiếng Việt";
  const flagEmoji = language === "vi" ? "🇺🇸" : "🇻🇳";

  const handleLanguageSwitch = () => {
    // If we're on a localized route like /en or /vi
    if (pathname?.startsWith("/vi/") || pathname === "/vi") {
      router.push(pathname.replace("/vi", `/${targetLang}`));
    } else if (pathname?.startsWith("/en/") || pathname === "/en") {
      router.push(pathname.replace("/en", `/${targetLang}`));
    } else {
      // We're on the root path
      router.push(`/${targetLang}`);
    }
  };

  return (
    <div className="flex justify-center language-fade my-2">
      <button
        onClick={handleLanguageSwitch}
        className="px-3 py-1.5 bg-white/90 hover:bg-white shadow-md rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95 flex items-center"
      >
        <span className="mr-1">{flagEmoji}</span>
        {displayText}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
