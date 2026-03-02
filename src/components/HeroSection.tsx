import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-primary font-mono text-sm mb-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-gradient">Vikash A R</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            AI/ML Enthusiast | BE CSE Student
          </p>
          <p className="text-muted-foreground max-w-lg mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Passionate about Artificial Intelligence, Machine Learning, and Software Development.
          </p>

          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={18} />
              Resume
            </a>
            <div className="flex items-center gap-3">
              <SocialIcon href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialIcon href="https://github.com" icon={<Github size={20} />} label="GitHub" />
              <SocialIcon href="mailto:vikash@example.com" icon={<Mail size={20} />} label="Email" />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden glow-border animate-pulse-glow">
            <img
              src={profileImg}
              alt="Vikash A R - Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200"
  >
    {icon}
  </a>
);

export default HeroSection;
