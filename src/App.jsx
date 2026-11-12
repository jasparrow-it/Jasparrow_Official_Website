import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  BrainCircuit,
  Code2,
  Workflow,
  Cloud,
  Layers3,
  ShieldCheck,
  Sparkles,
  MoveUpRight,
  CheckCircle2,
  Mail,
  Globe2,
  Copy,
  Check
} from 'lucide-react';

const CONTACT_EMAIL = 'hello@jasparrowit.com';

const capabilities = [
  {
    icon: BrainCircuit,
    number: '01',
    title: 'AI & Intelligent Automation',
    copy: 'Put intelligence to work across everyday operations with practical AI, connected workflows and purposeful automation.',
    tags: ['Applied AI', 'Intelligent workflows', 'Process automation']
  },
  {
    icon: Code2,
    number: '02',
    title: 'Software & Product Engineering',
    copy: 'From a focused business application to a scalable SaaS platform, we turn ideas into dependable digital products.',
    tags: ['SaaS platforms', 'Web applications', 'Product development']
  },
  {
    icon: Workflow,
    number: '03',
    title: 'Digital Transformation',
    copy: 'Connect systems, simplify processes and modernise the way teams work—with outcomes that matter to the business.',
    tags: ['Integration', 'Process modernisation', 'Experience']
  },
  {
    icon: Cloud,
    number: '04',
    title: 'Enterprise Technology',
    copy: 'Design and deliver secure, maintainable solutions across modern workplace and enterprise technology ecosystems.',
    tags: ['Microsoft ecosystem', 'Cloud-ready solutions', 'Enterprise integration']
  }
];

const products = [
  {
    name: 'AURO360',
    status: 'LIVE PRODUCT',
    label: 'Gym Management & Intelligence',
    copy: 'A connected platform that helps fitness businesses manage members, teams and day-to-day operations with greater clarity.',
    url: 'https://auro360.in',
    action: 'Explore Auro360',
    mark: 'A',
    features: ['Member & staff management', 'Attendance and renewals', 'Business intelligence']
  },
  {
    name: 'ASID360',
    status: 'IN DEVELOPMENT',
    label: 'Enterprise AI & Intelligent Operations',
    copy: 'An emerging intelligent operations platform designed to bring visibility, assistance and automation to enterprise environments.',
    url: `mailto:${CONTACT_EMAIL}?subject=ASID360%20enquiry`,
    action: 'Enquire about ASID360',
    mark: '360',
    features: ['Intelligent operations', 'Enterprise visibility', 'Workflow orchestration']
  }
];

