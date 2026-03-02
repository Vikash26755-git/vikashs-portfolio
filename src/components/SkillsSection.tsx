import { SectionTitle } from "./AboutSection";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 85 },
      { name: "C", level: 70 },
      { name: "Java", level: 65 },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Scikit-learn", level: 75 },
      { name: "Pandas & NumPy", level: 80 },
      { name: "TensorFlow", level: 45 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML & CSS", level: 80 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Skills" />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="bg-card rounded-xl p-6 glow-border">
              <h3 className="font-semibold text-lg mb-5 text-primary font-mono">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
