import matter from "gray-matter";
import { notFound } from "next/navigation";
import { promises as fs } from "node:fs";
import path from "node:path";
import BlogPost from "../BlogPost"; // Import the BlogPost component

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDirectory);

  // Filter out non-md files
  return filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
}

// Get post data by slug
async function getPostData(slug: string) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      frontmatter: matterResult.data as {
        title: string;
        date: string;
        description?: string;
      },
      content: matterResult.content,
    };
  } catch (error) {
    console.error("Error reading post:", error);
    return null; // Instead of notFound(), return null for easier handling
  }
}

// Main Blog Post Page component
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound(); // Handles 404 by invoking next/navigation's notFound
  }

  return (
    <BlogPost frontmatter={postData.frontmatter} content={postData.content} />
  );
}
