import { motion } from "motion/react";
import { Code2, Wrench, Layout } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    icon: Code2,
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05))",
    border: "rgba(59,130,246,0.2)",
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "JavaScript", level: 85, icon: "⚡" },
      { name: "React", level: 80, icon: "⚛️" },
    ],
  },
  {
    id: "tools",
    icon: Wrench,
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))",
    border: "rgba(139,92,246,0.2)",
    title: "Tools",
    skills: [
      { name: "Git", level: 88, icon: "🔀" },
      { name: "GitHub", level: 90, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Figma", level: 75, icon: "🎭" },
    ],
  },
  {
    id: "other",
    icon: Layout,
    color: "#06B6D4",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(6,182,212,0.05))",
    border: "rgba(6,182,212,0.2)",
    title: "Other",
    skills: [
      { name: "Responsive Design", level: 92, icon: "📱" },
      { name: "SEO Basics", level: 70, icon: "🔍" },
      { name: "UI/UX Design", level: 78, icon: "✨" },
    ],
  },
];

function SkillBar({ name, level, color, icon }: { name: string; level: number; color: string; icon: string }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "16px" }}>{icon}</span>
          <span style={{ color: "#ffffff", fontSize: "14px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{name}</span>
        </div>
        <span style={{ color: "#94A3B8", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>{level}%</span>
      </div>
      <div style={{
        height: "6px", borderRadius: "100px",
        background: "rgba(255,255,255,0.08)",
        overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{
            height: "100%",
            borderRadius: "100px",
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 10px ${color}50`,
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" style={{
      padding: "100px 0",
      position: "relative",
      background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.03), transparent)",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 16px", borderRadius: "100px",
            background: "rgba(6, 182, 212, 0.1)",
            border: "1px solid rgba(6, 182, 212, 0.25)",
            marginBottom: "16px",
          }}>
            <Code2 size={14} color="#06B6D4" />
            <span style={{ color: "#06B6D4", fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Technical Skills</span>
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 48px)", color: "#ffffff", marginBottom: "16px",
          }}>
            My Expertise
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "17px", fontFamily: "'Inter', sans-serif", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }} className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{
                padding: "32px",
                borderRadius: "24px",
                background: cat.gradient,
                border: `1px solid ${cat.border}`,
                backdropFilter: "blur(20px)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px",
                  background: `${cat.color}20`,
                  border: `1px solid ${cat.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <cat.icon size={22} color={cat.color} />
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                  fontSize: "20px", color: "#ffffff",
                }}>{cat.title}</h3>
              </div>
              {cat.skills.map(skill => (
                <SkillBar key={skill.name} {...skill} color={cat.color} />
              ))}
            </motion.div>
          ))}
        </div>

      
        
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
