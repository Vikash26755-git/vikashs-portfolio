import { Brain, Target, Code2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About Me" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <InfoCard
            icon={<Brain className="text-primary" size={28} />}
            title="Who I Am"
            description="A 2nd-year BE Computer Science Engineering student with a deep passion for AI, ML, Data Science, and Problem Solving."
          />
          <InfoCard
            icon={<Code2 className="text-primary" size={28} />}
            title="What I Do"
            description="I build intelligent applications, explore machine learning models, and develop full-stack web solutions."
          />
          <InfoCard
            icon={<Target className="text-primary" size={28} />}
            title="My Goal"
            description="To become an AI Engineer and build impactful real-world solutions that make a difference."
          />
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-card rounded-xl p-6 glow-border hover:glow-box transition-all duration-300 group">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

export const SectionTitle = ({ title }: { title: string }) => (
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gradient inline-block">{title}</h2>
    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
  </div>
);

export default AboutSection;
