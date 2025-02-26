"use client";

import "../globals.css";
import { LanguageProvider } from "../../context/LanguageContext";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <head>
        <title>
          Bánh Chưng Cô Tiên - Bánh Chưng Tươi Ngon Tại Mỹ - Chuẩn Vị Truyền
          Thống.
        </title>
        <meta
          name="description"
          content="Bánh chưng Cô Tiên - Bánh chưng tươi ngon, chuẩn vị Việt Nam tại Mỹ. Đặt bánh ngay để thưởng thức hương vị quê nhà!"
        />
        <meta
          name="keywords"
          content="banh chung co tien, banh chung, banh chung US, banh chung cali, Vietnamese food, dat banh chung, banh chung tuoi ngon, banh chung quan cam"
        />

        {/* <!--Bing --> */}
        <meta name="msvalidate.01" content="2F78FF4FA4DE5FDF14B11770246D0625" />
        {/* <!-- Open Graph Meta Tags --> */}
        <meta
          property="og:title"
          content="Bánh Chưng Cô Tiên - Bánh Chưng Tươi Ngon Tại Mỹ - Chuẩn Vị Truyền Thống."
        />
        <meta
          property="og:description"
          content="Bánh chưng Cô Tiên - Bánh chưng tươi ngon, chuẩn vị Việt Nam tại Mỹ. Đặt bánh ngay để thưởng thức hương vị quê nhà!"
        />
        <meta property="og:image" content="/images/banh-chung.jpeg" />
        <meta property="og:url" content="https://banhchungcotien.com/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider locale={params.locale as 'vi' | 'en'}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}