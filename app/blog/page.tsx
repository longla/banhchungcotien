// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "./utils"; // Import the utility function

export default async function BlogList() {
  const allPosts = await getAllPosts();

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.slug} className="shadow-md rounded-lg p-4 mb-4">
          <Link
            className="flex flex-col items-center p-2"
            href={`/blog/${post.slug}`}
          >
            <Image
              src={post.imagePath}
              alt={post.frontmatter.title + " Cover Image"}
              width={150} // Adjust width and height as needed
              height={150}
            />
            <h2>
              {post.frontmatter.title} |{" "}
              {new Date(post.frontmatter.date).toLocaleDateString()}{" "}
            </h2>
            {post.frontmatter.description && (
              <p>{post.frontmatter.description}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
