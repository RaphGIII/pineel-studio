"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MonitorSmartphone,
  Layers,
  Mail,
  ExternalLink,
  CheckCircle2,
  ShoppingBag,
  Plane,
  Crown,
  Palette,
  MousePointerClick
} from "lucide-react";

const projects = [
  {
    title: "L'Étoile Couture",
    category: "Fashion E-Commerce",
    description:
      "A modern streetwear brand presence with product-focused storytelling, clean shopping paths and a stronger premium visual direction.",
    tags: ["Fashion", "Shopify", "Brand"],
    href: "https://www.letoilecouture.com",
    action: "Open live site",
    visual: "fashion"
  },
  {
    title: "Aviation Club Concept",
    category: "Club Redesign",
    description:
      "A cinematic web concept for aviation clubs, focused on discovery flights, membership, training and a more emotional first impression.",
    tags: ["Aviation", "Club", "Landing Page"],
    href: "mailto:hello@pineelstudios.com?subject=Aviation%20website%20concept",
    action: "Request concept",
    visual: "aviation"
  },
  {
    title: "Chess Club Experience",
    category: "Local Club Website",
    description:
      "A refined chess club interface designed to make tradition, tournaments, youth work and community feel contemporary.",
    tags: ["Chess", "Community", "3D Feel"],
    href: "mailto:hello@pineelstudios.com?subject=Chess%20club%20website%20concept",
    action: "Request concept",
    visual: "chess"
  }
];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Modern Websites",
    text:
      "Responsive websites that feel serious, polished and trustworthy on desktop and mobile devices."
  },
  {
    icon: Sparkles,
    title: "Visual Redesigns",
    text:
      "Existing pages are transformed into cleaner, more atmospheric and more conversion-oriented experiences."
  },
  {
    icon: Layers,
    title: "Digital Presence",
    text:
      "From the first impression to the contact button, every section is structured to help visitors understand and act."
  }
];

const process = [
  "Analyse the current website, target group and first impression",
  "Create a clear redesign concept with stronger visual hierarchy",
  "Build the responsive website and refine the interaction details",
  "Prepare launch, domain connection and future content updates"
];

const stats = [
  ["3+", "Concept styles"],
  ["100%", "Responsive"],
  ["24h", "Fast first draft"]
];

