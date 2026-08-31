import Image from "next/image";
import FloatingFaq from "./FloatingFaq";

type IconName =
  | "home"
  | "refresh"
  | "chart"
  | "building"
  | "search"
  | "compare"
  | "document"
  | "check"
  | "mail"
  | "arrow";

const company = {
  email: "info@thevaultt.com.au",
  location: "1 Shortland Ave, Strathfield NSW 2135",
};

const services = [
  {
    icon: "home" as IconName,
    title: "Home Loans",
    text: "From first-home buyers to your next move, we help you understand your options and find a loan suited to your goals.",
  },
  {
    icon: "refresh" as IconName,
    title: "Refinancing",
    text: "Review your current loan, compare alternatives and explore opportunities to improve your rate, structure or cash flow.",
  },
  {
    icon: "chart" as IconName,
    title: "Investment Loans",
    text: "Build your property strategy with lending structures designed around your investment plans and financial position.",
  },
  {
    icon: "building" as IconName,
    title: "Commercial & Asset Finance",
    text: "Flexible finance solutions for business property, vehicles, equipment and working-capital requirements.",
  },
];

const process = [
  {
    icon: "search" as IconName,
    step: "01",
    title: "Discover",
    text: "We learn about your goals, priorities and financial position.",
  },
  {
    icon: "compare" as IconName,
    step: "02",
    title: "Compare",
    text: "We research suitable options and explain the differences clearly.",
  },
  {
    icon: "document" as IconName,
    step: "03",
    title: "Apply",
    text: "We prepare the application and coordinate with the lender on your behalf.",
  },
  {
    icon: "check" as IconName,
    step: "04",
    title: "Settle",
    text: "We support you through approval, settlement and future loan reviews.",
  },
];

