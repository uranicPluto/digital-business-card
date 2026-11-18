import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  Camera,
  Check,
  Globe,
  Link2,
  QrCode,
  Smartphone,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import connectionPhoto from "@/assets/marketing-connection.jpg";

type MarketingPageProps = {
  children: ReactNode;
};

const audiences = [
  {
    title: "Businesses",
    copy: "Help customers find your reviews, socials, and the ways to reach you.",
    Icon: Building2,
    tint: "green",
  },
  {
    title: "Professionals",
    copy: "Share your work and professional identity in one easy-to-open profile.",
    Icon: Briefcase,
    tint: "blue",
  },
  {
    title: "Creators",
    copy: "Bring your channels and collaboration links together when you meet.",
    Icon: Camera,
    tint: "coral",
  },
  {
    title: "Personal brands",
    copy: "Make it simple for people to discover what you do and stay connected.",
    Icon: Users,
    tint: "gold",
  },
];

const connectionSteps = [
  {
    number: "01",
    title: "Share your card",
    copy: "Tap an NFC card or let someone scan its QR code.",
    Icon: QrCode,
  },
  {
    number: "02",
    title: "Open your profile",
    copy: "Your digital profile opens in their browser—no app download needed.",
    Icon: Smartphone,
  },
  {
    number: "03",
    title: "Make the connection",
    copy: "They can explore your links, learn about you, and get in touch.",
    Icon: Link2,
  },
];

export function MarketingShell({ children }: MarketingPageProps) {
  return (
    <div className="marketing-site">
      <MarketingHeader />
      {children}
      <MarketingFooter />
    </div>
  );
}

