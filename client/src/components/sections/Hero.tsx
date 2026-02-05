import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaAndroid } from "react-icons/fa";
import { SiKotlin, SiJetpackcompose } from "react-icons/si";
import heroBg from "@/assets/hero-bg.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 text-primary text-sm font-medium font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Open to Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
            Hi, I'm <br />
            <span className="tech-gradient-text">Harsh Ranjan</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Mobile Developer from <span className="text-foreground font-semibold">IIT Kanpur</span>. 
            Crafting seamless <span className="text-primary">Android</span> experiences with Jetpack Compose & AI.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <FaEnvelope className="mr-2" /> Contact Me
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10" asChild>
              <a href="https://github.com/harshr20" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2" /> GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10" asChild>
              <a href="https://linkedin.com/in/1-harshr" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-8 opacity-70">
            <div className="flex flex-col items-center gap-1">
              <FaAndroid className="text-2xl" />
              <span className="text-xs font-mono">Android</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <SiKotlin className="text-2xl" />
              <span className="text-xs font-mono">Kotlin</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <SiJetpackcompose className="text-2xl" />
              <span className="text-xs font-mono">Compose</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative Code/Abstract Element */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="hidden md:flex justify-center items-center relative"
        >
          <div className="relative w-full max-w-md aspect-square rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-auto text-xs font-mono text-muted-foreground">MainActivity.kt</span>
            </div>
            
            <div className="font-mono text-sm space-y-2 text-muted-foreground">
              <div className="flex">
                <span className="text-accent mr-2">@Composable</span>
              </div>
              <div className="flex">
                <span className="text-primary mr-2">fun</span>
                <span className="text-yellow-300">PortfolioApp</span>() {"{"}
              </div>
              <div className="pl-4 text-blue-300">
                MaterialTheme(
              </div>
              <div className="pl-8 text-green-300">
                colors = DarkColors,
              </div>
              <div className="pl-4 text-blue-300">
                ) {"{"}
              </div>
              <div className="pl-8 text-white/90">
                <span className="text-purple-400">Surface</span>(
              </div>
              <div className="pl-12 text-orange-300">
                modifier = Modifier.fillMaxSize(),
              </div>
              <div className="pl-8 text-white/90">
                ) {"{"}
              </div>
              <div className="pl-12 text-primary font-bold animate-pulse">
                 Experience(user = "Harsh")
              </div>
              <div className="pl-8 text-white/90">
                {"}"}
              </div>
              <div className="pl-4 text-blue-300">
                {"}"}
              </div>
              <div>{"}"}</div>
            </div>

            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 top-20 bg-card border border-white/10 p-3 rounded-xl shadow-lg flex items-center gap-2"
            >
              <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                <span className="font-bold text-lg">90%</span>
              </div>
              <div className="text-xs">
                <div className="font-semibold text-white">UT Coverage</div>
                <div className="text-muted-foreground">Code Quality</div>
              </div>
            </motion.div>

             <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 bottom-20 bg-card border border-white/10 p-3 rounded-xl shadow-lg flex items-center gap-2"
            >
               <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                <span className="font-bold text-lg">-80%</span>
              </div>
              <div className="text-xs">
                <div className="font-semibold text-white">ANRs Reduced</div>
                <div className="text-muted-foreground">Performance</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}