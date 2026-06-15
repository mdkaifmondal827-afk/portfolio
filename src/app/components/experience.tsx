import { motion } from "motion/react";
import { Briefcase, Trophy, Award, Zap } from "lucide-react";

const timelineItems = [
  {
  id: 1,
  title: "Web Design Front-End Intern",
  company: "Vidyawan (Shiva Tech Innovations)",
  org: "Vidyawan (Shiva Tech Innovations)",
  period: "Feb 2026 - Mar 2026",
  description:
    "Successfully completed a one-month internship in Web Design Front-End Fundamentals. Worked on responsive web design, HTML, CSS, JavaScript and frontend development.",
  tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  color: "#3B82F6",
  icon: Briefcase,
}

  
  
];

export function Experience() {
  return (
    <section id="experience" style={{
      padding: "100px 0", position: "relative",
      background: "linear-gradient(180deg, transparent, rgba(139,92,246,0.03), transparent)",
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
            background: "rgba(139, 92, 246, 0.1)",
            border: "1px solid rgba(139, 92, 246, 0.25)",
            marginBottom: "16px",
          }}>
            <Trophy size={14} color="#8B5CF6" />
            <span style={{ color: "#8B5CF6", fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Journey</span>
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 48px)", color: "#ffffff", marginBottom: "16px",
          }}>
            Experience & Achievements
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "17px", fontFamily: "'Inter', sans-serif", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            My professional journey, certifications, and milestones.
          </p>
        </motion.div>

        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute",
            left: "24px",
            top: "0",
            bottom: "0",
            width: "2px",
            background: "linear-gradient(180deg, #3B82F6, #8B5CF6, #06B6D4)",
            opacity: 0.3,
          }} />

          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                display: "flex",
                gap: "24px",
                marginBottom: "28px",
                position: "relative",
              }}
            >
              {/* Icon dot */}
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                background: `${item.color}20`,
                border: `2px solid ${item.color}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                zIndex: 1,
                backdropFilter: "blur(10px)",
              }}>
                <item.icon size={20} color={item.color} />
              </div>

              {/* Card */}
              <div style={{
                flex: 1,
                padding: "24px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                transition: "border-color 0.2s, transform 0.2s",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${item.color}30`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                      fontSize: "16px", color: "#ffffff", marginBottom: "3px",
                    }}>{item.title}</h3>
                    <div style={{ color: item.color, fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{item.org}</div>
                  </div>
                  <span style={{
                    padding: "4px 12px", borderRadius: "100px", fontSize: "11px",
                    fontFamily: "'Inter', sans-serif", fontWeight: 500,
                    background: `${item.color}15`, color: item.color,
                    border: `1px solid ${item.color}20`,
                    whiteSpace: "nowrap",
                  }}>{item.period}</span>
                </div>
                <p style={{
                  color: "#94A3B8", fontSize: "14px", fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.65, marginBottom: "14px",
                }}>{item.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {item.tags.map(tag => (
                    <span key={tag} style={{
                      padding: "3px 10px", borderRadius: "100px", fontSize: "11px",
                      fontFamily: "'Inter', sans-serif", fontWeight: 500,
                      background: "rgba(255,255,255,0.05)", color: "#94A3B8",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
