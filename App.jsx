import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Copy,
  Github, Globe2, Layers3, Menu, Moon, Sparkles, Sun, X, Zap
} from 'lucide-react'

const projects = [
  {
    id: 'business-brain',
    number: '01',
    name: 'Business Brain',
    type: 'AI PRODUCT CONCEPT',
    description: 'A focused workspace concept for turning scattered business information into clearer next steps.',
    tags: ['Product design', 'AI workflow', 'Dashboard'],
    tone: 'violet',
    mark: 'BB',
    status: 'IN DEVELOPMENT',
    details: 'The idea: make useful business context easier to organize and act on. The product direction focuses on a calm dashboard, clear information hierarchy, and workflows that reduce busywork.',
    outcome: 'Designed around a practical business problem, not AI for AI’s sake.'
  },
  {
    id: 'almost-real-hub',
    number: '02',
    name: 'Almost Real Hub',
    type: 'CREATOR PLATFORM CONCEPT',
    description: 'A portfolio and client-work hub concept for a 2D animator and creative studio.',
    tags: ['Portfolio', 'Creator tools', 'Client workflow'],
    tone: 'coral',
    mark: 'AR',
    status: 'CONCEPT / BUILD',
    details: 'A creator-first platform concept connecting animation work, project enquiries, character organization, and client communication in one coherent experience.',
    outcome: 'A clearer path from discovering creative work to starting a collaboration.'
  },
  {
    id: 'ai-utility-lab',
    number: '03',
    name: 'AI Utility Lab',
    type: 'EXPERIMENTS',
    description: 'Small, practical AI-powered tools explored through rapid prototypes and real use cases.',
    tags: ['Prototyping', 'Automation', 'Web apps'],
    tone: 'mint',
    mark: 'AI',
    status: 'EXPLORING',
    details: 'A collection of focused experiments that test how AI can make one specific task easier, with usability and speed kept in view.',
    outcome: 'Small experiments designed to become useful products.'
  }
]

const capabilities = [
  { icon: Globe2, title: 'Web experiences', copy: 'Responsive, accessible websites with a clear purpose.' },
  { icon: Sparkles, title: 'AI-powered tools', copy: 'Practical prototypes built around real workflows.' },
  { icon: Layers3, title: 'Product thinking', copy: 'Turning rough ideas into structured digital experiences.' },
]

