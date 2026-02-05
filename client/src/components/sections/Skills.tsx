import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = {
  Languages: ["Kotlin", "Java", "Python", "SQL", "JavaScript", "C++", "R", "Bash"],
  Android: ["Jetpack Compose", "MVVM", "MVI", "Ktor", "Retrofit", "Room", "Hilt-Dagger", "Gradle", "JUnit"],
  Cloud: ["AWS EC2", "Lambda", "RDS", "SQS", "Timestream", "Redshift", "API Gateway"]
};

export default function Skills() {
  return (
    <section className="py-24" id="skills">
      <div className="container mx-auto px-6">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I've worked with to build scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card/50 border border-white/5 rounded-2xl p-6 hover:bg-card/80 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-primary border-b border-white/5 pb-2 inline-block">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge 
                    key={skill} 
                    className="px-3 py-1.5 text-sm font-normal bg-secondary/40 hover:bg-primary/20 hover:text-primary transition-colors cursor-default border-white/5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}