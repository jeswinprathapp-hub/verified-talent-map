import Navbar from "@/components/landing/Navbar";
import { motion } from "framer-motion";
import { Shield, AlertTriangle, Lightbulb, Layers, DollarSign, Rocket, TrendingUp, Users, CheckCircle2, ArrowRight } from "lucide-react";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`min-h-[70vh] flex items-center py-20 ${className}`}
  >
    {children}
  </motion.section>
);

const PitchDeck = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Slide 1: Title */}
    <Section className="min-h-screen pt-16">
      <div className="container px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <Shield className="h-10 w-10 text-primary" />
          <span className="font-display text-3xl font-bold text-gradient">HireFlow AI</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          <span className="text-gradient">HireFlow AI</span> analyzes skills, identifies gaps, and delivers{" "}
          <span className="text-gradient">personalized learning paths</span> aligned with industry demands.
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
          Real-time matching with relevant internships, jobs, and gigs — helping companies efficiently discover and hire skill-verified, job-ready talent.
        </p>
      </div>
    </Section>

    {/* Slide 2: Problem */}
    <Section>
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <h2 className="font-display text-3xl font-bold">The Problem</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { stat: "85%", text: "of resumes contain exaggerated or false claims" },
              { stat: "$15K", text: "average cost of a bad hire for companies" },
              { stat: "72%", text: "of recruiters say they can't verify skills effectively" },
            ].map((item) => (
              <div key={item.stat} className="glass rounded-xl p-6 text-center">
                <p className="text-3xl font-bold font-display text-destructive">{item.stat}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

    {/* Slide 3: Solution */}
    <Section>
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold">The Solution</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            HireFlow AI creates a <span className="text-foreground font-semibold">verified, dynamic skill identity</span> — combining AI evaluation with company validation and personalized learning paths.
          </p>
          <div className="space-y-4">
            {[
              "Students complete real-world tasks evaluated by AI (0–100%)",
              "Companies review and verify skills with trust badges",
              "A shareable passport link replaces the traditional resume",
              "Smart matching connects verified talent with the right opportunities",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

    {/* Slide 4: Product */}
    <Section>
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Layers className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold">The Product</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {[
              { title: "Skill Profile", desc: "Public profile with verified scores, badges, and skill timeline" },
              { title: "AI Engine", desc: "Evaluates code, files, and answers with feedback and scoring" },
              { title: "Task Marketplace", desc: "Real-world challenges from companies across ML, Web Dev, Data Science" },
              { title: "Smart Matching", desc: "Real-time matching of verified talent to internships, jobs, and gigs" },
            ].map((item) => (
              <div key={item.title} className="glass rounded-xl p-5">
                <h3 className="font-display font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

    {/* Slide 5: Business Model */}
    <Section>
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-pending/10 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-pending" />
            </div>
            <h2 className="font-display text-3xl font-bold">Business Model</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="glass rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg">Students</h3>
              <p className="text-2xl font-bold text-verified font-display mt-2">Free</p>
              <p className="text-sm text-muted-foreground mt-2">Build passport, complete tasks, share profile — always free.</p>
            </div>
            <div className="glass rounded-xl p-6 border-primary/30">
              <h3 className="font-display font-semibold text-lg">Companies</h3>
              <p className="text-2xl font-bold text-primary font-display mt-2">$299–999/mo</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Access verified talent pool</li>
                <li>• Advanced skill filters</li>
                <li>• Post unlimited tasks</li>
                <li>• Hiring tools & analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>

    {/* Slide 6: Why Now */}
    <Section>
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold">Why Now</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-8 text-left">
            {[
              { title: "AI is mature", desc: "LLMs can now evaluate complex submissions with human-level accuracy" },
              { title: "Skills > Degrees", desc: "70% of employers now value demonstrated skills over formal education" },
              { title: "Remote is default", desc: "Global talent needs global, verifiable credentials" },
            ].map((item) => (
              <div key={item.title} className="glass rounded-xl p-5">
                <h3 className="font-display font-semibold text-sm text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="text-lg text-muted-foreground mb-4">Ready to fix hiring?</p>
            <div className="flex items-center justify-center gap-2 text-primary font-display font-semibold text-xl">
              <Shield className="h-6 w-6" /> hireflow.ai <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export default PitchDeck;
