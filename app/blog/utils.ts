// app/blog/utils.ts
import matter from "gray-matter";
import { promises as fs } from "node:fs";
import path from "node:path";

export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "./posts"); // Correct path
  const filenames = await fs.readdir(postsDirectory);

  return Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        slug,
        frontmatter: matterResult.data as {
          title: string;
          date: string;
          description?: string;
        },
      };
    })
  ).then((allPostsData) => {
    return allPostsData.sort(({ frontmatter: a }, { frontmatter: b }) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  });
}
