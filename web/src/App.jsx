import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, Clock, FileText, CheckCircle, Play, Menu, X, ClipboardList, Search, Map, ThumbsUp } from 'lucide-react';
import heroImage from './assets/hero_person.png';

const useScrollReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);
  return ref;
};

const RevealSection = ({ children, className = '' }) => {
  const ref = useScrollReveal();
  return <div ref={ref} className={`animate-up ${className}`}>{children}</div>;
};

const BeamsBackground = () => (
  <div className="beams-bg" aria-hidden="true">
    <div className="beam beam-1" />
    <div className="beam beam-2" />
    <div className="beam beam-3" />
    <div className="beam beam-4" />
  </div>
);

const logos = [
  {
    name: 'Microsoft',
    color: '#00A4EF',
    svg: (
      <svg viewBox="0 0 100 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
        <rect x="0" y="0" width="10" height="10" fill="currentColor" opacity="0.9"/>
        <rect x="11" y="0" width="10" height="10" fill="currentColor" opacity="0.7"/>
        <rect x="0" y="11" width="10" height="10" fill="currentColor" opacity="0.7"/>
        <rect x="11" y="11" width="10" height="10" fill="currentColor" opacity="0.9"/>
        <text x="26" y="15" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="300" fontSize="13" letterSpacing="0.5">Microsoft</text>
      </svg>
    ),
  },
  {
    name: 'Raytheon',
    color: '#003087',
    svg: (
      <svg viewBox="0 0 110 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
        <polygon points="11,1 21,11 11,21 1,11" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="11" cy="11" r="3" fill="currentColor"/>
        <text x="28" y="15" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5">RAYTHEON</text>
      </svg>
    ),
  },
  {
    name: 'New York Life',
    color: '#006747',
    svg: (
      <svg viewBox="0 0 130 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
        <path d="M1 20 L1 2 L7 2 L7 11 L13 2 L19 2 L19 20 L13 20 L13 11 L7 20 Z" fill="currentColor"/>
        <text x="25" y="15" fontFamily="Georgia, serif" fontWeight="700" fontSize="12" letterSpacing="0.5">NEW YORK LIFE</text>
      </svg>
    ),
  },
  {
    name: 'NASA',
    color: '#FC3D21',
    svg: (
      <svg viewBox="0 0 80 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
        <ellipse cx="11" cy="11" rx="10" ry="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="11" cy="11" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-30 11 11)"/>
        <circle cx="11" cy="11" r="3" fill="currentColor"/>
        <text x="27" y="15" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" letterSpacing="2">NASA</text>
      </svg>
    ),
  },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo-img-link">
            <img src="/hurleywrite-logo.webp" alt="Hurley Write" className="navbar-logo" />
          </a>
          <div className="nav-wrapper">
            <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Resources</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              {isMobileMenuOpen && (
                <button className="btn btn-primary mobile-cta" style={{marginTop: '1.5rem', width: '100%'}}>
                  Schedule Call <ArrowRight size={18} className="btn-icon" />
                </button>
              )}
            </div>
            <button className="btn btn-primary desktop-cta">Schedule Call <ArrowRight size={18} className="btn-icon" /></button>
            <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <X size={28} color="var(--white)" /> : <Menu size={28} color="var(--white)" />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO — mesh gradient + beams */}
      <section className="hero">
        <BeamsBackground />
        <div className="container hero-content">
          <div className="hero-text animate-up visible">
            <span className="hero-label">For Technical Teams</span>
            <h1>Technical Teams That Have to Write<br />(But Would Rather Not)</h1>
            <p className="lead">Get a communication audit and actionable roadmap in 4 weeks. Fix your team's writing system. Forever.</p>
            <div className="hero-actions">
              <button className="btn btn-primary">Schedule Free Audit <ArrowRight size={20} className="btn-icon" /></button>
              <button className="btn btn-secondary">Download PROS Overview</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src={heroImage} alt="Professional at laptop" />
            </div>
            <div className="floating-badge">
              <div className="stars">
                {[1,2,3,4,5].map(i => <Star key={i} fill="#FFB800" size={16} />)}
              </div>
              <div className="rating-text">628+ Reviews</div>
              <div className="rating-desc">4.85★ Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO CLOUD — replaces generic reviews section */}
      <section className="logo-cloud-section">
        <div className="container">
          <RevealSection>
            <p className="logo-cloud-label">Trusted by teams at</p>
            <div className="logo-cloud-grid">
              {logos.map(({ name, color, svg }) => (
                <div key={name} className="logo-cloud-item" style={{'--brand-color': color}}>
                  {svg}
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* PROS ROADMAP */}
      <section className="section roadmap-section">
        <BeamsBackground />
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="section-header">
            <h2>The PROS Communication Roadmap</h2>
            <p className="lead">Not just training. A diagnostic + actionable roadmap for your team's communication system.</p>
          </div>
          <div className="roadmap-grid">
            {[
              { step: 1, title: 'Survey', desc: 'Interview writers and reviewers to understand challenges and uncover hidden friction in your communication workflow.', icon: <ClipboardList size={28} strokeWidth={1.5} /> },
              { step: 2, title: 'Evaluate', desc: 'Analyze documents, tools, and processes in place to identify exactly where your system is breaking down.', icon: <Search size={28} strokeWidth={1.5} /> },
              { step: 3, title: 'Prepare Roadmap', desc: 'Create detailed findings and recommendations — a concrete, prioritized plan built for your specific team.', icon: <Map size={28} strokeWidth={1.5} /> },
              { step: 4, title: 'Review & Implement', desc: 'Present the roadmap and discuss the path forward with stakeholders. Leave with a clear action plan.', icon: <ThumbsUp size={28} strokeWidth={1.5} /> },
            ].map(item => (
              <RevealSection key={item.step} className="roadmap-card">
                <div className="card-num">{item.step}</div>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="roadmap-what-you-get">
            <h3>What You Get</h3>
            <div className="what-you-get-grid">
              <ul className="what-you-get-list">
                <li><CheckCircle size={20} color="var(--primary-orange)" /> Actionable steps tailored to your organization</li>
                <li><CheckCircle size={20} color="var(--primary-orange)" /> In-depth findings on communication breakdowns</li>
                <li><CheckCircle size={20} color="var(--primary-orange)" /> Recommendations for long-term solutions</li>
              </ul>
              <ul className="what-you-get-list">
                <li><CheckCircle size={20} color="var(--primary-orange)" /> A clear path forward with specific examples</li>
                <li><CheckCircle size={20} color="var(--primary-orange)" /> Guidance on improving writing/review tools</li>
                <li><CheckCircle size={20} color="var(--primary-orange)" /> 4-week timeline with dedicated support</li>
              </ul>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="section narrative-section">
        <BeamsBackground />
        <div className="container narrative-content" style={{position: 'relative', zIndex: 2}}>
          <RevealSection className="narrative-text-side">
            <h2>You Didn't Hire Your Team to be Copyeditors</h2>
            <p className="lead" style={{marginBottom: '2.5rem'}}>Professional writing training doesn't work because the system's broken. When your technical experts spend hours drafting and managers spend hours fixing, you're losing money and morale.</p>
            <div className="pain-points-box">
              <ul className="pain-points-list">
                <li>Every week of review delays costs thousands.</li>
                <li>Feedback like "make this clearer" wastes everyone's time.</li>
                <li>Professional writing training doesn't work because the system's broken.</li>
              </ul>
            </div>
            <button className="btn btn-primary" style={{marginTop: '2.5rem'}}>Request Your Diagnostic Assessment <ArrowRight size={18} className="btn-icon" /></button>
          </RevealSection>
          <RevealSection className="narrative-visual-side">
            <div className="pain-points-image-wrapper">
              <img src={heroImage} alt="Frustrated team member at laptop" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section video-section">
        <div className="container">
          <RevealSection>
            <h2 style={{marginBottom: '3rem'}}>See How It Works</h2>
            <div className="video-wrapper">
              <img src={heroImage} alt="Video thumbnail placeholder" />
              <div className="play-button"><Play fill="white" size={32} /></div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Partners Say</h2>
          </div>
          <div className="testimonials-grid">
            {[
              { quote: '"The PROS Communication Audit helped us identify exactly where our team was struggling. We implemented the roadmap and saw immediate improvements in document quality and review speed. It cut our review cycles from 4 weeks to 10 days."', author: 'Sarah Jenkins', title: 'VP of Engineering, DataCorp' },
              { quote: '"All the minimalism strategies can be directly applied to our technical documentation. This wasn\'t generic training—it was specific to our needs and immediately actionable."', author: 'David Chen', title: 'Lead Data Scientist, ScaleAI' },
              { quote: '"We tried other solutions before Hurley Write. The difference is they diagnosed the real problem, not just the symptoms. The roadmap gave us a clear, undeniable path forward."', author: 'Marcus Thorne', title: 'Engineering Manager, TechFlow' },
            ].map((t, i) => (
              <RevealSection key={i} className="testimonial-card">
                <div className="test-stars">
                  {[1,2,3,4,5].map(s => <Star key={s} fill="#FFB800" size={16} />)}
                </div>
                <p className="test-quote">{t.quote}</p>
                <div>
                  <div className="test-author">{t.author}</div>
                  <div className="test-title">{t.title}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section results-section">
        <BeamsBackground />
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="section-header">
            <h2>What Happens When You Fix the System</h2>
          </div>
          <div className="results-grid">
            <RevealSection className="result-card">
              <div className="result-num">10 Days</div>
              <div className="result-desc">Review cycles reduced 4 weeks &rarr; 10 days</div>
            </RevealSection>
            <RevealSection className="result-card">
              <div className="result-num">6 Hrs</div>
              <div className="result-desc">Manager editing time cut 15 hrs &rarr; 6 hrs/week</div>
            </RevealSection>
            <RevealSection className="result-card">
              <div className="result-num">61%</div>
              <div className="result-desc">First-draft approval rate up 22% &rarr; 61%</div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <BeamsBackground />
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <RevealSection>
            <h2>Ready to Fix Your Team's Communication?</h2>
            <p className="lead" style={{marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto', color: 'rgba(255,255,255,0.85)'}}>
              Schedule a free consultation to discuss your communication challenges and see if the PROS Roadmap is right for your team.
            </p>
            <button className="btn btn-primary btn-large">
              Schedule Your Free Consultation <ArrowRight size={24} className="btn-icon" />
            </button>
          </RevealSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/hurleywrite-logo.webp" alt="Hurley Write" className="footer-logo" />
              <p className="footer-col-desc">Positioning technical teams for success through diagnostic consulting and better communication systems.</p>
            </div>
            <div>
              <h4>Solutions</h4>
              <ul className="footer-links">
                <li><a href="#">PROS Roadmap</a></li>
                <li><a href="#">Training Courses</a></li>
                <li><a href="#">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul className="footer-links">
                <li><a href="#">(877) 249-7483</a></li>
                <li><a href="#">info@hurleywrite.com</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Hurley Write, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
