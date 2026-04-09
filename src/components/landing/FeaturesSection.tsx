import { motion } from "framer-motion";
import { Brain, BadgeCheck, Target, BarChart3, Users, Shield } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Evaluation Engine", desc: "Submit code, files, or answers. Our AI grades performance 0–100% with detailed feedback and improvement paths." },
  { icon: BadgeCheck, title: "Company Validation", desc: "Real companies review and verify your skills. Earn trust badges that recruiters can instantly verify." },
  { icon: Target, title: "Real-World Tasks", desc: "Prove yourself on industry tasks — ML pipelines, web apps, data analysis — not toy exercises." },
  { icon: BarChart3, title: "Live Skill Tracking", desc: "Dynamic scores that evolve as you learn. A skill timeline that shows growth, not a static PDF." },
  { icon: Users, title: "Smart Matching", desc: "Get matched to internships and jobs based on verified skill scores, not keyword stuffing." },
  { icon: Shield, title: "Anti-Cheat Detection", desc: "Plagiarism detection and AI misuse monitoring ensure every score is earned authentically." },
];

const FeaturesSection = () => (
  <section className="py-24 relative">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold">How it works</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">A trust layer between students and employers, powered by AI and verified by real companies.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
