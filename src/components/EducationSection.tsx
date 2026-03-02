import { GraduationCap, Award } from "lucide-react";
import { SectionTitle } from "./AboutSection";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Education & Certifications" />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Education */}
          <div className="bg-card rounded-xl p-6 glow-border">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="border-l-2 border-primary/30 pl-4 space-y-1">
              <p className="font-medium">BE Computer Science Engineering</p>
              <p className="text-muted-foreground text-sm">SRM MCET</p>
              <p className="text-primary text-sm font-mono">2nd Year (Ongoing)</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-xl p-6 glow-border">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-primary" size={24} />
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">AI/ML Online Courses</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Python Programming Certification</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
