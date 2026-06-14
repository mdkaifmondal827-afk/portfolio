import { motion } from "motion/react";
import { Monitor, Smartphone, RefreshCw, Palette, Check, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Monitor,
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05))",
    border: "rgba(59,130,246,0.2)",
    title: "Portfolio Website Design",
    tagline: "Perfect for individuals & freelancers",
    price: "₹5,000",
    period: "/ project",
    features: [
      "Custom multi-page design",
      "Mobile responsive layout",
      "Smooth animations",
      "SEO optimized",
      "Contact form integration",
      "2 revision rounds",
    ],
    popular: false,
  },
  {
    id: 2,
    icon: Monitor,
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.08))",
    border: "rgba(139,92,246,0.3)",
    title: "Landing Page Development",
    tagline: "For businesses & product launches",
    price: "₹8,000",
    period: "/ project",
    features: [
      "High-conversion design",
      "Custom animations & effects",
      "A/B testing ready",
      "Analytics integration",
      "Performance optimized",
      "Unlimited revisions",
    ],
    popular: true,
  },
  {
    id: 3,
    icon: Smartphone,
    color: "#06B6D4",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(6,182,212,0.05))",
    border: "rgba(6,182,212,0.2)",
    title: "Responsive Conversion",
    tagline: "Modernize your existing website",
    price: "₹4,000",
    period: "/ project",
    features: [
      "Full mobile responsiveness",
      "Cross-browser compatibility",
      "Performance audit & fix",
      "Accessibility improvements",
      "Code cleanup",
      "1 revision round",
    ],
    popular: false,
  },
  {
    id: 4,
    icon: Palette,
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))",
    border: "rgba(245,158,11,0.2)",
    title: "UI/UX Design",
    tagline: "From Figma concept to pixel-perfect",
    price: "₹3,500",
    period: "/ screen",
    features: [
      "Figma design system",
      "Component library",
      "Interactive prototype",
      "Design tokens",
      "Handoff-ready files",
      "Style guide included",
    ],
    popular: false,
  },
];

export function Services() {
  return (
    <section id="services" style={{
      padding: "100px 0", position: "relative",
      background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.03), transparent)",
    }}>
      <div style={{
        position: "absolute", top: "30%", left: "0",
        width: "350px", height: "350px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
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
            background: "rgba(6, 182, 212, 0.1)",
            border: "1px solid rgba(6, 182, 212, 0.25)",
            marginBottom: "16px",
          }}>
            <RefreshCw size={14} color="#06B6D4" />
            <span style={{ color: "#06B6D4", fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Services</span>
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 48px)", color: "#ffffff", marginBottom: "16px",
          }}>
            What I Offer
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "17px", fontFamily: "'Inter', sans-serif", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Flexible packages designed for startups, businesses, and individuals looking for premium web presence.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }} className="services-grid">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                padding: "28px 24px",
                borderRadius: "24px",
                background: service.popular
                  ? service.gradient
                  : "rgba(255,255,255,0.03)",
                border: `1px solid ${service.popular ? service.border : "rgba(255,255,255,0.08)"}`,
                backdropFilter: "blur(20px)",
                position: "relative",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${service.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {service.popular && (
                <div style={{
                  position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
                  padding: "4px 16px", borderRadius: "100px", fontSize: "11px",
                  fontFamily: "'Inter', sans-serif", fontWeight: 700,
                  background: `linear-gradient(135deg, ${service.color}, #06B6D4)`,
                  color: "#fff", whiteSpace: "nowrap",
                }}>Most Popular</div>
              )}

              <div style={{
                width: "48px", height: "48px", borderRadius: "14px", marginBottom: "20px",
                background: `${service.color}20`,
                border: `1px solid ${service.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <service.icon size={22} color={service.color} />
              </div>

              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: "17px", color: "#ffffff", marginBottom: "6px",
              }}>{service.title}</h3>
              <p style={{ color: "#94A3B8", fontSize: "12px", fontFamily: "'Inter', sans-serif", marginBottom: "20px" }}>{service.tagline}</p>

              <div style={{ marginBottom: "24px" }}>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
                  fontSize: "32px", color: service.color,
                }}>{service.price}</span>
                <span style={{ color: "#94A3B8", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>{service.period}</span>
              </div>

              <div style={{ marginBottom: "24px" }}>
                {service.features.map(feature => (
                  <div key={feature} style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    marginBottom: "10px",
                  }}>
                    <div style={{
                      width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0,
                      background: `${service.color}20`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Check size={10} color={service.color} strokeWidth={3} />
                    </div>
                    <span style={{ color: "#CBD5E1", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                style={{
                  width: "100%",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  padding: "12px",
                  borderRadius: "12px",
                  background: service.popular
                    ? `linear-gradient(135deg, ${service.color}, #06B6D4)`
                    : "rgba(255,255,255,0.06)",
                  border: service.popular ? "none" : "1px solid rgba(255,255,255,0.12)",
                  color: service.popular ? "#ffffff" : "#94A3B8",
                  fontSize: "14px", fontFamily: "'Inter', sans-serif", fontWeight: 600,
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
              >
                Get Started <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1200px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