function Brand({ onClick }) {
  return (
    <a className="brand" href="#home" onClick={onClick} aria-label="Jasparrow IT Solutions home">
      <img
        className="brand-logo"
        src="/jasparrow-logo-circle.png"
        alt="Jasparrow IT Solutions logo"
        width="44"
        height="44"
      />
      <span className="brand-name">
        JASPARROW<span>IT SOLUTIONS</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = [
    ['About', '#about'],
    ['Capabilities', '#capabilities'],
    ['Products', '#products'],
    ['Contact', '#contact']
  ];

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <header className="header">
      <div className="nav-wrap container">
        <Brand onClick={close} />
        <nav id="primary-navigation" className={open ? 'nav nav-open' : 'nav'} aria-label="Primary">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={close}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" /> INDEPENDENT TECHNOLOGY &amp; PRODUCT ENGINEERING
          </div>
          <h1>
            Building technology.
            <br />
            <span>Enabling growth.</span>
          </h1>
          <p className="hero-lead">
            We create intelligent digital solutions that simplify operations, empower teams and move businesses forward.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#capabilities">
              Explore what we do <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#products">
              Discover our products <ArrowRight size={16} />
            </a>
          </div>
          <div className="hero-proof">
            <span className="proof-dot" />
            <span>Purpose-built technology. Practical business outcomes.</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract digital technology illustration">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-glow" />
          <div className="visual-core">
            <img
              className="core-logo"
              src="/jasparrow-logo-circle.png"
              alt="Jasparrow IT Solutions emblem"
              width="196"
              height="196"
            />
          </div>
          <div className="visual-node node-ai">
            <BrainCircuit size={17} />
            <span>Intelligence</span>
          </div>
          <div className="visual-node node-build">
            <Code2 size={17} />
            <span>Engineering</span>
          </div>
          <div className="visual-node node-flow">
            <Workflow size={17} />
            <span>Automation</span>
          </div>
          <div className="visual-caption">
            <span>IDEAS</span>
            <i /> <span>BUILT INTO IMPACT</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>BUILT FOR WHAT&apos;S NEXT</span>
        <span className="hero-bottom-line" />
        <span>JASPARROW IT SOLUTIONS</span>
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title, accent, copy, center = false }) {
  return (
    <div className={`section-heading ${center ? 'center' : ''}`}>
      <div className="eyebrow">
        <span className="eyebrow-line" />
        {kicker}
      </div>
      <h2>
        {title} <span>{accent}</span>
      </h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-left">
          <SectionHeading kicker="WHO WE ARE" title="Technology should" accent="make progress possible." />
        </div>
        <div className="about-right">
          <p className="about-statement">
            Jasparrow is a technology company focused on building useful, intelligent and scalable digital solutions.
          </p>
          <p className="muted">
            We bring together product thinking, engineering discipline and an understanding of real business challenges.
            Our focus is simple: make technology work harder for the people and organisations that use it.
          </p>
          <a href="#contact" className="inline-link">
            Start a conversation <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="container values-row">
        <div className="value">
          <span>01</span>
          <strong>Purpose-led</strong>
          <small>Technology with a clear reason to exist.</small>
        </div>
        <div className="value">
          <span>02</span>
          <strong>Business-minded</strong>
          <small>Designed around real operational needs.</small>
        </div>
        <div className="value">
          <span>03</span>
          <strong>Built to evolve</strong>
          <small>Scalable foundations for what&apos;s next.</small>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="section capabilities-section" id="capabilities">
      <div className="container">
        <SectionHeading
          kicker="WHAT WE DO"
          title="Ideas into"
          accent="working solutions."
          copy="A focused set of capabilities to help organisations build, improve and operate with confidence."
        />
        <div className="cap-grid">
          {capabilities.map(({ icon: Icon, number, title, copy, tags }) => (
            <article className="cap-card" key={number}>
              <div className="cap-top">
                <span className="cap-icon">
                  <Icon size={21} />
                </span>
                <span className="cap-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div className="tag-list">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="cap-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="products-intro">
          <SectionHeading
            kicker="OUR PRODUCTS"
            title="Built by us."
            accent="Made for business."
            copy="We develop focused digital products that solve specific problems—and keep evolving them with the people who use them."
          />
          <div className="products-side-note">
            <Layers3 size={18} />
            <span>Our products have their own identity, backed by Jasparrow&apos;s engineering vision.</span>
          </div>
        </div>
        <div className="product-grid">
          {products.map((p, i) => (
            <article className={`product-card product-${i + 1}`} key={p.name}>
              <div className="product-card-top">
                <span className="product-status">
                  <i />
                  {p.status}
                </span>
                <span className="product-mark">{p.mark}</span>
              </div>
              <div className="product-brand">
                {p.name}
                <span>.</span>
              </div>
              <div className="product-label">{p.label}</div>
              <p>{p.copy}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={15} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                className="product-link"
                href={p.url}
                target={p.url.startsWith('http') ? '_blank' : undefined}
                rel={p.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {p.action}
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach-section">
      <div className="container approach-grid">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> HOW WE THINK
          </div>
          <h2>
            Good technology is not just built.
            <br />
            <span>It earns its place.</span>
          </h2>
        </div>
        <div className="approach-copy">
          <p>
            We start with the problem, understand the people and processes around it, then build for measurable
            usefulness—not technology for technology&apos;s sake.
          </p>
          <div className="approach-points">
            <span>
              <ShieldCheck size={17} /> Thoughtful by design
            </span>
            <span>
              <Sparkles size={17} /> Intelligent where it matters
            </span>
            <span>
              <MoveUpRight size={17} /> Ready to grow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" /> GET IN TOUCH
          </div>
          <h2>
            Have a challenge?
            <br />
            <span>Let&apos;s build what&apos;s next.</span>
          </h2>
          <p>Tell us what you&apos;re working on. We&apos;d be glad to explore how technology can help.</p>
          <div className="contact-details">
            <div className="contact-email-row">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail size={17} /> {CONTACT_EMAIL}
              </a>
              <button
                type="button"
                className="copy-email-btn"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email address"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <span>
              <Globe2 size={17} /> jasparrowit.com
            </span>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-heading">
            Start a conversation <span>We usually respond within 1–2 business days.</span>
          </div>
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Full name"
                autoComplete="name"
                required
              />
            </label>
            <label>
              Work email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label>
            Company <span className="optional">(optional)</span>
            <input
              name="company"
              value={form.company}
              onChange={update}
              placeholder="Your organisation"
              autoComplete="organization"
            />
          </label>
          <label>
            How can we help?
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Tell us a little about your goals or challenge..."
              rows="4"
              required
            />
          </label>
          <button className="button button-primary submit-button" type="submit">
            Send enquiry <ArrowUpRight size={17} />
          </button>
          {sent && (
            <small className="form-note form-note-highlight" role="status">
              Your email app should open with the enquiry details. If it doesn&apos;t, write directly to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </small>
          )}
          <small className="form-note">
            This form opens your email application; it does not store your information on this website.
          </small>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <Brand />
          <p>Building technology. Enabling growth.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="back-top" href="#home">
          Back to top <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Jasparrow IT Solutions. All rights reserved.</span>
        <span>Built with purpose.</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Products />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
