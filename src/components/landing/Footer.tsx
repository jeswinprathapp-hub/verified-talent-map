import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        <span className="font-display font-semibold text-sm">Skill Passport</span>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 Skill Passport. Verified skills, real trust.</p>
    </div>
  </footer>
);

export default Footer;
