import Navbar from "@/components/landing/Navbar";
import SkillBar from "@/components/passport/SkillBar";
import { motion } from "framer-motion";
import { TrendingUp, BookOpen, Target, Bell, ChevronRight, Clock, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendedTasks = [
  { title: "Build a GraphQL API", category: "Web Dev", difficulty: "Intermediate", points: 150 },
  { title: "Image Classification with TensorFlow", category: "ML", difficulty: "Advanced", points: 200 },
  { title: "Data Visualization Dashboard", category: "Data Science", difficulty: "Beginner", points: 100 },
];

const recentActivity = [
  { text: "Python score increased to 92%", time: "2 hours ago", icon: TrendingUp },
  { text: "DataCorp verified your Python skill", time: "1 day ago", icon: CheckCircle2 },
  { text: "Completed REST API task — 94%", time: "3 days ago", icon: Star },
];

const StudentDashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container px-4 pt-24 pb-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-display text-2xl font-bold">Welcome back, Alex</h1>
        <p className="text-muted-foreground text-sm mt-1">Your skill passport is 87% complete</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Stats cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-3 grid sm:grid-cols-4 gap-4">
          {[
            { label: "Trust Score", value: "87", icon: Target, accent: true },
            { label: "Tasks Completed", value: "12", icon: CheckCircle2 },
            { label: "Skills Verified", value: "3", icon: Star },
            { label: "Active Tasks", value: "2", icon: Clock },
          ].map((s) => (
            <div key={s.label} className={`glass rounded-xl p-5 ${s.accent ? "border-primary/30 shadow-glow" : ""}`}>
              <div className="flex items-center justify-between">
                <s.icon className={`h-5 w-5 ${s.accent ? "text-primary" : "text-muted-foreground"}`} />
                {s.accent && <span className="text-[10px] uppercase tracking-wider text-primary">Top 15%</span>}
              </div>
              <p className={`text-2xl font-bold font-display mt-3 ${s.accent ? "text-primary" : "text-foreground"}`}>{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Skill Progress */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 glass rounded-xl p-6 shadow-card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="font-display font-semibold">Skill Progress</h2>
            </div>
            <Button variant="ghost" size="sm" className="text-xs gap-1">View All <ChevronRight className="h-3 w-3" /></Button>
          </div>
          <div className="space-y-5">
            <SkillBar name="Python" score={92} color="bg-pending" verified company="DataCorp" delay={0.1} />
            <SkillBar name="React" score={85} color="bg-in-progress" verified company="TechStart" delay={0.2} />
            <SkillBar name="Machine Learning" score={78} color="bg-primary" delay={0.3} />
            <SkillBar name="SQL" score={88} color="bg-in-progress" delay={0.4} />
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-xl p-6 shadow-card">
          <div className="flex items-center gap-2 mb-6">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold">Activity</h2>
          </div>
          <div className="space-y-4">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <a.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm">{a.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommended Tasks */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-3 glass rounded-xl p-6 shadow-card">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold">Recommended Tasks</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {recommendedTasks.map((t) => (
              <div key={t.title} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group cursor-pointer">
                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">{t.category}</span>
                <h3 className="text-sm font-medium mt-3">{t.title}</h3>
                <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                  <span>{t.difficulty}</span>
                  <span className="text-primary font-semibold">+{t.points} pts</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default StudentDashboard;