function ProjectArtwork({ project }) {
  return (
    <div className={`project-art ${project.tone}`} aria-label={`${project.name} visual preview`}>
      <div className="art-grid" />
      <div className="art-topline"><span>PROJECT / {project.number}</span><span>NG®</span></div>
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-glow" />
      <div className="art-window">
        <div className="window-chrome"><i /><i /><i /><span>{project.name.toLowerCase().replaceAll(' ', '-')}</span></div>
        <div className="window-content">
          <div className="window-kicker">{project.type}</div>
          <div className="window-mark">{project.mark}</div>
          <div className="window-lines"><b /><b /><b /></div>
          <div className="window-pill">{project.status}</div>
        </div>
      </div>
      <div className="art-index">{project.number} <span>—</span> 03</div>
    </div>
  )
}

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const [copied, setCopied] = useState(false)
  const [showTop, setShowTop] = useState(false)

  const email = 'guptanimish940@gmail.com'
  const github = 'https://github.com/nimishgupta4'
  const linkedin = 'https://www.linkedin.com/in/YOUR_USERNAME/'

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((project) => project.tags.some((tag) => tag === filter))
  }, [filter])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setSelected(null)
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={dark ? 'site theme-dark' : 'site theme-light'}>
      <div className="grain" aria-hidden="true" />
      <header className="nav-shell">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Nimish Gupta home">
          <span className="brand-mark">N<span>.</span></span>
          <span className="brand-name">NIMISH GUPTA<small>AI & WEB DEVELOPER</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#approach" onClick={closeMenu}>Approach <span>02</span></a>
          <a href="#about" onClick={closeMenu}>About <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={13} /></a>
        </nav>
        <div className="nav-actions">
          <button className="icon-button theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={14} /></a>
          <button className="icon-button menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-meta reveal">
            <span className="eyebrow"><i className="status-dot" /> INDEPENDENT DEVELOPER · INDIA</span>
            <span className="meta-right">DESIGNING THE NEXT CLICK <ArrowDownRight size={14} /></span>
          </div>
          <div className="hero-copy">
            <h1 className="hero-title reveal">Ideas deserve<br /><span className="title-muted">better</span> <span className="title-outline">interfaces.</span></h1>
            <div className="hero-bottom reveal">
              <p className="hero-description">I build thoughtful websites and useful AI tools that turn ambitious ideas into clear, considered digital experiences.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={16} /></a>
                <a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="visual-label"><span>FIG. 01</span><span>IDEA → INTERFACE</span></div>
            <div className="visual-stage">
              <div className="stage-ring ring-a" /><div className="stage-ring ring-b" /><div className="stage-ring ring-c" />
              <div className="stage-core"><span className="core-spark"><Sparkles size={27} /></span><span className="core-word">MAKE<br /><em>it matter.</em></span></div>
              <span className="float-label float-one"><Code2 size={13} /> BUILD WITH INTENT</span>
              <span className="float-label float-two"><Zap size={13} /> LESS NOISE. MORE SIGNAL.</span>
              <span className="visual-cross cross-one">+</span><span className="visual-cross cross-two">+</span>
            </div>
            <div className="visual-caption"><span>WEB / AI / PRODUCT</span><span>BUILT WITH CURIOSITY <span className="caption-arrow">↗</span></span></div>
          </div>
          <a className="scroll-cue" href="#work"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap intro-inner reveal">
            <span className="eyebrow">A SIMPLE BELIEF</span>
            <p>Good technology should feel <em>obvious</em> to use — even when it was <span>hard to build.</span></p>
            <span className="intro-symbol">✳</span>
          </div>
        </section>

        <section className="work-section section-wrap section-pad" id="work">
          <div className="section-heading reveal">
            <div><span className="eyebrow">01 / SELECTED WORK</span><h2>Ideas, in <em>progress.</em></h2></div>
            <p>A few concepts and experiments exploring the intersection of useful technology and considered design.</p>
          </div>
          <div className="filter-row reveal" aria-label="Filter projects">
            {['All', 'Product design', 'AI workflow', 'Portfolio', 'Prototyping'].map((item) => (
              <button key={item} className={filter === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setFilter(item)}>{item}</button>
            ))}
            <span className="filter-count">{filteredProjects.length.toString().padStart(2, '0')} PROJECTS</span>
          </div>
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <article className={`project-card reveal ${index % 2 ? 'project-offset' : ''}`} key={project.id}>
                <button className="project-open" onClick={() => setSelected(project)} aria-label={`View details for ${project.name}`}>
                  <ProjectArtwork project={project} />
                  <div className="project-info">
                    <div className="project-heading"><div><span className="project-type">{project.type}</span><h3>{project.name}</h3></div><span className="project-arrow"><ArrowUpRight size={20} /></span></div>
                    <p>{project.description}</p>
                    <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </button>
                <div className="project-foot"><span>CASE STUDY / {project.number}</span><span>{project.status}</span></div>
              </article>
            ))}
          </div>
          <div className="work-note reveal"><Sparkles size={15} /><span>These are concepts and works in progress. Case studies will be expanded as builds mature.</span></div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="section-wrap">
            <div className="section-heading reveal">
              <div><span className="eyebrow">02 / HOW I THINK</span><h2>Thoughtful by<br /><em>default.</em></h2></div>
              <p>Tools change. The principles behind a useful experience shouldn’t.</p>
            </div>
            <div className="capability-grid">
              {capabilities.map(({ icon: Icon, title, copy }, index) => (
                <article className="capability-card reveal" key={title}>
                  <div className="cap-top"><span>0{index + 1}</span><Icon size={20} strokeWidth={1.5} /></div>
                  <h3>{title}</h3><p>{copy}</p><span className="cap-line" />
                </article>
              ))}
            </div>
            <div className="process-row reveal">
              <span className="eyebrow">MY PROCESS</span>
              <div className="process-steps">
                <div><span>01</span><b>Understand</b><small>Find the real problem.</small></div>
                <ArrowRight size={16} />
                <div><span>02</span><b>Shape</b><small>Make the idea tangible.</small></div>
                <ArrowRight size={16} />
                <div><span>03</span><b>Build</b><small>Test, refine, ship.</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section-wrap section-pad" id="about">
          <div className="about-grid">
            <div className="about-heading reveal"><span className="eyebrow">03 / A LITTLE ABOUT ME</span><div className="about-monogram">N<span>G</span><i>®</i></div></div>
            <div className="about-copy reveal">
              <h2>Curious mind.<br /><em>Builder’s hands.</em></h2>
              <p>I’m Nimish — an aspiring AI and web developer interested in turning ideas into useful digital products. I like learning by building, keeping things simple, and making each iteration meaningfully better.</p>
              <p className="about-note"><span className="note-mark">↳</span> Currently learning, prototyping, and documenting the process.</p>
              <div className="skill-list"><span>HTML / CSS / JS</span><span>React fundamentals</span><span>AI-assisted building</span><span>Product thinking</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="section-wrap contact-inner reveal" id="contact">
            <div className="contact-top"><span className="eyebrow"><i className="status-dot" /> OPEN TO LEARNING & COLLABORATION</span><span className="contact-index">LET’S MAKE SOMETHING USEFUL</span></div>
            <h2>Have a good<br /><em>problem?</em></h2>
            <div className="contact-bottom"><p>Have an idea for a website, a small AI tool, or a digital experience? Let’s talk about what would make it genuinely useful.</p><a className="button button-light" href={`mailto:${email}?subject=${encodeURIComponent('Let’s build something useful')}`}>Start a conversation <ArrowUpRight size={16} /></a></div>
            <div className="contact-orbit" aria-hidden="true"><span>NG</span></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">N<span>.</span></span><span className="brand-name">NIMISH GUPTA<small>MADE WITH INTENTION</small></span></a>
        <span className="footer-copy">© {new Date().getFullYear()} NIMISH GUPTA · STILL LEARNING, ALWAYS BUILDING.</span>
        <div className="footer-links">
          <button onClick={copyEmail} aria-label="Copy email address" title="Copy email"><Copy size={15} />{copied ? <Check size={14} /> : null}</button>
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><ArrowUpRight size={16} /></a>
          <a href="#home" aria-label="Back to top"><ArrowUpRight size={16} className="back-top-icon" /></a>
        </div>
      </footer>

      {showTop && <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUpRight size={17} /></button>}

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null) }}>
        <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-close icon-button" onClick={() => setSelected(null)} aria-label="Close project details"><X size={18} /></button>
          <ProjectArtwork project={selected} />
          <span className="eyebrow">PROJECT / {selected.number} · {selected.type}</span>
          <h2 id="modal-title">{selected.name}</h2>
          <p>{selected.details}</p>
          <div className="modal-outcome"><span>THE INTENT</span><p>{selected.outcome}</p></div>
          <div className="tag-row">{selected.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <p className="modal-disclaimer">Project status: {selected.status.toLowerCase()}. Details will be updated as the project develops.</p>
          <a className="button button-primary" href="#contact" onClick={() => setSelected(null)}>Discuss a similar idea <ArrowUpRight size={15} /></a>
        </section>
      </div>}
    </div>
  )
}

export default App
