import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
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
          background: scrolled ? "rgba(11, 17, 32, 0.9)" : "transparent",
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
            <div className="hidden md:flex" style={{ alignItems: "center", gap: "8px" }}>
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

            {/* Desktop Hire Me */}
            <button
              onClick={() => handleNav("#contact")}
              className="hidden md:block"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                border: "none",
                color: "#ffffff",
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
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              style={{
                background: mobileOpen
                  ? "rgba(59, 130, 246, 0.2)"
                  : "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                color: "#ffffff",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: "flex" }}
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 98,
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(4px)",
              }}
            />

            {/* Slide-down menu panel */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                position: "fixed",
                top: "72px",
                left: 0,
                right: 0,
                zIndex: 99,
                background: "rgba(11, 17, 32, 0.98)",
                backdropFilter: "blur(24px)",
                borderTop: "1px solid rgba(59, 130, 246, 0.15)",
                borderBottom: "1px solid rgba(59, 130, 246, 0.15)",
                padding: "8px 0 24px",
              }}
            >
              <div style={{ padding: "8px 24px 0" }}>
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25, ease: "easeOut" }}
                    onClick={() => handleNav(link.href)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      background: "none",
                      border: "none",
                      color: "#94A3B8",
                      fontSize: "17px",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      cursor: "pointer",
                      padding: "16px 0",
                      textAlign: "left",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      transition: "color 0.2s",
                      gap: "12px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "#94A3B8";
                    }}
                  >
                    <span style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                      flexShrink: 0,
                    }} />
                    {link.label}
                  </motion.button>
                ))}

                <motion.button
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.06 + 0.05, duration: 0.25 }}
                  onClick={() => handleNav("#contact")}
                  style={{
                    marginTop: "20px",
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
                    letterSpacing: "0.3px",
                  }}
                >
                  Hire Me
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}