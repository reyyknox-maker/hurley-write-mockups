import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, Clock, FileText, CheckCircle, Play, Menu, X } from 'lucide-react';
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

// Reusable Components
const RevealSection = ({ children, className = '' }) => {
  const ref = useScrollReveal();
  return <div ref={ref} className={`animate-up ${className}`}>{children}</div>;
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">Hurley<span>Write</span></div>
          
          <div className="nav-wrapper">
            <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Resources</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              {isMobileMenuOpen && (
                <button className="btn btn-primary mobile-cta" style={{marginTop: '1.5rem', width: '100%'}}>
                  Schedule Call <ArrowRight size={18} />
                </button>
              )}
            </div>
            
            <button className="btn btn-primary desktop-cta">Schedule Call <ArrowRight size={18} /></button>
            <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <X size={28} color="var(--white)" /> : <Menu size={28} color="var(--white)" />}
            </button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text animate-up visible">
            <span className="hero-label">For Technical Teams</span>
            <h1>Technical Teams That Have to Write </h1>
            <p className="lead">Get a communication audit and actionable roadmap in 4 weeks. Fix your team's writing system. Forever.</p>
            <div className="hero-actions">
              <button className="btn btn-primary">Schedule Free Audit <ArrowRight size={20} /></button>
              <button className="btn btn-outline">Download PROS Overview</button>
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

      <section className="social-proof">
        <div className="container stats-grid">
          <RevealSection>
            <div className="stat-num">631+</div>
            <div className="stat-desc">Five-Star Reviews</div>
          </RevealSection>
          <RevealSection>
            <div className="stat-num">4.85★</div>
            <div className="stat-desc">Client Rating</div>
          </RevealSection>
          <RevealSection>
            <div className="stat-num">50+</div>
            <div className="stat-desc">Enterprise Clients</div>
          </RevealSection>
        </div>
      </section>

      <section className="section roadmap-section">
        <div className="container">
          <div className="section-header">
            <h2>The PROS Communication Roadmap</h2>
            <p className="lead">Not just training. A diagnostic + actionable roadmap for your team's communication system.</p>
          </div>
          <div className="roadmap-grid">
            {[ 
              { step: 1, title: 'Survey', desc: 'Interview writers and reviewers to understand challenges.', class: 'step-1' },
              { step: 2, title: 'Evaluate', desc: 'Analyze documents, tools, and processes in place.', class: 'step-2' },
              { step: 3, title: 'Prepare Roadmap', desc: 'Create detailed findings + recommendations for solutions.', class: 'step-3' },
              { step: 4, title: 'Review & Implement', desc: 'Present roadmap and discuss path forward with stakeholders.', class: 'step-4' }
            ].map(item => (
              <RevealSection key={item.step} className={`roadmap-card ${item.class}`}>
                <div className="card-num">{item.step}</div>
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

      <section className="section narrative-section">
        <div className="container narrative-content">
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
            
            <button className="btn btn-primary" style={{marginTop: '2.5rem'}}>Request Your Diagnostic Assessment <ArrowRight size={18} /></button>
          </RevealSection>
          
          <RevealSection className="narrative-visual-side">
            <div className="pain-points-image-wrapper">
               <img src={heroImage} alt="Frustrated team member at laptop" />
            </div>
          </RevealSection>
        </div>
      </section>
      
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

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Partners Say</h2>
          </div>
          <div className="testimonials-grid">
            <RevealSection className="testimonial-card">
              <div className="test-stars">
                {[1,2,3,4,5].map(s => <Star key={s} fill="#FFB800" size={16} />)}
              </div>
              <p className="test-quote">"The PROS Communication Audit helped us identify exactly where our team was struggling. We implemented the roadmap and saw immediate improvements in document quality and review speed. It literally cut our review cycles from 4 weeks to 10 days."</p>
              <div>
                <div className="test-author">Sarah Jenkins</div>
                <div className="test-title">VP of Engineering, DataCorp</div>
              </div>
            </RevealSection>
            
            <RevealSection className="testimonial-card">
              <div className="test-stars">
                {[1,2,3,4,5].map(s => <Star key={s} fill="#FFB800" size={16} />)}
              </div>
              <p className="test-quote">"All the minimalism strategies can be directly applied to our technical documentation. This wasn't generic training—it was specific to our needs."</p>
              <div>
                <div className="test-author">David Chen</div>
                <div className="test-title">Lead Data Scientist, ScaleAI</div>
              </div>
            </RevealSection>
            
            <RevealSection className="testimonial-card">
              <div className="test-stars">
                {[1,2,3,4,5].map(s => <Star key={s} fill="#FFB800" size={16} />)}
              </div>
              <p className="test-quote">"We tried other solutions before Hurley Write. The difference is they diagnosed the real problem, not just the symptoms. The custom roadmap gave us a clear, undeniable path forward."</p>
              <div>
                <div className="test-author">Marcus Thorne</div>
                <div className="test-title">Engineering Manager, TechFlow</div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <section className="section results-section">
        <div className="container">
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

      <section className="cta-section">
        <div className="container">
          <RevealSection>
            <h2>Ready to Fix Your Team's Communication?</h2>
            <p className="lead" style={{marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto', color: 'rgba(255,255,255,0.85)'}}>
              Schedule a free consultation to discuss your communication challenges and see if the PROS Roadmap is right for your team.
            </p>
            <button className="btn btn-primary btn-large" style={{color: '#fff'}}>
              Schedule Your Free Consultation <ArrowRight size={24} />
            </button>
          </RevealSection>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo" style={{marginBottom: '1rem'}}>Hurley<span>Write</span></div>
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
