import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  Building2,
  ExternalLink,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import officeCover from "@/assets/business-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Business | Business Card" },
      {
        name: "description",
        content: "Connect with Your Business in Bengaluru, India, and share your experience.",
      },
      { property: "og:title", content: "Your Business | Business Card" },
      {
        property: "og:description",
        content: "Connect with Your Business in Bengaluru, India, and share your experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BusinessProfilePage,
});

const business = {
  name: "Your Business",
  category: "Business",
  location: "Bengaluru, India",
  description: "Delivering quality service and a great customer experience.",
  reviewUrl: "https://example.com/review",
  phone: "+91 80 5555 0101",
  email: "hello@example.com",
  mapUrl: "https://maps.google.com/?q=Bengaluru,India",
};

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram, className: "social-instagram" },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook, className: "social-facebook" },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube, className: "social-youtube" },
  { label: "WhatsApp", href: "https://wa.me/918055550101", Icon: MessageCircle, className: "social-whatsapp" },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin, className: "social-linkedin" },
  { label: "Website", href: "https://example.com", Icon: Globe, className: "social-website" },
];

function BusinessProfilePage() {
  return (
    <main className="profile-page">
      <BusinessCover />
      <div className="profile-content">
        <BusinessIdentity />
        <GoogleReviewButton />
        <ThankYouCard />
        <FeedbackCard />
        <SocialLinks />
        <ContactActions />
      </div>
      <BusinessFooter />
    </main>
  );
}

function BusinessCover() {
  return (
    <div className="business-cover">
      <img
        className="business-cover-image"
        src={officeCover}
        alt="Bright, contemporary business reception"
        width={1600}
        height={700}
        fetchPriority="high"
      />
    </div>
  );
}

function BusinessIdentity() {
  return (
    <section className="business-identity" aria-label="Business details">
      <div className="business-logo" aria-hidden="true">
        <Building2 size={43} strokeWidth={1.8} />
      </div>
      <h1 className="business-name">
        {business.name}
        <BadgeCheck className="verified-icon" size={23} fill="currentColor" aria-label="Verified" />
      </h1>
      <p className="business-meta">
        <span>{business.category}</span>
        <span className="meta-dot" aria-hidden="true">•</span>
        <span>{business.location}</span>
      </p>
      <p className="business-description">{business.description}</p>
    </section>
  );
}

function GoogleReviewButton() {
  return (
    <Button
      asChild
      variant="outline"
      className="google-review-button"
    >
      <a href={business.reviewUrl} target="_blank" rel="noreferrer">
        <span className="google-g" aria-label="Google">G</span>
        <span>Review Us on Google</span>
        <ExternalLink size={20} aria-hidden="true" />
      </a>
    </Button>
  );
}

function ThankYouCard() {
  return (
    <section className="thank-you-card" aria-label="Thank you">
      <h2>Thank You for Visiting!</h2>
      <p>We appreciate your time and trust.</p>
    </section>
  );
}

export function FeedbackCard() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (rating === 0) {
      setSubmitted(false);
      setMessage("Please select a star rating before submitting.");
      return;
    }
    setSubmitted(true);
    setMessage("Thank you! Your feedback has been received.");
  }

  return (
    <section className="feedback-card" aria-labelledby="feedback-heading">
      <h2 id="feedback-heading">How Was Your Experience?</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="star-rating" role="group" aria-label="Rate your experience">
          {Array.from({ length: 5 }, (_, index) => {
            const value = index + 1;
            const active = value <= (hoverRating || rating);
            return (
              <Button
                key={value}
                type="button"
                variant="ghost"
                size="icon"
                className={`rating-star${active ? " is-active" : ""}`}
                aria-label={`${value} ${value === 1 ? "star" : "stars"}`}
                aria-pressed={rating === value}
                onMouseEnter={() => setHoverRating(value)}
                onMouseLeave={() => setHoverRating(0)}
                onFocus={() => setHoverRating(value)}
                onBlur={() => setHoverRating(0)}
                onClick={() => {
                  setRating(value);
                  setMessage("");
                  setSubmitted(false);
                }}
              >
                <Star size={31} strokeWidth={1.8} fill={active ? "currentColor" : "none"} />
              </Button>
            );
          })}
        </div>
        <Textarea
          className="feedback-textarea"
          placeholder="Share your feedback with us..."
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
          aria-label="Share your feedback"
          disabled={submitted}
        />
        <Button type="submit" className="submit-feedback-button" disabled={submitted}>
          {submitted ? "Feedback Submitted" : "Submit Feedback"}
        </Button>
        <p className={`feedback-message${message && !submitted ? " feedback-error" : ""}`} aria-live="polite">
          {message}
        </p>
      </form>
    </section>
  );
}

function SocialLinks() {
  return (
    <section className="social-section" aria-labelledby="social-heading">
      <div className="section-divider">
        <span aria-hidden="true" />
        <h2 id="social-heading">Stay Connected</h2>
        <span aria-hidden="true" />
      </div>
      <nav className="social-links" aria-label="Social media">
        {socialLinks.map(({ label, href, Icon, className }) => (
          <Button
            key={label}
            asChild
            variant="outline"
            size="icon"
            className={`social-link ${className}`}
            aria-label={label}
            title={label}
          >
            <a href={href} target="_blank" rel="noreferrer">
              <Icon size={23} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </Button>
        ))}
      </nav>
    </section>
  );
}

function ContactActions() {
  return (
    <nav className="contact-actions" aria-label="Contact the business">
      <Button asChild variant="outline" className="contact-action">
        <a href={`tel:${business.phone.replaceAll(" ", "")}`}>
          <Phone size={20} aria-hidden="true" />
          <span>Call</span>
        </a>
      </Button>
      <Button asChild variant="outline" className="contact-action">
        <a href={`mailto:${business.email}`}>
          <Mail size={20} aria-hidden="true" />
          <span>Email</span>
        </a>
      </Button>
      <Button asChild variant="outline" className="contact-action">
        <a href={business.mapUrl} target="_blank" rel="noreferrer">
          <MapPin size={20} aria-hidden="true" />
          <span>Location</span>
        </a>
      </Button>
    </nav>
  );
}

function BusinessFooter() {
  return (
    <footer className="business-footer">
      <div className="footer-wave footer-wave-back" aria-hidden="true" />
      <div className="footer-wave footer-wave-front" aria-hidden="true" />
      <p className="footer-brand">
        <Building2 size={19} strokeWidth={2.2} aria-hidden="true" />
        <span>Powered by <strong>Business Card™</strong></span>
      </p>
    </footer>
  );
}