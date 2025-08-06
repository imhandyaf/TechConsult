import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ListPlus, Laptop, Smartphone, Wifi } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-primary/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-amber-400 mb-8"
            animate={{
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.3)",
                "0 0 40px rgba(99, 102, 241, 0.6)",
                "0 0 20px rgba(99, 102, 241, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-ping"></div>
            Currently Fully Booked - Join Our Waitlist
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Neighborhood Tech
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Support Team
            </span>
          </h1>

          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Friendly, reliable tech support for your home and family. From setting up your smart devices to fixing computer issues, we're here to help our community with all their technology needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("waitlist")}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <ListPlus className="w-4 h-4 mr-2" />
              Join Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="px-8 py-4 glass-effect text-white border-white/30 hover:bg-white/20 font-semibold transition-all duration-300"
            >
              <ArrowDown className="w-4 h-4 mr-2" />
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 opacity-20"
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Laptop className="w-10 h-10 text-primary" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-16 opacity-20"
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      >
        <Smartphone className="w-8 h-8 text-accent" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-20 opacity-20"
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 6, repeat: Infinity, delay: 4 }}
      >
        <Wifi className="w-6 h-6 text-secondary" />
      </motion.div>
    </section>
  );
}
