/**
 * Archive in Motion — black-and-white Swiss editorial portfolio.
 * Design rules: asymmetric archival spreads, monumental serif display type,
 * precise mono metadata, disciplined motion, and source-site images only.
 */
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  X,
} from "lucide-react";

const navItems = [
  ["01", "About", "about"],
  ["02", "Skills", "skills"],
  ["03", "Experience", "experience"],
  ["04", "Work", "work"],
  ["05", "Music", "music"],
  ["06", "Pricing", "pricing"],
];

const skills = [
  ["Song writing", 95],
  ["AI tools", 88],
  ["Poster design", 87],
  ["Project management", 86],
  ["Web design", 83],
  ["Teamwork", 81],
];

const songProjects = [
  {
    title: "Qareebiyan",
    category: "Romance / 01",
    description: "A modern take on love — emotional, relatable, and soulful.",
    image: "/manus-storage/Qareebiyaan_4cc25132.png",
    url: "https://www.youtube.com/results?search_query=Qareebiyan+Mr.+Lyricist",
  },
  {
    title: "She / Her",
    category: "Love / 02",
    description: "When she is your all — a heartfelt tribute to love and devotion.",
    image: "/manus-storage/she_c8060585.png",
    url: "https://www.youtube.com/results?search_query=She+Her+Mr.+Lyricist",
  },
  {
    title: "Nishaan",
    category: "Concept / 03",
    description: "The age of darkness unfolds — a powerful, atmospheric composition.",
    image: "/manus-storage/nishaan_e423bef8.png",
    url: "https://www.youtube.com/results?search_query=Nishaan+Mr.+Lyricist",
  },
  {
    title: "DharamYuddha",
    category: "Concept / 04",
    description: "A warrior's song and a powerful historical memory.",
    image: "/manus-storage/dharamyuddha_44ec84d5.png",
    url: "https://www.youtube.com/results?search_query=DharamYuddha+Mr.+Lyricist",
  },
  {
    title: "Last Sunrise",
    category: "Phonk / 05",
    description: "Indian-style phonk shaped by the tension of Mahabharata.",
    url: "https://www.youtube.com/results?search_query=Last+Sunrise+Mr.+Lyricist",
  },
  {
    title: "Montagem Tambor",
    category: "Phonk / 06",
    description: "Brazilian phonk for the late-night archive.",
    url: "https://www.youtube.com/results?search_query=Montagem+tambor+Mr.+Lyricist",
  },
];

const webProjects = [
  {
    title: "LyroWeb Solution",
    label: "Agency / 01",
    image: "/manus-storage/solution_c47663a0.png",
    url: "https://lyroweb.durablesites.com/",
    description: "Digital services agency delivering web design, app development, and branded digital content for local businesses.",
  },
  {
    title: "LyroWeb Student Portal",
    label: "Full stack / 02",
    image: "/manus-storage/lyroweb_ad84d673.png",
    url: "https://lyroweb-solution.vercel.app/",
    description: "A full-stack internship portal for automated task delivery, submission tracking, onboarding, and admin controls.",
  },
  {
    title: "Sohima Production",
    label: "Studio / 03",
    image: "/manus-storage/sohima_064fe989.png",
    url: "https://sohima-production.vercel.app/",
    description: "A cinematic content studio for original books, audiobooks, animated adaptations, and production workflows.",
  },
  {
    title: "Mr. Lyricist Distribution",
    label: "Platform / 04",
    image: "/manus-storage/label_a4cfc7eb.png",
    url: "https://mr-lyricist-distributor.vercel.app/",
    description: "Artist-facing music distribution portal with releases, status tracking, rights support, and artist relations.",
  },
  {
    title: "ComVerse",
    label: "CRM / 05",
    image: "/manus-storage/comverse_8076d189.png",
    url: "https://comverse.its-sourav5198.workers.dev/",
    description: "All-in-one HRMS and workforce management for attendance, payroll, documents, banking and virtual IDs.",
  },
  {
    title: "Kaksha",
    label: "CRM / 06",
    image: "/manus-storage/kaksha_ba368539.png",
    url: "https://edverse-delta.vercel.app/",
    description: "School and college management for attendance, fees, notices, assignments, and digital IDs.",
  },
];

