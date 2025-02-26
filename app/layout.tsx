"use client";

import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Extract locale from URL path if available
  const getLocaleFromPathname = () => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname.startsWith('/en')) return 'en';
    }
    return 'vi'; // Default to Vietnamese
  };

  const locale = getLocaleFromPathname();

  return (
    <html lang={locale}>
      <head>
        <meta name="msvalidate.01" content="2F78FF4FA4DE5FDF14B11770246D0625" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider locale={locale as 'vi' | 'en'}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}