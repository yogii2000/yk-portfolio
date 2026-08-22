import { useEffect, useState } from 'react'
import { FaArrowRight, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiArrowUpRight, HiBars3, HiOutlineEnvelope, HiXMark } from 'react-icons/hi2'
import lookplex from './assets/lookplex.jpg'
import smartcare from './assets/smartcare.jpg'
import wooAdventure from './assets/wooAdventure.jpg'

const projects = [
  { number:'01', name:'Lookplex', type:'E-commerce experience', description:'A polished, responsive storefront designed to keep product discovery clear and the shopping journey effortless.', image:lookplex, href:'https://lookplex.com', tags:['React','Responsive UI','E-commerce'] },
  { number:'02', name:'SmartCare', type:'Healthcare platform', description:'A thoughtful healthcare interface that turns complex information into an approachable, easy-to-navigate experience.', image:smartcare, href:'https://smartcare.health', tags:['Frontend','UX','Web app'] },
  { number:'03', name:'Woo Adventures', type:'Travel & experiences', description:'An energetic booking experience that helps travellers discover activities through strong visuals and intuitive flows.', image:wooAdventure, href:'https://wooadventures.com', tags:['React','UI development','Performance'] },
]
const skills = [
  { title:'Core', items:['JavaScript','HTML5','CSS3','TypeScript'] },
  { title:'Frameworks', items:['React.js','Next.js','Tailwind CSS'] },
  { title:'State & tools', items:['Redux','Git','REST APIs','Responsive Design'] },
]
const navItems = ['About','Work','Expertise','Contact']

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),{ threshold:.12 })
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  },[])
  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#top" aria-label="Yogesh Kumar, home">YK<span>.</span></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        <a className="nav-resume" href="/Yogesh_kumar_Resume.pdf" target="_blank" rel="noreferrer">Résumé <HiArrowUpRight /></a>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <HiXMark/> : <HiBars3/>}</button>
    </header>
    <main>
      <section className="hero" id="top">
        <div className="hero-glow"/><div className="eyebrow hero-eyebrow"><span/> Available for thoughtful frontend work</div>
        <h1><span>I build digital</span><br/>experiences that <em>feel right.</em></h1>
        <div className="hero-bottom"><p>Frontend developer creating fast, accessible and memorable web experiences with React and Next.js.</p><a className="circle-link" href="#work" aria-label="View selected work"><FaArrowRight/></a></div>
        <div className="hero-meta"><span>Based in Delhi, India</span><span className="scroll-hint">Scroll to explore <i/></span></div>
      </section>
      <section className="about section-pad" id="about">
        <div className="section-label reveal"><span>01</span> About me</div>
        <div className="about-grid"><h2 className="reveal">Clear thinking.<br/><em>Careful craft.</em></h2><div className="about-copy reveal"><p className="lead">Hi, I’m Yogesh—a frontend developer who enjoys turning complex problems into simple, human interfaces.</p><p>With 4 years of experience and a Master’s in Computer Applications from JIMS Delhi, I bring together clean code, responsive design and a sharp eye for detail. I care about the small interactions that make a product feel considered.</p><a className="text-link" href="/YOGESH-KUMAR.pdf" target="_blank" rel="noreferrer">Read my résumé <HiArrowUpRight/></a></div></div>
        <div className="stats reveal"><div><strong>4</strong><span>Years building<br/>for the web</span></div><div><strong>03</strong><span>Featured<br/>projects</span></div><div><strong>∞</strong><span>Curiosity for<br/>better solutions</span></div></div>
      </section>
      <section className="work section-pad" id="work">
        <div className="section-heading reveal"><div className="section-label"><span>02</span> Selected work</div><h2>A few things<br/>I’ve <em>brought to life.</em></h2></div>
        <div className="project-list">{projects.map(project => <article className="project reveal" key={project.name}>
          <a className="project-image" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}><img src={project.image} alt={`${project.name} website preview`}/><span><HiArrowUpRight/></span></a>
          <div className="project-info"><span className="project-number">{project.number}</span><div><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></div>
        </article>)}</div>
      </section>
      <section className="expertise section-pad" id="expertise">
        <div className="section-label reveal"><span>03</span> Expertise</div><div className="expertise-grid"><h2 className="reveal">The tools behind<br/><em>the work.</em></h2><p className="reveal">A focused toolkit for building modern interfaces—from first component to final polish.</p></div>
        <div className="skill-groups reveal">{skills.map((group,index) => <div className="skill-group" key={group.title}><span>0{index+1}</span><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
      </section>
      <section className="contact section-pad" id="contact">
        <div className="section-label reveal"><span>04</span> Get in touch</div><div className="contact-content reveal"><p>Have a project in mind?</p><h2>Let’s make something<br/><em>worth remembering.</em></h2><a href="mailto:yogeshsharma9057@gmail.com">yogeshsharma9057@gmail.com <HiArrowUpRight/></a></div>
        <footer><span>© {new Date().getFullYear()} Yogesh Kumar</span><div><a href="https://linkedin.com/in/yogesh9057" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn/></a><a href="https://github.com/yogesh-9057" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a><a href="mailto:yogeshsharma9057@gmail.com" aria-label="Email"><HiOutlineEnvelope/></a></div></footer>
      </section>
    </main>
  </div>
}
export default App
