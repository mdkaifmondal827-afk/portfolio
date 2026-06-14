import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSending(true);

  try {
    await emailjs.send(
      "service_y1pgdgh",
      "template_yt1woll",
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "S8LwvEMKJlDKiswhD"
    );

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }

  setSending(false);
};

  const contactInfo = [
    { icon: Mail, color: "#3B82F6", label: "Email", value: "mdkaifmondal0079@gmail.com" },
    { icon: MapPin, color: "#06B6D4", label: "Location", value: "Kolkata, India" },
  ];

  return (
    <section id="contact" style={{ padding: "100px 0", position: "relative" }}>
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
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
            <MessageCircle size={14} color="#3B82F6" />
            <span style={{ color: "#3B82F6", fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Contact</span>
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 48px)", color: "#ffffff", marginBottom: "16px",
          }}>
            Let's Work Together
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "17px", fontFamily: "'Inter', sans-serif", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "40px",
          alignItems: "start",
        }} className="contact-grid">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: "22px", color: "#ffffff", marginBottom: "12px",
              }}>Get in Touch</h3>
              <p style={{ color: "#94A3B8", fontSize: "15px", fontFamily: "'Inter', sans-serif", lineHeight: 1.75 }}>
                Whether it's a new project, a creative collaboration, or just a hello — my inbox is always open. I typically respond within 24 hours.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
              {contactInfo.map(({ icon: Icon, color, label, value }) => (
                <div key={label} style={{
                  display: "flex", gap: "16px", alignItems: "center",
                  padding: "18px 20px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "12px", flexShrink: 0,
                    background: `${color}20`,
                    border: `1px solid ${color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={18} color={color} />
                  </div>
                  <div>
                    <div style={{ color: "#94A3B8", fontSize: "12px", fontFamily: "'Inter', sans-serif", marginBottom: "2px" }}>{label}</div>
                    <div style={{ color: "#ffffff", fontSize: "14px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div style={{
              padding: "20px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1))",
              border: "1px solid rgba(59,130,246,0.2)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E" }} />
                <span style={{ color: "#22C55E", fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Available for new projects</span>
              </div>
              <p style={{ color: "#94A3B8", fontSize: "13px", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                Currently accepting freelance projects and internship opportunities starting immediately.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              padding: "40px",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <CheckCircle size={64} color="#22C55E" style={{ margin: "0 auto 20px" }} />
                </motion.div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "22px", color: "#ffffff", marginBottom: "12px" }}>
                  Message Sent!
                </h3>
                <p style={{ color: "#94A3B8", fontSize: "15px", fontFamily: "'Inter', sans-serif", lineHeight: 1.65 }}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  style={{
                    marginTop: "24px",
                    padding: "10px 24px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "14px", fontFamily: "'Inter', sans-serif", fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  {[
                    { name: "name", label: "Your Name", placeholder: "soif " },
                    { name: "email", label: "Email Address", placeholder: "soif@example.com" },
                  ].map(field => (
                    <div key={field.name}>
                      <label style={{
                        display: "block", color: "#CBD5E1", fontSize: "13px",
                        fontFamily: "'Inter', sans-serif", fontWeight: 500, marginBottom: "8px",
                      }}>{field.label}</label>
                      <input
                        type={field.name === "email" ? "email" : "text"}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        style={{
                          width: "100%", padding: "12px 16px", borderRadius: "10px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#ffffff", fontSize: "14px", fontFamily: "'Inter', sans-serif",
                          outline: "none", boxSizing: "border-box",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(59,130,246,0.5)"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{
                    display: "block", color: "#CBD5E1", fontSize: "13px",
                    fontFamily: "'Inter', sans-serif", fontWeight: 500, marginBottom: "8px",
                  }}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Hiring / Collaboration"
                    required
                    style={{
                      width: "100%", padding: "12px 16px", borderRadius: "10px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff", fontSize: "14px", fontFamily: "'Inter', sans-serif",
                      outline: "none", boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(59,130,246,0.5)"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{
                    display: "block", color: "#CBD5E1", fontSize: "13px",
                    fontFamily: "'Inter', sans-serif", fontWeight: 500, marginBottom: "8px",
                  }}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and how I can help..."
                    required
                    rows={6}
                    style={{
                      width: "100%", padding: "12px 16px", borderRadius: "10px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff", fontSize: "14px", fontFamily: "'Inter', sans-serif",
                      outline: "none", resize: "vertical", boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(59,130,246,0.5)"; }}
                    onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    width: "100%",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    padding: "14px",
                    borderRadius: "12px",
                    background: sending ? "rgba(59,130,246,0.5)" : "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                    border: "none",
                    color: "#ffffff", fontSize: "15px", fontFamily: "'Inter', sans-serif", fontWeight: 600,
                    cursor: sending ? "wait" : "pointer",
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.25)",
                    transition: "opacity 0.2s",
                  }}
                >
                  {sending ? (
                    <>
                      <div style={{
                        width: "16px", height: "16px", borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "#fff",
                        animation: "spin 0.8s linear infinite",
                      }} />
                      Sending...
                    </>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
