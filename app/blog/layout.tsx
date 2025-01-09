// app/blog/layout.tsx
import Link from "next/link";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-[4%]">
      <div className="py-2">
        <Link href="/">
          <span className="text-2xl font-bold text-gray-800">
            Bánh Chưng Cô Tiên
          </span>
        </Link>
      </div>

      <main>{children}</main>
    </div>
  );
}
