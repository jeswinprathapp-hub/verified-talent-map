import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-primary/5" />
    <div className="container relative z-10 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
          Ready to build your <span className="text-gradient">verified skill identity</span>?
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Join thousands of students proving their skills through real work — matched to opportunities that fit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link to="/passport/demo">
            <Button size="lg" className="gap-2 px-8 shadow-glow">
              Create Your Passport <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/dashboard/company">
            <Button variant="outline" size="lg" className="px-8">
              Hire Verified Talent
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
