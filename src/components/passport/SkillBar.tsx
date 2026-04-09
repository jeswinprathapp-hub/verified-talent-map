import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

interface SkillBarProps {
  name: string;
  score: number;
  color: string;
  verified?: boolean;
  company?: string;
  delay?: number;
}

const SkillBar = ({ name, score, color, verified, company, delay = 0 }: SkillBarProps) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        {verified && (
          <span className="inline-flex items-center gap-1 text-xs text-verified bg-verified/10 px-2 py-0.5 rounded-full">
            <BadgeCheck className="h-3 w-3" /> {company}
          </span>
        )}
      </div>
      <span className="text-sm font-display font-semibold text-foreground">{score}%</span>
    </div>
    <div className="h-2 rounded-full bg-muted overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${score}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  </div>
);

export default SkillBar;
