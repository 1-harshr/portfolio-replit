import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section className="py-24 bg-secondary/10" id="education">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Education</h2>
            <div className="bg-card border border-white/10 p-8 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
               
               <div className="flex items-start gap-4 mb-4">
                 <div className="bg-primary/20 p-3 rounded-lg text-primary">
                   <FaGraduationCap className="text-2xl" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold">Indian Institute of Technology Kanpur</h3>
                   <p className="text-muted-foreground">B.Tech. in Chemical Engineering</p>
                   <p className="text-primary/80 font-medium text-sm mt-1">Minor in AI and ML</p>
                 </div>
               </div>
               
               <div className="space-y-2 mt-6 border-t border-white/5 pt-6">
                 <div className="flex justify-between text-sm">
                   <span className="text-muted-foreground">Timeline</span>
                   <span className="font-mono">Nov 2020 – April 2024</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-muted-foreground">GPA</span>
                   <span className="font-mono font-bold">6.94 / 10.0</span>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2 space-y-6">
           <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
           >
             <h3 className="text-2xl font-bold font-heading mb-4">Key Achievements</h3>
             <ul className="space-y-4">
               {[
                 "Secured a full-time role at Deloitte USI as a Data Analyst",
                 "Won the ixigo Premio Award for top contributing Engineers",
                 "Secured AIR 3353 in JEE Advanced & AIR 5409 in JEE Mains",
                 "Elected as Senator to represent a batch of 1200 students"
               ].map((achievement, i) => (
                 <li key={i} className="flex items-start bg-card/40 p-4 rounded-xl border border-white/5">
                   <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center mr-3 text-xs font-bold">
                     {i + 1}
                   </span>
                   <span className="text-sm md:text-base text-muted-foreground">{achievement}</span>
                 </li>
               ))}
             </ul>
           </motion.div>
        </div>
      </div>
    </section>
  );
}