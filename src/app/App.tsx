
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div style={{
      background: "#0B1120",
      minHeight: "100vh",
      fontFamily: "'Inter', sans-serif",
      color: "#ffffff",
      overflowX: "hidden",
    }}>
      {/* Subtle noise texture overlay */}
      <div style={{
        position: "fixed",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.4,
      }} />

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