const faqs = [
  {
    question: "Why use a finance broker?",
    answer:
      "A broker can help you understand lending options, compare suitable products and manage the application process from enquiry through to settlement.",
  },
  {
    question: "Do you only help with home loans?",
    answer:
      "No. SkyRise Solutions can assist with owner-occupied, investment, refinance, commercial and asset-finance enquiries.",
  },
  {
    question: "How much does an initial consultation cost?",
    answer:
      "The initial discovery call is complimentary. Any fees that may apply to your situation should be disclosed before you proceed.",
  },
  {
    question: "Can you help clients outside Sydney?",
    answer:
      "Yes. The process can be handled by email and video meeting for clients across Australia, subject to service coverage and lending requirements.",
  },
];

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 7h-5V2" />
        <path d="M4 17h5v5" />
        <path d="M6.1 9A7 7 0 0 1 18.7 6L20 7" />
        <path d="M17.9 15A7 7 0 0 1 5.3 18L4 17" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
      </>
    ),
    building: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4v18" />
        <path d="M12 9h7v12" />
        <path d="M8 9h1M8 13h1M8 17h1M15 13h1M15 17h1" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    compare: (
      <>
        <path d="M7 4v16M17 4v16" />
        <path d="m4 7 3-3 3 3M14 17l3 3 3-3" />
      </>
    ),
    document: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h5M9 13h6M9 17h6M9 9h2" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="SkyRise Solutions home">
      <Image
        src="/skyrise_logo.png"
        alt="SkyRise Solutions"
        width={58}
        height={58}
        priority
      />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#why-us">Why us</a>
            <a href="#process">Our process</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button button-small" href="#contact">
            Book a consultation
          </a>
        </div>
      </header>

      <section className="hero section-dark">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-light">FINANCE, MADE CLEAR</span>
            <h1>
              Finance that helps
              <span> your plans rise.</span>
            </h1>
            <p>
              Tailored lending guidance for home buyers, property investors and
              Australian businesses — with clear advice from enquiry to settlement.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Start a conversation <Icon name="arrow" />
              </a>
              <a className="text-link text-link-light" href="#services">
                Explore finance options
              </a>
            </div>
            <div className="hero-proof">
              <span><Icon name="check" /> Clear, tailored guidance</span>
              <span><Icon name="check" /> End-to-end support</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="SkyRise finance overview">
            <div className="rise-lines" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="hero-card hero-card-main">
              <span className="card-label">YOUR FINANCE JOURNEY</span>
              <strong>One clear path forward.</strong>
              <p>Strategy · Options · Application · Settlement</p>
              <div className="progress-track"><span /></div>
              <div className="mini-stats">
                <div><b>1:1</b><small>Personal guidance</small></div>
                <div><b>4</b><small>Simple stages</small></div>
              </div>
            </div>
            <div className="hero-card hero-card-float">
              <span className="icon-badge"><Icon name="chart" /></span>
              <div><small>Built around</small><strong>Your goals</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Service highlights">
        <div className="container trust-grid">
          <div><strong>Tailored</strong><span>Finance strategies</span></div>
          <div><strong>Clear</strong><span>Plain-English guidance</span></div>
          <div><strong>Supported</strong><span>From enquiry to settlement</span></div>
          <div><strong>Australia-wide</strong><span>Remote consultations available</span></div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">FINANCE SOLUTIONS</span>
              <h2>Support for every stage of your financial journey.</h2>
            </div>
            <p>
              Whether you are buying, refinancing, investing or growing a business,
              SkyRise Solutions helps make the lending process easier to navigate.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-icon"><Icon name={service.icon} /></span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact">Discuss your options <Icon name="arrow" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="why-us">
        <div className="container feature-layout">
          <div className="feature-visual">
            <div className="feature-skyline" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
            <div className="feature-card">
              <span>THE SKYRISE DIFFERENCE</span>
              <strong>Clarity before complexity.</strong>
              <p>Understand the strategy, the trade-offs and the next step.</p>
            </div>
          </div>
          <div className="feature-copy">
            <span className="eyebrow">WHY SKYRISE SOLUTIONS</span>
            <h2>Professional guidance, built around real-life goals.</h2>
            <p className="lead">
              Finance can feel complicated. Our role is to turn it into a clear,
              practical plan and keep the process moving.
            </p>
            <div className="benefit-list">
              <div>
                <span><Icon name="check" /></span>
                <div><h3>Personal, not one-size-fits-all</h3><p>Your position, priorities and long-term goals shape the recommendation.</p></div>
              </div>
              <div>
                <span><Icon name="check" /></span>
                <div><h3>Clear communication</h3><p>We explain options and next steps without unnecessary jargon.</p></div>
              </div>
              <div>
                <span><Icon name="check" /></span>
                <div><h3>Ongoing support</h3><p>Our relationship continues beyond approval and settlement.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark process-section" id="process">
        <div className="container">
          <div className="section-heading centered-heading">
            <span className="eyebrow eyebrow-light">HOW IT WORKS</span>
            <h2>A straightforward path from idea to settlement.</h2>
            <p>Four practical stages, with guidance at every step.</p>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <article className="process-card" key={item.step}>
                <span className="step-number">{item.step}</span>
                <span className="process-icon"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container faq-layout">
          <div className="faq-intro">
            <span className="eyebrow">FREQUENTLY ASKED</span>
            <h2>Answers before you get started.</h2>
            <p>Have a different question? Speak with SkyRise Solutions about your situation.</p>
            <a className="text-link" href="#contact">Contact our team <Icon name="arrow" /></a>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}<span>+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-card">
          <div>
            <span className="eyebrow eyebrow-light">LET&apos;S TALK FINANCE</span>
            <h2>Ready to take the next step?</h2>
            <p>Book a complimentary initial conversation and tell us what you are working towards.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-white" href={`mailto:${company.email}`}>
              Email our team <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Tailored finance guidance for property, investment and business goals.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#services">Services</a>
            <a href="#why-us">Why us</a>
            <a href="#process">Our process</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>{company.location}</span>
          </div>
          <div>
            <h3>Legal</h3>
            <a href="#legal-placeholder">Credit Guide</a>
            <a href="#legal-placeholder">Privacy Policy</a>
            <a href="#legal-placeholder">Complaints</a>
          </div>
        </div>
        <div className="container compliance" id="legal-placeholder">
          <p>
            <strong>Compliance placeholder — replace before publishing:</strong> SkyRise Solutions Pty Ltd · Australian Credit Licence / Credit Representative No. [INSERT NUMBER] · Authorised under [INSERT LICENSEE NAME AND ACL] · AFCA membership details [INSERT]. Credit services and lender panel details are subject to the company&apos;s approved Credit Guide.
          </p>
          <div><span>© {new Date().getFullYear()} SkyRise Solutions.</span><span>Website concept v1.0</span></div>
        </div>
      </footer>
      <FloatingFaq email={company.email} />
    </main>
  );
}
