import Navbar from "@/components/landing/Navbar";
import SkillBar from "@/components/passport/SkillBar";
import { motion } from "framer-motion";
import { Shield, MapPin, Calendar, ExternalLink, Github, Linkedin, Award, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { name: "Python", score: 92, color: "bg-pending", verified: true, company: "DataCorp" },
  { name: "React / TypeScript", score: 85, color: "bg-in-progress", verified: true, company: "TechStart" },
  { name: "Machine Learning", score: 78, color: "bg-primary", verified: false },
  { name: "Data Science", score: 71, color: "bg-verified", verified: true, company: "AnalyticsPro" },
  { name: "SQL & Databases", score: 88, color: "bg-in-progress", verified: false },
  { name: "DevOps / CI/CD", score: 65, color: "bg-primary", verified: false },
];

const tasks = [
  { title: "Build a REST API with FastAPI", category: "Web Dev", score: 94, status: "completed" },
  { title: "Sentiment Analysis Pipeline", category: "ML", score: 82, status: "completed" },
  { title: "React Dashboard Component", category: "Frontend", score: 88, status: "completed" },
  { title: "Data Pipeline with Airflow", category: "Data Science", score: null, status: "in-progress" },
];

const PassportDemo = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container px-4 pt-24 pb-16">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1"
        >
          <div className="glass rounded-2xl overflow-hidden shadow-card sticky top-24">
            <div className="h-2 bg-gradient-to-r from-primary to-in-progress" />
            <div className="p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary font-display">AJ</span>
              </div>
              <h1 className="font-display text-xl font-bold">Alex Johnson</h1>
              <p className="text-sm text-muted-foreground mt-1">Full Stack Developer & ML Engineer</p>
              <div className="flex items-center justify-center gap-2 mt-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> San Francisco, CA
              </div>

              {/* Trust Score */}
              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-3xl font-bold text-primary font-display">87</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Trust Score</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">AI + Company Verified</p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-lg font-bold font-display text-foreground">12</p>
                  <p className="text-[10px] text-muted-foreground">Tasks Done</p>
                </div>
                <div>
                  <p className="text-lg font-bold font-display text-foreground">3</p>
                  <p className="text-[10px] text-muted-foreground">Verified</p>
                </div>
                <div>
                  <p className="text-lg font-bold font-display text-foreground">6</p>
                  <p className="text-[10px] text-muted-foreground">Skills</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 mt-6">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <Button className="w-full mt-4 gap-2" size="sm">
                <ExternalLink className="h-3.5 w-3.5" /> Share Profile
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right: Skills & Tasks */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Skills */}
          <div className="glass rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Skill Scores</h2>
            </div>
            <div className="space-y-5">
              {skills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="glass rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Task History</h2>
            </div>
            <div className="space-y-3">
              {tasks.map((t) => (
                <div key={t.title} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{t.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.category}</p>
                  </div>
                  {t.status === "completed" ? (
                    <span className="text-sm font-semibold text-primary font-display">{t.score}%</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs text-pending bg-pending/10 px-2 py-1 rounded-full">
                      <Clock className="h-3 w-3" /> In Progress
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="glass rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Skill Timeline</h2>
            </div>
            <div className="space-y-4">
              {[
                { date: "Mar 2026", event: "Python verified by DataCorp", type: "verified" },
                { date: "Feb 2026", event: "Completed ML Pipeline task — scored 82%", type: "task" },
                { date: "Jan 2026", event: "React verified by TechStart", type: "verified" },
                { date: "Dec 2025", event: "Joined HireFlow AI", type: "joined" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${
                      item.type === "verified" ? "bg-verified" : item.type === "task" ? "bg-primary" : "bg-muted-foreground"
                    }`} />
                    {i < 3 && <div className="w-px flex-1 bg-border mt-1" />}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm">{item.event}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default PassportDemo;
