import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaExternalLinkAlt, FaBookOpen, FaCalendarAlt, FaClock } from "react-icons/fa";

const blogs = [
  {
    title: "Mastering Jetpack Compose: Efficient Recompositions",
    excerpt: "Deep dive into ixigo's design system and how we optimized animations for better performance.",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    tags: ["Android", "Compose", "Performance"],
    link: "#"
  },
  {
    title: "AI in Mobile: Building Real-time Conversational SDKs",
    excerpt: "The technical challenges of integrating LiveKit with Android apps for seamless AI interactions.",
    date: "Dec 05, 2025",
    readTime: "12 min read",
    tags: ["AI", "SDK", "LiveKit"],
    link: "#"
  },
  {
    title: "Ethereum Wallet Profiling: A Data Analysis Approach",
    excerpt: "How network analysis can identify profitable trading behaviors in crypto clusters.",
    date: "Oct 20, 2025",
    readTime: "10 min read",
    tags: ["Crypto", "AWS", "Data Analysis"],
    link: "#"
  }
];

export default function Blogs() {
  return (
    <section className="py-24 bg-background relative" id="blogs">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
             <FaBookOpen className="text-primary text-2xl" />
             <h2 className="text-3xl md:text-4xl font-bold font-heading">Writing & Insights</h2>
          </div>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full glass-card hover:border-primary/40 transition-all duration-300 group cursor-pointer flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-4 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1"><FaCalendarAlt /> {blog.date}</span>
                    <span className="flex items-center gap-1"><FaClock /> {blog.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider bg-white/5 border-white/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto flex items-center text-primary text-sm font-bold group-hover:gap-2 transition-all">
                  Read Article <FaExternalLinkAlt className="ml-2 text-xs" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}