const founderBrands = [
  {
    name: "LyroWeb Solution",
    image: "/manus-storage/logo-1_4c39ede9.png",
    description: "A digital services and web design agency building websites, portals, and digital products.",
  },
  {
    name: "Sohima Production",
    image: "/manus-storage/logo-2_48e816fa.png",
    description: "A cinematic content studio producing books, audiobooks, and animated experiences.",
  },
  {
    name: "Mr. Lyricist Label",
    image: "/manus-storage/logo-3_92b5975d.png",
    description: "A music label and distribution platform operating in partnership with Divine Epic.",
  },
];

const pricing = [
  {
    tier: "Basic",
    name: "Basic Package",
    price: "₹7,000",
    description: "A clear, high-performing web presence for individuals and small businesses.",
    features: ["Custom HTML/CSS design", "Mobile responsive", "Contact section", "2 revisions"],
  },
  {
    tier: "Standard",
    name: "Standard Package",
    price: "₹12,000",
    description: "A multi-page experience with room for a business to grow.",
    features: ["Multi-page website", "Custom UI/UX design", "SEO basics", "Unlimited revisions", "1 month support"],
    featured: true,
  },
  {
    tier: "Premium",
    name: "Premium Package",
    price: "₹30,000",
    description: "Custom-built digital foundations with advanced integrations and support.",
    features: ["Full custom development", "Advanced UI animations", "CMS / dynamic features", "Priority support", "3 months maintenance"],
  },
  {
    tier: "Creative",
    name: "Songwriting",
    price: "₹5,000",
    description: "Original lyrics, melody and full compositions shaped around your sound.",
    features: ["Custom lyrics & melody", "Any genre / instrument", "Royalty guidance", "3 revisions"],
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.18 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.68, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ index, eyebrow, title, italic }: { index: string; eyebrow: string; title: string; italic: string }) {
  return (
    <div className="section-heading">
      <div className="section-count">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title} <em>{italic}</em></h2>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(([, , id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-38% 0px -53% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Sourav Maity, top of page">
          <span className="monogram">SM</span>
          <span>Sourav Maity</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([number, label, id]) => (
            <a className={active === id ? "nav-link active" : "nav-link"} href={`#${id}`} key={id}>
              <span>{number}</span>{label}
            </a>
          ))}
        </nav>
        <a className="topbar-contact" href="#contact">Let&apos;s work <ArrowDownRight size={16} /></a>
        <button className="menu-toggle" type="button" aria-label="Toggle site navigation" onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`} aria-hidden={!menuOpen}>
        {navItems.map(([number, label, id]) => <a href={`#${id}`} onClick={closeMenu} key={id}><span>{number}</span>{label}<ArrowDownRight size={18} /></a>)}
        <a href="#contact" onClick={closeMenu}>Get in touch <ArrowDownRight size={18} /></a>
      </div>

      <section id="top" className="hero">
        <div className="hero-grain" />
        <div className="hero-rail hero-rail-left">INDEPENDENT CREATIVE — GURGAON, INDIA</div>
        <div className="hero-rail hero-rail-right">DIGITAL / MUSIC / DESIGN</div>
        <div className="hero-copy">
          <motion.p className="availability" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
            <span /> Available for independent work
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}>
            Sourav<br /><em>Maity</em>
          </motion.h1>
          <motion.p className="hero-statement" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.38 }}>
            Blending code, creativity and music into digital work with a pulse.
          </motion.p>
          <motion.div className="role-list" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            {['AI creator', 'Web designer', 'Songwriter', 'Digital artist', 'Poster designer'].map((role) => <span key={role}>{role}</span>)}
          </motion.div>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.62 }}>
            <a className="button button-inverted" href="#work">Browse archive <ArrowDownRight size={17} /></a>
            <a className="text-action" href="#contact">Start a project <ArrowDownRight size={17} /></a>
          </motion.div>
        </div>
        <motion.div className="hero-image-wrap" initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }} transition={{ duration: 1.05, delay: 0.18, ease: [0.77, 0, 0.175, 1] }}>
          <img src="/manus-storage/me_8412c43d.png" alt="Sourav Maity" className="hero-image" />
          <div className="hero-image-index">PORTRAIT / 2026</div>
          <div className="hero-image-stamp">SM</div>
        </motion.div>
        <motion.a className="scroll-cue" href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <span>Scroll to enter</span><ArrowDownRight size={18} />
        </motion.a>
      </section>

      <section id="about" className="content-section about-section">
        <Reveal><SectionTitle index="01" eyebrow="Profile" title="Creative at heart," italic="technical by craft." /></Reveal>
        <div className="about-layout">
          <Reveal className="about-copy" delay={0.08}>
            <p>I&apos;m a dynamic lyricist and web developer with a passion for creating captivating experiences — whether through a beautifully crafted website or an emotionally resonant song.</p>
            <p>With expertise in music theory, emotional storytelling and visual design, I bridge the gap between technology and artistry. I work with artists, labels and businesses to bring creative visions to life.</p>
            <p>Currently pursuing a Bachelor of Interior Design at Gautam Buddha University, I&apos;m continuously expanding my practice across AI tools, web development and musical composition.</p>
          </Reveal>
          <Reveal className="archive-note" delay={0.16}>
            <span className="eyebrow">Creator&apos;s note</span>
            <p>“A website should move like a song — with rhythm, a point of view, and no wasted space.”</p>
            <div>— SOURAV MAITY</div>
          </Reveal>
        </div>
        <div className="stat-strip">
          {[["5+", "Songs released"], ["40%", "Avg. engagement boost"], ["30%", "Web traffic increase"], ["2+", "Years freelancing"]].map(([value, label], index) => (
            <Reveal className="stat" delay={index * 0.07} key={label}><strong>{value}</strong><span>{label}</span></Reveal>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section skills-section">
        <Reveal><SectionTitle index="02" eyebrow="Capabilities" title="Signals of" italic="craft." /></Reveal>
        <div className="skills-layout">
          <Reveal className="skills-intro" delay={0.1}><p>A multidisciplinary practice built from musical instinct, visual composition and digital problem solving.</p></Reveal>
          <div className="skills-list">
            {skills.map(([name, amount], index) => <SkillRow key={name as string} name={name as string} amount={amount as number} delay={index * 0.06} />)}
          </div>
        </div>
      </section>

      <section className="content-section education-section">
        <Reveal><SectionTitle index="03" eyebrow="Background" title="Education &" italic="training." /></Reveal>
        <div className="education-list">
          {[
            ["2025 — present", "Bachelor of Interior Design", "Gautam Buddha University", "Greater Noida, UP"],
            ["Jul — Oct 2025", "DCA (Diploma in Computer Applications)", "SDK ITS Solution Pvt Ltd.", "Gurgaon, HR"],
            ["November 2025", "AI Tools Workshop", "Be10x", "Online"],
          ].map(([date, title, institution, place], index) => <Reveal className="education-row" delay={index * 0.08} key={title}><span>{date}</span><h3>{title}</h3><p>{institution}<br />{place}</p><ArrowUpRight size={18} /></Reveal>)}
        </div>
      </section>

      <section id="experience" className="content-section experience-section">
        <Reveal><SectionTitle index="04" eyebrow="Timeline" title="The work" italic="continues." /></Reveal>
        <div className="timeline">
          <Reveal className="timeline-item" delay={0.08}>
            <div className="timeline-date">SEP 2024 — PRESENT</div>
            <div><h3>Song Writer</h3><p className="timeline-company">Freelancer · Mr. Lyricist</p></div>
            <ul><li>Crafted lyrics and composed musical pieces through melody, harmony and rhythm.</li><li>Negotiated royalty contracts for fair creative compensation.</li><li>Built a diverse online composition portfolio to attract collaborators and clients.</li></ul>
          </Reveal>
          <Reveal className="timeline-item" delay={0.16}>
            <div className="timeline-date">JUL 2025 — PRESENT</div>
            <div><h3>Poster & Website Designer</h3><p className="timeline-company">Freelancer · LyroWeb</p></div>
            <ul><li>Created web experiences that improved engagement by 20%.</li><li>Led redesigns that increased web traffic by 30%.</li><li>Produced custom 3D and polished poster artwork for clients.</li></ul>
          </Reveal>
        </div>
      </section>

      <section id="work" className="content-section projects-section">
        <Reveal><SectionTitle index="05" eyebrow="Selected digital work" title="Built for" italic="momentum." /></Reveal>
        <div className="projects-grid">
          {webProjects.map((project, index) => <Reveal className="project-card" delay={(index % 3) * 0.06} key={project.title}>
            <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
              <div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><span>{project.label}</span></div>
              <div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><span className="project-visit">Visit project <ArrowUpRight size={16} /></span></div>
            </a>
          </Reveal>)}
        </div>
      </section>

      <section id="music" className="content-section music-section">
        <Reveal><SectionTitle index="06" eyebrow="Discography" title="Songs with a" italic="story." /></Reveal>
        <div className="music-grid">
          {songProjects.map((song, index) => <Reveal className={`song-card ${song.image ? "has-image" : ""}`} delay={(index % 3) * 0.06} key={song.title}>
            <a href={song.url} target="_blank" rel="noreferrer">
              {song.image ? <div className="song-art"><img src={song.image} alt={`${song.title} cover artwork`} /></div> : <div className="song-art song-art-type"><span>{String(index + 1).padStart(2, "0")}</span><i>ML</i></div>}
              <div className="song-content"><span>{song.category}</span><h3>{song.title}</h3><p>{song.description}</p><div className="listen-link"><Play size={13} fill="currentColor" /> Search on YouTube</div></div>
            </a>
          </Reveal>)}
        </div>
      </section>

      <section className="content-section founder-section">
        <Reveal><SectionTitle index="07" eyebrow="Independent ventures" title="Founded to" italic="make more." /></Reveal>
        <div className="founder-list">
          {founderBrands.map((brand, index) => <Reveal className="founder-item" delay={index * 0.08} key={brand.name}>
            <div className="brand-logo"><img src={brand.image} alt={`${brand.name} logo`} /></div>
            <h3>{brand.name}</h3><p>{brand.description}</p><span>{String(index + 1).padStart(2, "0")}</span>
          </Reveal>)}
        </div>
      </section>

      <section id="pricing" className="content-section pricing-section">
        <Reveal><SectionTitle index="08" eyebrow="Work with me" title="Clear scope," italic="real value." /></Reveal>
        <div className="pricing-grid">
          {pricing.map((plan, index) => <Reveal className={`price-card ${plan.featured ? "featured" : ""}`} delay={(index % 2) * 0.08} key={plan.name}>
            {plan.featured && <div className="recommended">Recommended</div>}
            <span className="price-tier">{plan.tier}</span><h3>{plan.name}</h3><strong>{plan.price}<small> / {plan.tier === "Creative" ? "song" : "project"}</small></strong><p>{plan.description}</p>
            <ul>{plan.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
            <a className="text-action" href="#contact">Discuss this scope <ArrowDownRight size={17} /></a>
          </Reveal>)}
        </div>
        <Reveal className="domain-note" delay={0.12}><span>Website running charge</span><strong>.com service — ₹3,001 / year</strong><p>Includes annual domain registration and renewal.</p></Reveal>
      </section>

      <section id="contact" className="contact-section">
        <Reveal><p className="eyebrow">Contact / 09</p><h2>Have a brief?<br /><em>Let&apos;s make it move.</em></h2></Reveal>
        <Reveal className="contact-layout" delay={0.12}>
          <p className="contact-prompt">Whether it&apos;s a digital product, a new visual identity or a song with something to say, the next piece can start with a conversation.</p>
          <div className="contact-details">
            <a href="mailto:its.sourav5198@gmail.com"><Mail size={19} /><span><small>Email</small>its.sourav5198@gmail.com</span><ArrowUpRight size={17} /></a>
            <a href="tel:+918595069417"><Phone size={19} /><span><small>Phone</small>+91 8595069417</span><ArrowUpRight size={17} /></a>
            <div><MapPin size={19} /><span><small>Based in</small>Gurgaon, Haryana, IN</span></div>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <a href="#top" className="wordmark"><span className="monogram">SM</span><span>Sourav Maity</span></a>
        <p>© 2026 · Independent Creative Archive</p>
        <a className="footer-link" href="#top">Back to top <ArrowDownRight size={16} /></a>
      </footer>
    </main>
  );
}

function SkillRow({ name, amount, delay }: { name: string; amount: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.55 });
  return <motion.div ref={ref} className="skill-row" initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] }}>
    <div><span>{name}</span><strong>{amount}%</strong></div><div className="skill-track"><motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.9, delay: delay + 0.1, ease: [0.77, 0, 0.175, 1] }} style={{ width: `${amount}%` }} /></div>
  </motion.div>;
}
