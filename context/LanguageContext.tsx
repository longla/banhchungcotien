"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  vi: {
    title: "Bánh Chưng Cô Tiên",
    subtitle: "Bánh chưng làm tại California chuẩn vị quê nhà 🏡",
    callButton: '📞 Gọi Đặt Bánh: <span class="number">657-272-6533</span>',
    orderNote: "Vui lòng gọi đặt bánh trước, pick up only.",
    wholesaleNote: "📦 Nhận bỏ bánh giá sỉ",
    address: "📍 Địa chỉ: 8128 W Cerritos Ave, Stanton, CA 90680",
    parkingGuide: "Hướng Dẫn Đậu Xe",
    messengerChat: "Tư Vấn",
    sizeSmall: "Nhỏ",
    sizeMedium: "Trung",
    sizeLarge: "Lớn",
    size: "Size",
    smallSize1:
      "📏 Kích thước nhỏ gọn: Bánh chưng bằng một nắm tay, dễ dàng mang theo khi đi làm, đi học hoặc tham gia các buổi tiệc.",
    smallSize2:
      "🌿 Hương vị truyền thống: Gói bằng lá chuối, nhân đậu xanh và thịt heo thơm ngon, chuẩn vị Tết cổ truyền.",
    smallSize3:
      "🥢 Dinh dưỡng cân bằng: Cung cấp năng lượng đầy đủ, phù hợp cho bữa ăn nhanh mà vẫn no bụng.",
    mediumSize1:
      "📏 Kích thước bằng 4 bánh size nhỏ: Lý tưởng cho các bữa ăn gia đình hoặc nhóm nhỏ.",
    mediumSize2:
      "🌿 Hương vị truyền thống: Gói bằng lá chuối, nhân đậu xanh và thịt heo thơm ngon, chuẩn vị Tết cổ truyền.",
    mediumSize3:
      "🥢 Chia sẻ dễ dàng: Phần ăn phù hợp để chia sẻ trong các dịp sum họp.",
    largeSize1:
      "📏 Kích thước bằng 8 bánh size nhỏ: Phù hợp cho đại gia đình và các bữa tiệc lớn.",
    largeSize2:
      "🌿 Hương vị truyền thống: Gói bằng lá chuối, nhân đậu xanh và thịt heo thơm ngon, chuẩn vị Tết cổ truyền.",
    largeSize3:
      "🥢 Phần ăn dồi dào: Cung cấp phần ăn lớn, trọn vẹn cho mọi người.",
  },
  en: {
    title: "Banh Chung Co Tien",
    subtitle: "Authentic Vietnamese chung cakes made in California 🏡",
    callButton: '📞 Order Now: <span class="number">657-272-6533</span>',
    orderNote: "Please call to place orders in advance, pick up only.",
    wholesaleNote: "📦 Wholesale orders available",
    address: "📍 Address: 8128 W Cerritos Ave, Stanton, CA 90680",
    parkingGuide: "Parking Guide",
    messengerChat: "Chat",
    sizeSmall: "Small",
    sizeMedium: "Medium",
    sizeLarge: "Large",
    size: "Size",
    smallSize1:
      "📏 Compact size: About the size of your fist, perfect for taking to work, school, or parties.",
    smallSize2:
      "🌿 Traditional flavor: Wrapped in banana leaves with mung bean and pork filling, authentic Vietnamese taste.",
    smallSize3:
      "🥢 Balanced nutrition: Provides complete energy, perfect for a quick yet filling meal.",
    mediumSize1:
      "📏 Size equivalent to 4 small cakes: Ideal for family meals or small gatherings.",
    mediumSize2:
      "🌿 Traditional flavor: Wrapped in banana leaves with mung bean and pork filling, authentic Vietnamese taste.",
    mediumSize3:
      "🥢 Easy to share: Perfect portion for sharing during gatherings.",
    largeSize1:
      "📏 Size equivalent to 8 small cakes: Suitable for large families and big parties.",
    largeSize2:
      "🌿 Traditional flavor: Wrapped in banana leaves with mung bean and pork filling, authentic Vietnamese taste.",
    largeSize3: "🥢 Generous portion: Provides ample food for everyone.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
  locale = "vi",
}: {
  children: ReactNode;
  locale?: Language;
}) => {
  const [language, setLanguageState] = useState<Language>(locale as Language);
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    // Navigate to the new locale path
    if (pathname) {
      const segments = pathname.split("/");
      segments[1] = lang; // Replace the locale segment
      router.push(segments.join("/"));
    }
  };

  // Update language state based on URL
  useEffect(() => {
    if (pathname) {
      const segments = pathname.split("/");
      if (segments.length > 1) {
        const urlLocale = segments[1];
        if (
          (urlLocale === "en" || urlLocale === "vi") &&
          urlLocale !== language
        ) {
          setLanguageState(urlLocale as Language);
        }
      }
    }
  }, [pathname, language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
