import { useCallback, useRef, useState } from 'react'
import logo from './assets/logo.png'
import { company, stats, services, projects, marketing } from './data/company'
import { PinIcon, MailIcon, PhoneIcon, GlobeIcon, LinkedInIcon, InstagramIcon, FacebookIcon } from './components/Icons'
import { Carousel } from './components/Carousel'
import { Lightbox } from './components/Lightbox'
import './App.css'

const socialIcons = { LinkedIn: LinkedInIcon, Instagram: InstagramIcon, Facebook: FacebookIcon }

function Socials() {
  return (
    <div className="socials">
      {company.socials.map((s) => {
        const Icon = socialIcons[s.name]
        return (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name} className={`social ${s.name.toLowerCase()}`}>
            <Icon />
          </a>
        )
      })}
    </div>
  )
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#marketing', label: 'Marketing' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="brand">
          <img src={logo} alt="" />
          <span>{company.shortName}</span>
        </a>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <nav className={open ? 'nav open' : 'nav'}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <h1>{company.tagline}</h1>
          <p className="lead">
            We build websites, mobile apps and web portals with React, Angular, Flutter and .NET, then bring them customers through SEO, social media and performance marketing. One team in Madhapur, Hyderabad, from launch to growth.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View our work</a>
            <a className="btn ghost" href="#contact">Get in touch</a>
          </div>
        </div>
        <img className="hero-logo" src={logo} alt={company.name} />
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">About us</p>
          <h2>Who we are</h2>
          <p>{company.summary}</p>
          <div className="vm">
            <div>
              <h3>Vision</h3>
              <p>To become a globally recognized technology company and training institute that empowers people with practical skills and an innovation mindset.</p>
            </div>
            <div>
              <h3>Mission</h3>
              <p>To deliver high-quality software and IT services, and to train skilled professionals through live projects, mentorship and career guidance.</p>
            </div>
          </div>
        </div>
        <aside className="facts-card">
          <p className="facts-title">Company profile</p>
          <dl className="facts">
            <div><dt>Company</dt><dd>{company.name}</dd></div>
            <div><dt>CEO</dt><dd>Vinay Burra</dd></div>
            <div><dt>Headquarters</dt><dd>Madhapur, Hyderabad</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section alt">
      <div className="container">
        <p className="eyebrow">What we do</p>
        <h2>Our services</h2>
        <div className="cards four">
          {services.map((s, i) => (
            <article key={s.title} className="card">
              <span className="num">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="tags">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [viewer, setViewer] = useState(null)
  const close = useCallback(() => setViewer(null), [])
  const rowRef = useRef(null)
  // scroll by one card (card width + gap)
  const scrollRow = (dir) => {
    const row = rowRef.current
    const card = row.querySelector('.project')
    row.scrollBy({ left: dir * (card.offsetWidth + 18), behavior: 'smooth' })
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2>Projects we've built</h2>
          </div>
          <div className="row-arrows">
            <button type="button" onClick={() => scrollRow(-1)} aria-label="Scroll projects left">‹</button>
            <button type="button" onClick={() => scrollRow(1)} aria-label="Scroll projects right">›</button>
          </div>
        </div>
        <div className="projects" ref={rowRef}>
          {projects.map((p) => (
            <article key={p.name} className="project" style={{ '--accent': p.accent }}>
              {p.gallery.length > 0 ? (
                <Carousel
                  images={p.gallery}
                  label={p.name}
                  perView={p.perView}
                  onOpen={(n) => setViewer({ project: p, start: n })}
                />
              ) : (
                <button
                  type="button"
                  className="carousel logo-only"
                  style={{ background: p.logoBg }}
                  onClick={() => setViewer({ project: p, start: 0 })}
                  aria-label={`View ${p.name} details`}
                >
                  <img src={p.logo} alt="" />
                </button>
              )}
              <div className="project-head">
                <div className="logo-badge" style={{ background: p.logoBg }}>
                  <img src={p.logo} alt={`${p.name} logo`} />
                </div>
                <div>
                  <h3>{p.name}</h3>
                  <span className="category">{p.category}</span>
                </div>
              </div>
              <p className="project-desc">{p.description}</p>
              <ul className="tags">
                {Object.values(p.stack).flat().map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="project-foot">
                <button type="button" className="details-btn" onClick={() => setViewer({ project: p, start: 0 })}>
                  View details
                </button>
                {p.url ? (
                  <a className="project-link" href={p.url} target="_blank" rel="noreferrer">Live site ↗</a>
                ) : (
                  <span className="project-link muted">{p.note ?? 'Private client project'}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      {viewer && <Lightbox key={viewer.project.name} project={viewer.project} start={viewer.start} onClose={close} />}
    </section>
  )
}

function Marketing() {
  return (
    <section id="marketing" className="section alt">
      <div className="container">
        <p className="eyebrow">Digital marketing</p>
        <h2>Brands we've grown</h2>
        <p className="section-lead">
          SEO, Meta Ads, social media and content campaigns run by the TechNex marketing team, measured on traffic, leads and return on ad spend.
        </p>
        <ul className="tags mk-services">
          {marketing.services.map((s) => <li key={s}>{s}</li>)}
        </ul>

        <div className="mk-clients">
          {marketing.clients.map((c) => (
            <article key={c.name} className="mk-client">
              <div className="mk-client-head">
                <div className="logo-badge" style={{ background: c.logoBg ?? 'var(--bg)' }}>
                  {c.logo ? <img src={c.logo} alt={`${c.name} logo`} /> : <span className="initials">{c.id}</span>}
                </div>
                <div>
                  <h3>{c.name}</h3>
                  <span className="mk-category">{c.category}</span>
                </div>
              </div>
              <div className="mk-result">
                <span className="mk-label">Key result</span>
                <strong>↑ {c.result}</strong>
                <p>{c.metric}</p>
              </div>
              <div className="mk-client-foot">
                <span className="mk-label">Services</span>
                <ul className="tags">
                  {c.work.map((w) => <li key={w}>{w}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mk-bottom">
          <div className="mk-results">
            <p className="facts-title">Average client results</p>
            {marketing.results.map((r) => (
              <div key={r.label} className="mk-stat">
                <strong>{r.value}</strong>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
          <ol className="mk-process">
            {marketing.process.map((p, i) => (
              <li key={p.title}>
                <span className="num">0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { address } = company
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's build something together</h2>
          <ul className="contact-list">
            <li>
              <i className="contact-icon"><PinIcon /></i>
              <div>
                <span>Address</span>
                <p>{company.name}<br />{address.line1}<br />{address.line2}<br />{address.city}, {address.country}</p>
              </div>
            </li>
            <li>
              <i className="contact-icon"><MailIcon /></i>
              <div>
                <span>Email</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </li>
            {company.phone && (
              <li>
                <i className="contact-icon"><PhoneIcon /></i>
                <div>
                  <span>Phone</span>
                  <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
                </div>
              </li>
            )}
            <li>
              <i className="contact-icon"><GlobeIcon /></i>
              <div>
                <span>Website</span>
                <a href={company.website} target="_blank" rel="noreferrer">technexcloudnetworks.in</a>
              </div>
            </li>
            <li className="follow">
              <span>Follow us</span>
              <Socials />
            </li>
          </ul>
        </div>
        <iframe className="map" title="Technex location" src={company.mapEmbed} loading="lazy" />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <img src={logo} alt="" />
          <span>{company.name}</span>
        </div>
        <Socials />
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved. · CEO: Vinay Burra</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Marketing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
