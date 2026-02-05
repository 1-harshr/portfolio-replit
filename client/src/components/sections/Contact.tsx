import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
             <a href="mailto:rharsh.iitk@gmail.com" className="group">
               <div className="bg-card border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 shadow-lg">
                 <FaEnvelope className="text-4xl text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                 <div className="text-lg font-bold">Email Me</div>
                 <div className="text-muted-foreground text-sm mt-1">rharsh.iitk@gmail.com</div>
               </div>
             </a>

             <a href="https://linkedin.com/in/1-harshr" target="_blank" rel="noopener noreferrer" className="group">
               <div className="bg-card border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-1 shadow-lg">
                 <FaLinkedin className="text-4xl text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                 <div className="text-lg font-bold">LinkedIn</div>
                 <div className="text-muted-foreground text-sm mt-1">Connect professionally</div>
               </div>
             </a>
             
             <a href="tel:+918825230726" className="group">
               <div className="bg-card border border-white/10 p-8 rounded-2xl hover:border-green-500/50 transition-all hover:-translate-y-1 shadow-lg">
                 <FaPhone className="text-4xl text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                 <div className="text-lg font-bold">Call Me</div>
                 <div className="text-muted-foreground text-sm mt-1">+91-88252 30726</div>
               </div>
             </a>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Harsh Ranjan. Built with React & Tailwind.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}