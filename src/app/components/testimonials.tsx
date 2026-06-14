import { motion } from "motion/react";
import { Star, Quote, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Startup Founder",
    company: "LaunchPad Co.",
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGNsaWVudCUyMHRlc3RpbW9uaWFsfGVufDF8fHx8MTc4MTM0MDc0MHww&ixlib=rb-4.1.0&q=80&w=200",
    rating: 5,
    text: "Kaif delivered my landing page in record time and it looked absolutely stunning. The attention to detail, animations, and mobile responsiveness exceeded all my expectations. Highly recommend!",
    accent: "#3B82F6",
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "E-commerce Owner",
    company: "StyleHive",
    image: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGNsaWVudCUyMHRlc3RpbW9uaWFsfGVufDF8fHx8MTc4MTM0MDc0MHww&ixlib=rb-4.1.0&q=80&w=200",
    rating: 5,
    text: "Working with Kaif was a seamless experience. He transformed our outdated website into a modern, conversion-optimized platform. Our bounce rate dropped by 40% in the first month!",
    accent: "#8B5CF6",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Product Manager",
    company: "InnovateTech",
    image: "https://images.unsplash.com/photo-1685760259914-ee8d2c92d2e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGNsaWVudCUyMHRlc3RpbW9uaWFsfGVufDF8fHx8MTc4MTM0MDc0MHww&ixlib=rb-4.1.0&q=80&w=200",
    rating: 5,
    text: "Kaif's code quality is exceptional. He doesn't just build websites — he crafts digital experiences. The project was delivered on time, within budget, and with zero revision requests needed.",
    accent: "#06B6D4",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} color={i < rating ? "#F59E0B" : "#374151"} fill={i < rating ? "#F59E0B" : "none"} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "100px 0", position: "relative" }}>
      <div style={{
        position: "absolute", top: "20%", right: "5%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
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
            background: "rgba(245, 158, 11, 0.1)",
            border: "1px solid rgba(245, 158, 11, 0.25)",
            marginBottom: "16px",
          }}>
            <MessageSquare size={14} color="#F59E0B" />
            <span style={{ color: "#F59E0B", fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Testimonials</span>
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 48px)", color: "#ffffff", marginBottom: "16px",
          }}>
            What Clients Say
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "17px", fontFamily: "'Inter', sans-serif", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Real feedback from people I've had the pleasure of working with.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }} className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                padding: "32px",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                position: "relative",
                transition: "transform 0.25s, border-color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.borderColor = `${t.accent}35`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {/* Quote icon */}
              <div style={{
                position: "absolute", top: "24px", right: "24px",
                opacity: 0.15,
              }}>
                <Quote size={40} color={t.accent} />
              </div>

              {/* Stars */}
              <div style={{ marginBottom: "20px" }}>
                <StarRating rating={t.rating} />
              </div>

              {/* Text */}
              <p style={{
                color: "#CBD5E1", fontSize: "15px", fontFamily: "'Inter', sans-serif",
                lineHeight: 1.75, marginBottom: "28px", fontStyle: "italic",
              }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  overflow: "hidden", flexShrink: 0,
                  border: `2px solid ${t.accent}40`,
                }}>
                  <ImageWithFallback
                    src={t.image}
                    alt={t.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div style={{
                    color: "#ffffff", fontSize: "15px", fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}>{t.name}</div>
                  <div style={{ color: t.accent, fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1100px) {
          .testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
