import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-8"
        >
          <Zap className="h-3.5 w-3.5" />
          AI-Powered Skill Verification
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-4xl mx-auto"
        >
          Resumes are broken.{" "}
          <span className="text-gradient">Skill Passport</span>{" "}
          fixes trust.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          A verified, dynamic skill identity. Students prove skills through real tasks. Companies hire based on actual performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link to="/passport/demo">
            <Button size="lg" className="gap-2 text-base px-8 shadow-glow">
              View Demo Passport <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/dashboard/company">
            <Button variant="outline" size="lg" className="gap-2 text-base px-8">
              For Companies
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-14 text-sm text-muted-foreground"
        >
          {["AI-evaluated tasks", "Company-verified badges", "Live skill scores"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Passport preview card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="glass rounded-2xl p-6 shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-in-progress" />
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-display font-semibold text-foreground">Alex Johnson</p>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-2xl font-bold text-primary font-display">87</p>
                <p className="text-xs text-muted-foreground">Trust Score</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { name: "Python", score: 92, color: "bg-pending" },
                { name: "React", score: 85, color: "bg-in-progress" },
                { name: "Machine Learning", score: 78, color: "bg-primary" },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-secondary-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.score}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.score}%` }}
                      transition={{ duration: 1, delay: 1 }}
                      className={`h-full rounded-full ${skill.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
