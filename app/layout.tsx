import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { Metadata } from 'next';

// Define metadata for SEO and social sharing
export const metadata: Metadata = {
  title: 'Bánh Chưng Cô Tiên | Vietnamese Chung Cake',
  description: 'Authentic Vietnamese Chung Cake (Bánh Chưng) in California. Traditional, handmade sticky rice cakes with premium ingredients. Order now!',
  keywords: ['bánh chưng', 'chung cake', 'vietnamese food', 'sticky rice cake', 'traditional vietnamese'],
  authors: [{ name: 'Bánh Chưng Cô Tiên' }],
  creator: 'Bánh Chưng Cô Tiên',
  publisher: 'Bánh Chưng Cô Tiên',
  openGraph: {
    type: 'website',
    locale: 'vi_US',
    alternateLocale: 'en_US',
    url: 'https://banhchungcotien.com',
    siteName: 'Bánh Chưng Cô Tiên',
    title: 'Bánh Chưng Cô Tiên | Authentic Vietnamese Chung Cake',
    description: 'Traditional, handmade Vietnamese sticky rice cakes with premium ingredients. Available in various sizes for all occasions.',
    images: [
      {
        url: '/banh-chung-co-tien-shared.jpg',
        width: 1200,
        height: 630,
        alt: 'Bánh Chưng Cô Tiên - Vietnamese Chung Cake',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bánh Chưng Cô Tiên | Authentic Vietnamese Chung Cake',
    description: 'Traditional, handmade Vietnamese sticky rice cakes with premium ingredients. Available in various sizes for all occasions.',
    images: ['/banh-chung-co-tien-shared.jpg'],
    creator: '@banhchungcotien',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
};

// Extract locale from URL path if available, but in a way that works server-side
function getLocaleFromPath(path: string) {
  if (path?.startsWith('/en')) return 'en';
  return 'vi'; // Default to Vietnamese
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // In a server component, we can't access window, but we can use other methods
  // to determine the locale. Here we're simplifying and using vi as default.
  const locale = 'vi';
  
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