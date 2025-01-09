// app/blog/[slug]/page.tsx
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { promises as fs } from "node:fs";
import path from "node:path";
import BlogPost from "../BlogPost"; // Import the BlogPost component

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "./posts");
  const filenames = await fs.readdir(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

async function getPostData(slug: string) {
  const postsDirectory = path.join(process.cwd(), "./posts");
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
    // Handle cases where a post is not found or there's an error reading the file
    console.error("Error reading post:", error);
    notFound();
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!params || !params.slug) {
    // Return a loading state or redirect if params are missing
    return <div>Loading...</div>;
  }

  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return (
    <BlogPost frontmatter={postData.frontmatter} content={postData.content} />
  );
}
