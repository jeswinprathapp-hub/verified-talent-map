import { Link } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="font-display font-bold text-lg text-foreground">HireFlow AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/passport/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Demo Passport</Link>
          <Link to="/dashboard/student" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Student</Link>
          <Link to="/dashboard/company" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Company</Link>
          <Link to="/pitch" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pitch Deck</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Get Started</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border p-4 space-y-3">
          <Link to="/passport/demo" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Demo Passport</Link>
          <Link to="/dashboard/student" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Student</Link>
          <Link to="/dashboard/company" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Company</Link>
          <Link to="/pitch" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Pitch Deck</Link>
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" className="flex-1">Log in</Button>
            <Button size="sm" className="flex-1">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
