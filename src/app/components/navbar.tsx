import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  {href:"#Experience",label:"Experience"},
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(11, 17, 32, 0.9)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(59, 130, 246, 0.15)" : "none",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Code2 size={20} color="white" />
            </div>
            <span style={{
              color: "#ffffff",
              fontSize: "20px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.3px",
            }}>
              Kaif<span style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dev</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div
  style={{
    display: window.innerWidth >= 768 ? "flex" : "none",
    alignItems: "center",
    gap: "8px",
  }}
>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#94A3B8",
                  fontSize: "14px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  cursor: "pointer",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#ffffff";
                  (e.target as HTMLButtonElement).style.background = "rgba(59, 130, 246, 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#94A3B8";
                  (e.target as HTMLButtonElement).style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNav("#contact")}
            style={{
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
              border: "none",
              color: "#ffffff",
              display: window.innerWidth >= 768 ? "block" : "none",
              fontSize: "14px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              cursor: "pointer",
              padding: "10px 22px",
              borderRadius: "10px",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.opacity = "0.85";
              (e.target as HTMLButtonElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.opacity = "1";
              (e.target as HTMLButtonElement).style.transform = "translateY(0)";
            }}
           
          >
            Hire Me
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              color: "#ffffff",
              cursor: "pointer",
              padding: "8px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
           style={{
  position: "absolute",
  top: "72px",
  left: 0,
  right: 0,
  zIndex: 9999,
  background: "rgba(11, 17, 32, 0.98)",
  backdropFilter: "blur(20px)",
  borderTop: "1px solid rgba(59, 130, 246, 0.15)",
  overflow: "hidden",
}}
          >
            <div style={{ padding: "16px 24px 24px" }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{
                    display: "block",
                    width: "100%",
                    background: "none",
                    border: "none",
                    color: "#94A3B8",
                    fontSize: "16px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    cursor: "pointer",
                    padding: "14px 0",
                    textAlign: "left",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                style={{
                  marginTop: "16px",
                  width: "100%",
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
