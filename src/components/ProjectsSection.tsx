import { ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "./AboutSection";

const projects = [
  {
    title: "Random Forest Classifier",
    description: "Built a machine learning model using Random Forest to classify Iris flower species with high accuracy.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "WebSocket Chat Server",
    description: "Real-time chat application using WebSockets for instant messaging between multiple clients.",
    stack: ["Python", "WebSockets", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Blockchain Ledger Simulator",
    description: "A simplified blockchain implementation demonstrating hashing, block chaining, and ledger integrity.",
    stack: ["Python", "Cryptography"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Weather Dashboard App",
    description: "A responsive weather dashboard that fetches real-time data from a weather API with a clean UI.",
    stack: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Projects" />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-xl p-6 glow-border hover:glow-box transition-all duration-300 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
