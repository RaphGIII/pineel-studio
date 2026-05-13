"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MonitorSmartphone,
  Layers,
  Mail,
  ExternalLink,
  CheckCircle2
} from "lucide-react";

const projects = [
  {
    title: "Aero Club Concept",
    category: "Aviation Club Redesign",
    description:
      "A cinematic website concept for a regional aviation club with a stronger focus on emotion, membership and discovery flights.",
    image:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1600&q=80",
    tags: ["Aviation", "Club", "Landing Page"]
  },
  {
    title: "Chess Club Experience",
    category: "Local Club Website",
    description:
      "A refined 3D-inspired chess club interface designed to make tradition, tournaments and community feel contemporary.",
    image:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1600&q=80",
    tags: ["Chess", "Community", "3D Visual"]
  },
  {
    title: "Airfield Restaurant",
    category: "Hospitality & Club Concept",
    description:
      "A warm, atmospheric layout combining club information with a restaurant section for visitors, pilots and local guests.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    tags: ["Restaurant", "Experience", "Local Business"]
  }
];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Modern Websites",
    text:
      "Clean, responsive websites that look professional on desktop and mobile devices."
  },
  {
    icon: Sparkles,
    title: "Visual Redesigns",
    text:
      "Existing websites are transformed into elegant, structured and more trustworthy digital experiences."
  },
  {
    icon: Layers,
    title: "Digital Presence",
    text:
      "From first impression to contact button: every section is designed to help visitors understand and act quickly."
  }
];

const process = [
  "Analyse the existing online presence",
  "Create a clear visual redesign concept",
  "Build a responsive website structure",
  "Prepare the page for real visitors and enquiries"
];

export default function Home() {
  return (
    <main className="site">
      <div className="background-glow" aria-hidden="true">
        <div className="glow glow-one" />
        <div className="glow glow-two" />
      </div>

      <header className="header">
        <a href="#" className="brand" aria-label="Pineel Studio home">
          <span className="brand-mark">P</span>
          <span className="brand-name">PINEEL STUDIO</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="mailto:hello@pineelstudios.com" className="nav-button">
          Let&apos;s talk
        </a>
      </header>

      <section className="hero section">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="eyebrow">
              <span />
              Modern web design for clubs, brands and local businesses
            </div>

            <h1>Digital presence with clarity, atmosphere and intent.</h1>

            <p className="hero-copy">
              Pineel Studio creates refined websites and redesign concepts for
              local businesses, clubs and small brands that want to look more
              professional online.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                View selected work
                <ArrowRight size={18} />
              </a>
              <a href="mailto:hello@pineelstudios.com" className="secondary-button">
                Contact Pineel Studio
              </a>
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
                <div className="browser-content">
                  <div className="preview-image">
                    <img
                      src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1600&q=80"
                      alt="Modern website preview"
                    />
                    <div className="preview-overlay" />
                    <div className="preview-text">
                      <p>Website Concept</p>
                      <h2>A more memorable first impression.</h2>
                      <div className="preview-tags">
                        <span>Responsive</span>
                        <span>Modern UI</span>
                        <span>Clear CTA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-heading split">
          <div>
            <p className="kicker">Selected Work</p>
            <h2>Concepts designed to feel credible from the first second.</h2>
          </div>
          <p>
            Early portfolio concepts focused on clubs, aviation, hospitality and
            local businesses.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-gradient" />
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-body">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <div className="services-grid">
          <div className="section-heading">
            <p className="kicker">Services</p>
            <h2>What Pineel Studio helps with.</h2>
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
      </section>

      <section id="process" className="section">
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
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <p className="kicker">Contact</p>
          <h2>A better website can start with one clear idea.</h2>
          <p>
            For website concepts, redesigns or a modern online presence for your
            club, business or brand, contact Pineel Studio directly.
          </p>
          <div className="contact-actions">
            <a href="mailto:hello@pineelstudios.com" className="primary-button">
              <Mail size={18} />
              hello@pineelstudios.com
              <ArrowRight size={18} />
            </a>
            <a
              href="https://pineelstudios.com"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              pineelstudios.com
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Pineel Studio. All rights reserved.</p>
        <p>Modern websites & digital presence.</p>
      </footer>
    </main>
  );
}