function SectionReveal({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function ProjectVisual({ type }: { type: string }) {
  return (
    <div className={`project-visual ${type}`} aria-hidden="true">
      <div className="visual-glow" />
      {type === "fashion" && (
        <>
          <div className="fashion-orb orb-one" />
          <div className="fashion-orb orb-two" />
          <div className="fashion-card card-one">
            <ShoppingBag size={22} />
            <span>NEW DROP</span>
          </div>
          <div className="fashion-card card-two">
            <span>HIGH NOON</span>
            <strong>Editorial commerce</strong>
          </div>
          <div className="product-frame">
            <div className="shirt-shape" />
          </div>
        </>
      )}

      {type === "aviation" && (
        <>
          <Plane className="plane-line" size={88} />
          <div className="runway" />
          <div className="cloud cloud-one" />
          <div className="cloud cloud-two" />
          <div className="coordinate-card">
            <span>DISCOVERY FLIGHT</span>
            <strong>Book the experience</strong>
          </div>
        </>
      )}

      {type === "chess" && (
        <>
          <Crown className="chess-crown" size={74} />
          <div className="board-grid" />
          <div className="piece piece-one" />
          <div className="piece piece-two" />
          <div className="match-card">
            <span>NEXT GAME NIGHT</span>
            <strong>Friday · 19:30</strong>
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="site">
      <div className="background-glow" aria-hidden="true">
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="noise-layer" />
      </div>

      <header className="header">
        <a href="#" className="brand" aria-label="Pineel Studios home">
          <span className="brand-mark">P</span>
          <span className="brand-name">PINEEL STUDIOS</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let&apos;s talk
        </a>
      </header>

      <section className="hero section">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <div className="eyebrow">
              <span />
              Modern web design for clubs, brands and local businesses
            </div>

            <h1>
              Digital presence with clarity, atmosphere and intent.
            </h1>

            <p className="hero-copy">
              Pineel Studios creates refined websites and redesign concepts for
              local businesses, clubs and small brands that want to look more
              professional online.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                View selected work
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="secondary-button">
                Contact Pineel Studios
              </a>
            </div>

            <div className="hero-stats" aria-label="Studio highlights">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="preview-wrap"
          >
            <div className="preview-shadow" />
            <div className="browser-card">
              <div className="browser-inner">
                <div className="browser-top">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="studio-preview">
                  <div className="preview-aurora" />
                  <div className="mini-nav">
                    <span>PINEEL</span>
                    <div />
                  </div>

                  <motion.div
                    className="floating-card floating-main"
                    animate={{ y: [0, -9, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Palette size={20} />
                    <span>Visual redesign</span>
                  </motion.div>

                  <motion.div
                    className="floating-card floating-side"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MousePointerClick size={18} />
                    <span>Clear CTA</span>
                  </motion.div>

                  <div className="preview-copy">
                    <p>Website Concept</p>
                    <h2>A more memorable first impression.</h2>
                    <div className="preview-tags">
                      <span>Responsive</span>
                      <span>Modern UI</span>
                      <span>Conversion ready</span>
                    </div>
                  </div>

                  <div className="mock-layout">
                    <div className="mock-hero" />
                    <div className="mock-row">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="mock-grid">
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionReveal className="section logos-section">
        <div className="logo-strip">
          <span>Selected directions</span>
          <span>Aviation clubs</span>
          <span>Fashion brands</span>
          <span>Local associations</span>
          <span>Hospitality</span>
        </div>
      </SectionReveal>

      <SectionReveal id="work" className="section">
        <div className="section-heading split">
          <div>
            <p className="kicker">Selected Work</p>
            <h2>Concepts designed to feel credible from the first second.</h2>
          </div>
          <p>
            Portfolio directions focused on visual clarity, stronger first
            impressions and real conversion paths.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.62, delay: index * 0.08 }}
              className="project-card"
            >
              <ProjectVisual type={project.visual} />

              <div className="project-body">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <em key={tag}>{tag}</em>
                  ))}
                </div>

                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                  className="project-link"
                >
                  {project.action}
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal id="services" className="section">
        <div className="services-grid">
          <div className="section-heading">
            <p className="kicker">Services</p>
            <h2>What Pineel Studios helps with.</h2>
          </div>

          <div className="service-list">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="service-card">
                  <div className="icon-box">
                    <Icon size={22} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="process" className="section">
        <div className="process-card">
          <div className="process-text">
            <p className="kicker">Process</p>
            <h2>Simple, clear and focused on getting online.</h2>
            <p>
              The goal is not to make the process complicated. The goal is to
              create a page that feels professional, understandable and useful
              for real visitors.
            </p>
          </div>

          <div className="process-list">
            {process.map((item, index) => (
              <div key={item} className="process-item">
                <span className="step">{index + 1}</span>
                <div>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="contact" className="section contact-section">
        <div className="contact-card">
          <p className="kicker">Contact</p>
          <h2>A better website can start with one clear idea.</h2>
          <p>
            For website concepts, redesigns or a modern online presence for your
            club, business or brand, contact Pineel Studios directly.
          </p>
          <div className="contact-actions">
            <a href="mailto:hello@pineelstudios.com" className="primary-button">
              <Mail size={18} />
              hello@pineelstudios.com
              <ArrowRight size={18} />
            </a>
            <a
              href="https://www.pineelstudios.com"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              pineelstudios.com
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </SectionReveal>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Pineel Studios. All rights reserved.</p>
        <p>Modern websites & digital presence.</p>
      </footer>
    </main>
  );
}
