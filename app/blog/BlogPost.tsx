import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostProps {
  frontmatter: {
    title: string;
    date: string;
    description?: string; // Description is optional
  };
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ frontmatter, content }) => {
  return (
    <div>
      <h2>{frontmatter.title}</h2>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
