import { motion } from "motion/react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import FUNNGRO_IMG from '../../assets/funngro-revav.jpeg';
import ASD_IMG from "../../assets/asd-project.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A stunning personal portfolio built with React and Tailwind CSS, featuring glassmorphism UI, smooth animations, and a fully responsive dark theme.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90JTIwbGFwdG9wfGVufDF8fHx8MTc4MTM0MDc0MHww&ixlib=rb-4.1.0&q=80&w=800",
    tags: ["React", "Tailwind CSS", "Motion"],
    accent: "#3B82F6",
    featured: true,
  },
  
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather application with location detection, 7-day forecasts, and beautiful animated weather conditions using Open Weather API.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90JTIwbGFwdG9wfGVufDF8fHx8MTc4MTM0MDc0MHww&ixlib=rb-4.1.0&q=80&w=800",
    tags: ["JavaScript", "REST API", "CSS3"],
    accent: "#3B82F6",
    featured: false,
  },
  {
    id: 3,
    title: "To-Do App",
    description: "Productivity app with drag-and-drop task management, priority labels, due dates, and local storage persistence for seamless workflow.",
    image: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90JTIwbGFwdG9wfGVufDF8fHx8MTc4MTM0MDc0MHww&ixlib=rb-4.1.0&q=80&w=800",
    tags: ["React", "Drag & Drop", "Local Storage"],
    accent: "#8B5CF6",
    featured: false,
    liveUrl:"https://smart-todo-list-mdkaifmondal.netlify.app"
    
  },
  {
  id: 4,
  title: "Funngro Revav Website",
  description: "Modern and responsive website designed for Funngro Revav with clean UI, mobile-friendly layout, optimized performance, and engaging user experience.",
  image: FUNNGRO_IMG,
  tags: ["React", "CSS3", "Responsive"],
  accent: "#3B82F6",
  featured: true,
  liveUrl: "https://funngro-revamp-by-mdkaifmondal.netlify.app",
 
},
{
  id: 5,
  title: "Multimodal ASD Detection Framework",
  description:
    "AI-powered healthcare system for Autism Spectrum Disorder detection using clinical data, facial image analysis, and eye-tracking patterns. Built with XGBoost, EfficientNet-B0, CBAM, and CNN models with multimodal late fusion.",
  image: ASD_IMG,
  tags: ["Python", "Machine Learning", "CNN", "XGBoost"],
  accent: "#00D4FF",
  featured: true,
  liveUrl: "#",
},
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0", position: "relative" }}>
      <div style={{
        position: "absolute", bottom: "10%", left: "0",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
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
            background: "rgba(59, 130, 246, 0.1)",
            border: "1px solid rgba(59, 130, 246, 0.25)",
            marginBottom: "16px",
          }}>
            <Folder size={14} color="#3B82F6" />
            <span style={{ color: "#3B82F6", fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Portfolio</span>
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 48px)", color: "#ffffff", marginBottom: "16px",
          }}>
            Featured Projects
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "17px", fontFamily: "'Inter', sans-serif", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            A curated showcase of my best work — from landing pages to full-stack applications.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }} className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                borderRadius: "20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                overflow: "hidden",
                transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                (e.currentTarget as HTMLDivElement).style.borderColor = `${project.accent}40`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${project.accent}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(180deg, transparent 40%, ${project.accent}20 100%)`,
                }} />
                {project.featured && (
                  <div style={{
                    position: "absolute", top: "12px", right: "12px",
                    padding: "4px 10px", borderRadius: "100px", fontSize: "11px",
                    fontFamily: "'Inter', sans-serif", fontWeight: 600,
                    background: `${project.accent}CC`, color: "#fff",
                  }}>Featured</div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                  fontSize: "18px", color: "#ffffff", marginBottom: "10px",
                }}>{project.title}</h3>
                <p style={{
                  color: "#94A3B8", fontSize: "14px", fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.65, marginBottom: "16px",
                }}>{project.description}</p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      padding: "3px 10px", borderRadius: "100px", fontSize: "11px",
                      fontFamily: "'Inter', sans-serif", fontWeight: 500,
                      background: `${project.accent}15`, color: project.accent,
                      border: `1px solid ${project.accent}25`,
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="#"
                    style={{
                      flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                      gap: "6px", padding: "9px 16px", borderRadius: "10px",
                      background: project.accent,
                      color: "#ffffff", textDecoration: "none",
                      fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 600,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  >
                    
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <a
            href="https://github.com/mdkaifmondal827-afk"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "14px 32px", borderRadius: "12px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#ffffff", textDecoration: "none",
              fontSize: "15px", fontFamily: "'Inter', sans-serif", fontWeight: 600,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(59,130,246,0.1)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(59,130,246,0.3)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)"; }}
          >
            <Github size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1100px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
