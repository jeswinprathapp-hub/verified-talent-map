import Navbar from "@/components/landing/Navbar";
import { motion } from "framer-motion";
import { Users, Filter, Search, BadgeCheck, TrendingUp, Briefcase, ChevronRight, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const candidates = [
  { name: "Alex Johnson", role: "Full Stack Dev", trust: 87, topSkill: "Python 92%", location: "San Francisco", verified: 3 },
  { name: "Priya Sharma", role: "ML Engineer", trust: 91, topSkill: "TensorFlow 95%", location: "Bangalore", verified: 4 },
  { name: "Marcus Lee", role: "Data Scientist", trust: 79, topSkill: "SQL 88%", location: "New York", verified: 2 },
  { name: "Sara Chen", role: "Frontend Dev", trust: 83, topSkill: "React 90%", location: "Toronto", verified: 3 },
  { name: "James Obi", role: "Backend Dev", trust: 76, topSkill: "Node.js 82%", location: "Lagos", verified: 1 },
];

const postedTasks = [
  { title: "Build a REST API", applicants: 24, status: "active" },
  { title: "ML Model Optimization", applicants: 18, status: "active" },
  { title: "Dashboard Redesign", applicants: 31, status: "closed" },
];

const CompanyDashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container px-4 pt-24 pb-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-display text-2xl font-bold">Company Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Find and hire verified talent</p>
      </motion.div>

      {/* Stats */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Candidates Found", value: "1,247", icon: Users },
          { label: "Tasks Posted", value: "3", icon: Briefcase },
          { label: "Verified Hires", value: "8", icon: BadgeCheck },
          { label: "Avg Trust Score", value: "84", icon: TrendingUp },
        ].map((s) => (
          <div key={s.label} className="glass rounded-xl p-5">
            <s.icon className="h-5 w-5 text-muted-foreground" />
            <p className="text-2xl font-bold font-display mt-3">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Candidate Search */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 glass rounded-xl p-6 shadow-card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              <h2 className="font-display font-semibold">Talent Pool</h2>
            </div>
            <Button variant="outline" size="sm" className="gap-1 text-xs">
              <Filter className="h-3 w-3" /> Filters
            </Button>
          </div>
          <Input placeholder="Search by skill, role, or location..." className="mb-4 bg-muted/50 border-border" />
          <div className="space-y-3">
            {candidates.map((c) => (
              <div key={c.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-display font-bold text-sm text-primary">
                    {c.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{c.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-muted-foreground">{c.role}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-0.5"><MapPin className="h-2.5 w-2.5" />{c.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-muted-foreground">{c.topSkill}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-0.5 justify-end"><BadgeCheck className="h-3 w-3 text-verified" />{c.verified} verified</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold font-display text-primary">{c.trust}</p>
                    <p className="text-[10px] text-muted-foreground">Trust</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Posted Tasks */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-xl p-6 shadow-card">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold">Your Tasks</h2>
          </div>
          <div className="space-y-3">
            {postedTasks.map((t) => (
              <div key={t.title} className="p-4 rounded-lg bg-muted/30">
                <h3 className="text-sm font-medium">{t.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{t.applicants} applicants</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    t.status === "active" ? "bg-verified/10 text-verified" : "bg-muted text-muted-foreground"
                  }`}>{t.status}</span>
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4" size="sm">Post New Task</Button>
        </motion.div>
      </div>
    </div>
  </div>
);

export default CompanyDashboard;
