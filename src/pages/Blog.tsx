import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { blogPosts, formatDate } from "@/lib/blog-data";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-display font-bold text-sm">Back</span>
          </Link>
          <h1 className="font-display font-extrabold text-lg">Blog</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-8 md:pb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display font-extrabold text-4xl md:text-7xl text-foreground leading-tight"
        >
          Thoughts, builds<br />
          <span className="text-gradient">& experiments</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-handwritten text-xl md:text-2xl text-muted-foreground mt-4 max-w-lg"
        >
          Writing about code, games, AI, space, and everything in between.
        </motion.p>
      </section>

      {/* Posts Grid */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Color bar */}
                <div
                  className="h-2 w-full"
                  style={{ background: `hsl(${post.coverColor})` }}
                />

                <div className="p-5 md:p-7">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-display font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: `hsl(${post.coverColor} / 0.12)`,
                        color: `hsl(${post.coverColor})`,
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-body">
                      {formatDate(post.date)}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
