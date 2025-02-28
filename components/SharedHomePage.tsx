"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import useAnalytics from "../ultilities/analystic";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SharedHomePage() {
  // Initialize analytics
  useAnalytics();
  const { t, language } = useLanguage();

  const handlePhoneClick = () => {
    if (typeof window !== "undefined") {
      if (window.fbq) {
        window.fbq("track", "Purchase");
      }
      if (window.gtag) {
        window.gtag("event", "phone_click", {
          event_category: "Contact",
          event_label: "Phone Call",
          value: 1,
        });
      }
    }
  };

  const handleFacebookBuyClick = () => {
    if (typeof window !== "undefined") {
      if (window.fbq) {
        window.fbq("track", "Purchase");
      }
      if (window.gtag) {
        window.gtag("event", "facebook_market_click", {
          event_category: "Purchase",
          event_label: "Facebook Marketplace",
          value: 1,
        });
      }
    }
  };

  const findLocationClick = () => {
    if (typeof window !== "undefined") {
      if (window.fbq) {
        window.fbq("track", "FindLocation");
      }
    }
  };

  const sizeContent = {
    Nhỏ: {
      key: "sizeSmall",
      price: "$3.00",
      content: [
        { key: "smallSize1" },
        { key: "smallSize2" },
        { key: "smallSize3" },
      ],
    },
    Trung: {
      key: "sizeMedium",
      price: "$10.00",
      content: [
        { key: "mediumSize1" },
        { key: "mediumSize2" },
        { key: "mediumSize3" },
      ],
    },
    Lớn: {
      key: "sizeLarge",
      price: "$20.00",
      content: [
        { key: "largeSize1" },
        { key: "largeSize2" },
        { key: "largeSize3" },
      ],
    },
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">{t("title")}</h1>
      <LanguageSwitcher />

      <p className="text-xl text-gray-700 mt-2">{t("subtitle")}</p>
      <div className="flex gap-1 md:gap-5 flex-wrap justify-center">
        <a
          href="tel:6572726533"
          onClick={handlePhoneClick}
          className="mt-4 px-6 py-3 text-white font-bold bg-red-500 rounded-lg text-lg font-medium hover:bg-red-600 active:scale-95 active:bg-red-700 shadow-lg"
          dangerouslySetInnerHTML={{ __html: t("callButton") }}
        ></a>
        <a
          href="https://www.facebook.com/marketplace/item/3438771749751460/"
          onClick={handleFacebookBuyClick}
          target="_blank"
          rel="noreferrer"
          className="mt-2 px-6 py-3 text-white font-bold bg-blue-600 rounded-lg text-lg font-medium hover:bg-blue-700 active:scale-95 active:bg-blue-800 shadow-lg"
          dangerouslySetInnerHTML={{ __html: t("buyButton") }}
        ></a>
      </div>

      <div className="mt-6">
        {Object.entries(sizeContent).map(([size, { key, price, content }]) => (
          <details
            key={size}
            className="bg-white rounded-lg border border-gray-200 my-2"
          >
            <summary className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-900 bg-gray-50 rounded-t-lg cursor-pointer">
              {t("size")} {t(key)}
              <div className="flex items-center gap-5">
                <span className="font-['Lato'] font-bold text-base">
                  {price}
                </span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </summary>
            <div className="px-4 py-2 border-t border-gray-200">
              <ul className="list-inside text-left space-y-2">
                {content.map((item, idx) => (
                  <li
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: t(item.key) }}
                  ></li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
      <p className="text-red-600 font-semibold mt-4">{t("orderNote")}</p>
      <a
        href="https://www.google.com/maps/search/?api=1&query=8101+W+Cerritos+Ave,+Stanton,+CA+90680"
        target="_blank"
        className="text-lg text-gray-700 my-3 block"
        onClick={findLocationClick}
        dangerouslySetInnerHTML={{ __html: t("address") }}
      ></a>
      <p className="text-red-600 font-semibold mt-4">{t("wholesaleNote")}</p>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-1">
        <a href="https://m.me/61570225125522" target="_blank" rel="noreferrer">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-halo"></div>
            <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-2xl transition transform duration-300 ease-in-out">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
                alt="Messenger Icon"
                width={30}
                height={30}
              />
            </div>
          </div>
          <p
            className="text-sm font-semibold text-gray-800"
            dangerouslySetInnerHTML={{ __html: t("messengerChat") }}
          ></p>
        </a>
      </div>
    </div>
  );
}
