// app/blog/page.tsx
import Link from "next/link";
import { getAllPosts } from "./utils"; // Import the utility function

export default async function BlogList() {
  const allPosts = await getAllPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.frontmatter.title}</h2>
              <p>{new Date(post.frontmatter.date).toLocaleDateString()}</p>
              {post.frontmatter.description && (
                <p>{post.frontmatter.description}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
