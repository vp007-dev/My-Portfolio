import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getPostBySlug, formatDate } from "@/lib/blog-data";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  // Simple markdown-to-JSX: split by headings and code blocks
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeBuffer: string[] = [];
    let key = 0;

    const flushCode = () => {
      if (codeBuffer.length > 0) {
        elements.push(
          <pre key={key++} className="bg-muted rounded-lg p-4 overflow-x-auto text-sm font-mono text-foreground my-5">
            <code>{codeBuffer.join("\n")}</code>
          </pre>
        );
        codeBuffer = [];
      }
    };

    for (const line of lines) {
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          flushCode();
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        continue;
      }

      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={key++} className="font-display font-bold text-lg md:text-xl text-foreground mt-8 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="font-display font-extrabold text-xl md:text-2xl text-foreground mt-10 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ")) {
        const text = line.replace(/^\d+\.\s/, "");
        const parts = text.split("**");
        elements.push(
          <li key={key++} className="text-muted-foreground text-sm md:text-base leading-relaxed ml-5 list-decimal mb-1.5">
            {parts.map((p, i) =>
              i % 2 === 1 ? <strong key={i} className="text-foreground font-semibold">{p}</strong> : p
            )}
          </li>
        );
      } else if (line.startsWith("- ")) {
        const text = line.replace("- ", "");
        const parts = text.split("**");
        elements.push(
          <li key={key++} className="text-muted-foreground text-sm md:text-base leading-relaxed ml-5 list-disc mb-1.5">
            {parts.map((p, i) =>
              i % 2 === 1 ? <strong key={i} className="text-foreground font-semibold">{p}</strong> : p
            )}
          </li>
        );
      } else if (line.trim() === "") {
        // skip empty
      } else {
        const parts = line.split("**");
        elements.push(
          <p key={key++} className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
            {parts.map((p, i) =>
              i % 2 === 1 ? <strong key={i} className="text-foreground font-semibold">{p}</strong> : p
            )}
          </p>
        );
      }
    }

    flushCode();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link to="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-display font-bold text-sm">All Posts</span>
          </Link>
          <span className="font-display font-bold text-sm text-muted-foreground">{post.readTime} read</span>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-20">
        {/* Post header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Category pill */}
          <span
            className="inline-block text-xs font-display font-semibold px-3 py-1 rounded-full mb-5"
            style={{
              background: `hsl(${post.coverColor} / 0.12)`,
              color: `hsl(${post.coverColor})`,
            }}
          >
            {post.category}
          </span>

          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-foreground leading-tight mb-5">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <div className="flex gap-2 ml-auto">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-display px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Color accent bar */}
          <div
            className="h-1 w-20 rounded-full mb-10"
            style={{ background: `hsl(${post.coverColor})` }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose-custom"
        >
          {renderContent(post.content)}
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
