import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vn">
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
