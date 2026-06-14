import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "../../assets/profile.png";

const PROFILE_IMG = profileImage;

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Gradient orbs */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }} className="hero-grid">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "100px",
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                marginBottom: "24px",
              }}>
                <Sparkles size={14} color="#3B82F6" />
                <span style={{ color: "#3B82F6", fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                  Available for Freelance Work
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(40px, 5vw, 68px)",
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              Hi, I'm{" "}
              <span style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
               Md Kaif Mondal
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(20px, 2.5vw, 28px)",
                color: "#94A3B8",
                marginBottom: "24px",
                lineHeight: 1.3,
              }}
            >
              Frontend Developer & Freelance Web Designer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                color: "#94A3B8",
                fontSize: "17px",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.75,
                marginBottom: "40px",
                maxWidth: "520px",
              }}
            >
              Passionate Freelance Web Developer specializing in modern, responsive, and user-friendly websites. I help businesses and individuals build a strong online presence through clean design and efficient web solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}
            >
              <button
                onClick={() => scrollTo("#contact")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 40px rgba(59, 130, 246, 0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(59, 130, 246, 0.3)";
                }}
              >
                Hire Me <ArrowRight size={16} />
              </button>
              <a
                href="/Md_Kaif_Mondal_Resume.pdf."
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                <Download size={16} /> Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: "flex", gap: "16px", alignItems: "center" }}
            >
              <span style={{ color: "#94A3B8", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>Follow me:</span>
              {[
                { icon: Github, href: "https://github.com/mdkaifmondal827-afk", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/md-kaif-mondal-aa0126327/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:mdkaifmondal827@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94A3B8",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(59,130,246,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(59,130,246,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#3B82F6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center", position: "relative" }}
          >
            {/* Glow ring */}
            <div style={{
              position: "absolute",
              inset: "-20px",
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
              opacity: 0.25,
              filter: "blur(30px)",
            }} />
            <div style={{
              position: "relative",
              width: "clamp(280px, 35vw, 420px)",
              height: "clamp(280px, 35vw, 420px)",
              borderRadius: "50%",
              padding: "4px",
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)",
            }}>
              <div style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#0B1120",
              }}>
                <ImageWithFallback
                  src={PROFILE_IMG}
                  alt="Md kaif Mondal — Frontend Developer"
                  style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
