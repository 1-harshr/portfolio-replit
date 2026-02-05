import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGamepad, FaMapMarkedAlt, FaUniversity, FaLanguage, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Gamo-Pedia",
    subtitle: "The Game Wikipedia",
    icon: <FaGamepad className="text-3xl text-purple-400" />,
    tech: ["Compose Multiplatform", "Koin", "Ktor", "RoomDB"],
    description: "Modular Android app for browsing and managing video games using Clean Architecture. Features offline support, real-time UI updates, and intuitive search.",
    link: "#"
  },
  {
    title: "Employee Attendance",
    subtitle: "Management System",
    icon: <FaMapMarkedAlt className="text-3xl text-green-400" />,
    tech: ["Spring Boot", "React", "Compose", "PostgreSQL"],
    description: "GPS-enabled attendance tracking with admin configuration. Secure backend with JWT auth and role-based access for reliable management.",
    link: "#"
  },
  {
    title: "Digi Campus",
    subtitle: "Store Digitization",
    icon: <FaUniversity className="text-3xl text-blue-400" />,
    tech: ["Spring Boot", "Java", "Postgres", "JPA"],
    description: "Backend for digitizing physical stores at IIT Kanpur. High-performance app with role-based auth and session validation.",
    link: "#"
  },
  {
    title: "Neural Machine Translation",
    subtitle: "Hindi to English Model",
    icon: <FaLanguage className="text-3xl text-red-400" />,
    tech: ["PyTorch", "Python", "NLTK", "SpaCy"],
    description: "Translation model trained on 100K+ sentence pairs. Designed RNN and Bi-LSTM based models generating 512-length embeddings.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-24 bg-secondary/20" id="projects">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full glass-card hover:border-primary/40 transition-all duration-300 flex flex-col group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <FaExternalLinkAlt className="text-muted-foreground hover:text-primary cursor-pointer" />
                </div>
                
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-primary/10 transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-4">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/50 text-secondary-foreground border-white/5">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}