import { motion } from "motion/react";
import { GraduationCap, Target, User, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "5+" },
  { label: "Happy Clients", value: "5+" },
  { label: "Technologies", value: "12+" },
  { label: "Certifications", value: "4+" },
];

export function About() {
  return (
    <section id="about" style={{ padding: "100px 0", position: "relative" }}>
      <div style={{
        position: "absolute", top: "20%", right: "0",
        width: "350px", height: "350px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

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
            <User size={14} color="#8B5CF6" />
            <span style={{ color: "#8B5CF6", fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>About Me</span>
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 48px)", color: "#ffffff", marginBottom: "16px",
          }}>
            Who I Am
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "17px", fontFamily: "'Inter', sans-serif", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            A passionate CS graduate driven by the love of crafting extraordinary digital experiences.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }} className="about-grid">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              color: "#94A3B8", fontSize: "16px", fontFamily: "'Inter', sans-serif",
              lineHeight: 1.8, marginBottom: "24px",
            }}>
             I'm Md Kaif Mondal, a Computer Science graduate passionate about web development, UI/UX design, and modern frontend technologies. I enjoy building responsive, user-friendly websites that combine clean design with practical functionality.
            </p>
            <p style={{
              color: "#94A3B8", fontSize: "16px", fontFamily: "'Inter', sans-serif",
              lineHeight: 1.8, marginBottom: "40px",
            }}>
              My goal is to build a successful career as a freelance web developer while continuously improving my skills in React, JavaScript, and modern web technologies. I focus on creating professional websites that help businesses and individuals establish a strong online presence.
            </p>

            {/* Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                {
                  icon: GraduationCap,
                  color: "#3B82F6",
                  title: "B.Tech Computer Science and Engineering",
                  sub: "GuruNanak Institute of Technology • 2022–2026 • GPA: 7.42/10",
                },
                {
                  icon: Target,
                  color: "#8B5CF6",
                  title: "Career Goal",
                  sub: "Seeking opportunities to apply my web development skills, gain industry experience, and contribute to impactful digital products.",
                },
                {
                  icon: CheckCircle2,
                  color: "#06B6D4",
                  title: "Currently",
                  sub: "Actively learning modern web technologies and open to freelance projects, internships, and junior developer roles.",
                },
              ].map(({ icon: Icon, color, title, sub }) => (
                <div key={title} style={{
                  display: "flex", gap: "16px",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  transition: "border-color 0.2s",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                    background: `${color}20`,
                    border: `1px solid ${color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <div style={{ color: "#ffffff", fontSize: "15px", fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: "4px" }}>{title}</div>
                    <div style={{ color: "#94A3B8", fontSize: "14px", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px",
            }}>
              {stats.map(({ label, value }) => (
                <div key={label} style={{
                  padding: "32px 24px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  textAlign: "center",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(59,130,246,0.3)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    fontSize: "42px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
                    background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    marginBottom: "8px",
                  }}>{value}</div>
                  <div style={{ color: "#94A3B8", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Professional Summary Card */}
            <div style={{
              padding: "32px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))",
              border: "1px solid rgba(59,130,246,0.2)",
              backdropFilter: "blur(20px)",
            }}>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
                fontSize: "18px", color: "#ffffff", marginBottom: "16px",
              }}>Professional Summary</h3>
              <p style={{ color: "#94A3B8", fontSize: "14px", fontFamily: "'Inter', sans-serif", lineHeight: 1.75, marginBottom: "20px" }}>
                Passionate freelance web developer with a strong interest in creating modern, responsive, and user-friendly websites. Skilled in HTML, CSS, JavaScript, React, Git, and UI/UX design principles.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["React", "JavaScript", "CSS3", "UI/UX",  "Responsive Design"].map(tag => (
                  <span key={tag} style={{
                    padding: "4px 12px", borderRadius: "100px", fontSize: "12px",
                    fontFamily: "'Inter', sans-serif", fontWeight: 500,
                    background: "rgba(59,130,246,0.15)", color: "#3B82F6",
                    border: "1px solid rgba(59,130,246,0.2)",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
