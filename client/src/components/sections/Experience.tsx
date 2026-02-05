import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "Sortly",
    role: "Software Engineer",
    location: "Remote",
    period: "Present",
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    highlights: [
      "Currently working as a Software Engineer at Sortly."
    ]
  },
  {
    company: "Ixigo",
    role: "Software Engineer 2 | Android",
    location: "Gurugram",
    period: "August 2024 - Present",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    highlights: [
      "Developed a real-time conversational AI SDK leveraging LiveKit & Jetpack Compose.",
      "Built ixigo’s design system using Unstyled Compose components & animations.",
      "Engineered the complete AI overhaul of the Ixigo flights app for voice-based controls.",
      "Developed scalable VAS using KMM & MVVM, resulting in 3L/day profit rise.",
      "Migrated legacy code to Kotlin & Compose, cutting ANRs by 80% and crashes by 60%."
    ]
  },
  {
    company: "CryptoOwl",
    role: "Backend Engineer & Data Analyst",
    location: "Remote/Hybrid",
    period: "June 2023 - August 2023",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    highlights: [
      "Profiled Ethereum wallets via network analysis to identify profitable trading behaviors.",
      "Engineered data pipeline using AWS Timestream, RDS, Redshift, Lambda & Airflow.",
      "Deployed a web dashboard for crypto trends & risk assessment."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                 <FaBriefcase className="text-primary text-sm" />
              </div>

              {/* Card */}
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card border-white/5 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className={`${exp.color} border mb-2`}>
                      {exp.company}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center font-mono">
                      <FaCalendarAlt className="mr-1" /> {exp.period}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{exp.role}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <FaMapMarkerAlt className="mr-1" /> {exp.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-2">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground/90">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-primary rounded-full shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}