export function MarketingHome() {
  return (
    <MarketingShell>
      <main>
        <section className="mk-hero" aria-labelledby="mk-home-title">
          <img
            className="mk-hero-photo"
            src={connectionPhoto}
            alt="A digital profile open on a phone beside an NFC business card"
            width={1536}
            height={1024}
            fetchPriority="high"
          />
          <div className="mk-hero-content">
            <p className="mk-eyebrow"><span /> Your identity, all in one place</p>
            <h1 id="mk-home-title">Business Card</h1>
            <p className="mk-hero-tagline">More than a business card. A better way to connect.</p>
            <p className="mk-hero-copy">
              Bring your business or professional presence together in one simple digital profile.
              Share it with a tap or scan, and make the next connection easier.
            </p>
            <div className="mk-hero-actions">
              <Button asChild className="mk-button mk-button-primary">
                <Link to="/marketing/how-it-works">
                  See how it works <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="mk-button mk-button-outline">
                <Link to="/">View a sample profile <ArrowUpRight aria-hidden="true" /></Link>
              </Button>
            </div>
            <p className="mk-hero-note"><Check aria-hidden="true" /> Opens in a browser. No app download.</p>
          </div>
          <div className="mk-hero-index" aria-hidden="true"><span>01</span> / 03</div>
        </section>

        <section className="mk-intro mk-container" id="product" aria-labelledby="mk-intro-title">
          <div className="mk-section-kicker"><span>One simple connection</span><span className="mk-kicker-line" /></div>
          <div className="mk-intro-grid">
            <h2 id="mk-intro-title">Everything they need to know. One tap away.</h2>
            <div>
              <p>
                Your website, social profiles, contact details, and important links can live
                together on one personalized page—not scattered across different places.
              </p>
              <Link className="mk-text-link" to="/marketing/how-it-works">
                Explore the experience <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="mk-step-row">
            {connectionSteps.map(({ number, title, copy, Icon }) => (
              <article className="mk-step" key={number}>
                <div className="mk-step-top"><span>{number}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mk-audience-band" id="audiences" aria-labelledby="mk-audience-title">
          <div className="mk-container">
            <div className="mk-section-kicker"><span>Made for your next connection</span><span className="mk-kicker-line" /></div>
            <div className="mk-intro-grid mk-audience-heading">
              <h2 id="mk-audience-title">One idea. Many ways to show up.</h2>
              <p>For anyone who wants to be easier to find, understand, and connect with.</p>
            </div>
            <div className="mk-audience-grid">
              {audiences.map(({ title, copy, Icon, tint }) => (
                <article className={`mk-audience mk-tint-${tint}`} key={title}>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mk-last-call mk-container">
          <div className="mk-last-call-copy">
            <p className="mk-eyebrow">A more connected introduction</p>
            <h2>Let your next introduction go further.</h2>
          </div>
          <Button asChild className="mk-button mk-button-light">
            <Link to="/marketing/how-it-works">Discover how it works <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </section>
      </main>
    </MarketingShell>
  );
}

export function HowItWorksPage() {
  return (
    <MarketingShell>
      <main className="mk-inner-page">
        <section className="mk-page-heading mk-container">
          <p className="mk-eyebrow"><span /> Simple by design</p>
          <h1>How it works</h1>
          <p className="mk-page-lede">
            A physical card opens the door to a digital profile—so sharing who you are feels
            as easy as meeting someone.
          </p>
        </section>
        <section className="mk-process mk-container" aria-label="Three steps to connect">
          {connectionSteps.map(({ number, title, copy, Icon }, index) => (
            <article className="mk-process-step" key={number}>
              <div className={`mk-process-icon mk-process-icon-${index + 1}`}><Icon aria-hidden="true" /></div>
              <p className="mk-process-number">STEP {number}</p>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </section>
        <section className="mk-feature-band">
          <div className="mk-feature-inner mk-container">
            <div className="mk-feature-mark"><Globe aria-hidden="true" /></div>
            <div>
              <p className="mk-eyebrow">Nothing to install</p>
              <h2>Your profile opens right in the browser.</h2>
              <p>After a tap or QR scan, people can explore your profile on their phone—no separate app required.</p>
            </div>
            <Button asChild variant="outline" className="mk-button mk-button-outline">
              <Link to="/">See the sample profile <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>
        <section className="mk-bottom-link mk-container">
          <p>Your identity. Your presence. One connection.</p>
          <Link className="mk-text-link" to="/marketing/about">Meet Business Card <ArrowRight aria-hidden="true" /></Link>
        </section>
      </main>
    </MarketingShell>
  );
}

export function AboutPage() {
  return (
    <MarketingShell>
      <main className="mk-inner-page">
        <section className="mk-page-heading mk-container">
          <p className="mk-eyebrow"><span /> What we believe</p>
          <h1>Better connections start with being easier to find.</h1>
          <p className="mk-page-lede">
            We’re a digital identity and connectivity brand helping people and businesses bring
            their presence together and share it simply.
          </p>
        </section>
        <section className="mk-about-story mk-container">
          <div className="mk-about-caption"><span>OUR PURPOSE</span><span className="mk-kicker-line" /></div>
          <div className="mk-about-copy">
            <h2>Bridge the gap between real-world introductions and your digital presence.</h2>
            <p>
              A business or personal identity often lives across a website, social platforms,
              contact details, and more. We bring those important pieces together on one
              personalized digital page, made easy to open through NFC or QR.
            </p>
            <p>
              The goal is bigger than exchanging contact details. It’s helping people discover
              what you do, explore your work, and find a natural way to connect.
            </p>
          </div>
        </section>
        <section className="mk-belief-band">
          <div className="mk-container mk-belief-inner">
            <p className="mk-eyebrow">Our mission</p>
            <h2>Make it easier to present who you are, show up online, and connect with people.</h2>
            <p>Business Card — More Than a Business Card. A Better Way to Connect.</p>
          </div>
        </section>
        <section className="mk-bottom-link mk-container">
          <p>One tap or scan can make a connection easier.</p>
          <Link className="mk-text-link" to="/marketing/how-it-works">How it works <ArrowRight aria-hidden="true" /></Link>
        </section>
      </main>
    </MarketingShell>
  );
}

function MarketingHeader() {
  return (
    <header className="mk-header">
      <div className="mk-header-inner mk-container">
        <Link className="mk-brand" to="/marketing" aria-label="Business Card home">
          <span className="mk-brand-mark"><Link2 aria-hidden="true" /></span>
          <span>Business Card</span>
        </Link>
        <nav className="mk-nav" aria-label="Main navigation">
          <Link to="/marketing">Overview</Link>
          <Link to="/marketing/how-it-works">How it works</Link>
          <Link to="/marketing/about">About</Link>
        </nav>
        <Button asChild className="mk-header-cta">
          <Link to="/marketing/how-it-works">Explore <ArrowUpRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </header>
  );
}

function MarketingFooter() {
  return (
    <footer className="mk-footer">
      <div className="mk-footer-inner mk-container">
        <div>
          <Link className="mk-brand mk-footer-brand" to="/marketing">
            <span className="mk-brand-mark"><Link2 aria-hidden="true" /></span>
            <span>Business Card</span>
          </Link>
          <p>More than a business card. A better way to connect.</p>
        </div>
        <nav className="mk-footer-nav" aria-label="Footer navigation">
          <Link to="/marketing">Overview</Link>
          <Link to="/marketing/how-it-works">How it works</Link>
          <Link to="/marketing/about">About</Link>
          <Link to="/">Sample profile</Link>
        </nav>
        <span className="mk-footer-note">© Business Card</span>
      </div>
    </footer>
  );
}