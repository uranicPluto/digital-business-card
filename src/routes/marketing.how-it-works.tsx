import { createFileRoute } from "@tanstack/react-router";

import { HowItWorksPage } from "@/components/marketing/site";

const pageUrl = "https://tap-and-smile-business-card.lovable.app/marketing/how-it-works";
const pageDescription =
  "See how a personalized digital profile connects to an NFC business card or QR code, from first tap to meaningful connection.";

export const Route = createFileRoute("/marketing/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Business Card" },
      { name: "description", content: pageDescription },
      { property: "og:title", content: "How It Works — Business Card" },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
  component: HowItWorksPage,
});