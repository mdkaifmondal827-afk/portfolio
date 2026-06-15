import { Github, Linkedin, Mail, Twitter, Code2, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/mdkaifmondal827-afk", label: "GitHub", color: "#94A3B8" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/md-kaif-mondal-aa0126327/", label: "LinkedIn", color: "#3B82F6" },
  { icon: Twitter, href: "https://x.com/MdkaifM12144", label: "Twitter", color: "#06B6D4" },
  { icon: Mail, href: "mailto:mdkaifmondal827@gmail.com", label: "Email", color: "#8B5CF6" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.08)",
      paddingTop: "64px",
      position: "relative",
    }}>
      <div style={{
        position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "200px",
        background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: "48px",
          marginBottom: "48px",
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "10px",
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Code2 size={20} color="white" />
              </div>
              <span style={{
                color: "#ffffff", fontSize: "20px",
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
              }}>
                Kaif<span style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dev</span>
              </span>
            </div>
            <p style={{
              color: "#94A3B8", fontSize: "14px", fontFamily: "'Inter', sans-serif",
              lineHeight: 1.75, marginBottom: "24px", maxWidth: "300px",
            }}>
             Continously learning , building , and growing as a Developer.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "40px", height: "40px", borderRadius: "10px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#94A3B8", textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${color}20`;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${color}40`;
                    (e.currentTarget as HTMLAnchorElement).style.color = color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
              fontSize: "16px", color: "#ffffff", marginBottom: "20px",
            }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none", border: "none",
                    color: "#94A3B8", fontSize: "14px", fontFamily: "'Inter', sans-serif",
                    cursor: "pointer", textAlign: "left", padding: 0,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#ffffff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#94A3B8"; }}
                >
                  → {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
              fontSize: "16px", color: "#ffffff", marginBottom: "20px",
            }}>Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Portfolio Design", "Landing Pages", "Responsive Design", "UI/UX Design", "Code Review", "Consultation"].map(s => (
                <span key={s} style={{
                  color: "#94A3B8", fontSize: "14px", fontFamily: "'Inter', sans-serif",
                }}>→ {s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: "24px", paddingBottom: "32px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          flexWrap: "wrap", gap: "16px",
        }}>
          <p style={{ color: "#94A3B8", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
            © 2026 KaifDev ❤️ Designed & Developed by Md Kaif Mondal.
          </p>
          <button
            onClick={() => scrollTo("#home")}
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "8px 16px", borderRadius: "8px",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
              color: "#3B82F6", fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 500,
              cursor: "pointer", transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(59,130,246,0.2)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(59,130,246,0.1)"; }}
          >
            <ArrowUp size={13} /> Back to Top
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
