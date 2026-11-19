import { createFileRoute } from "@tanstack/react-router";

import { MarketingHome } from "@/components/marketing/site";

const marketingUrl = "https://tap-and-smile-business-card.lovable.app/marketing";
const marketingDescription =
  "Bring your identity, online presence, and important links together. Share your digital profile with a simple NFC tap or QR scan.";

export const Route = createFileRoute("/marketing/")({
  head: () => ({
    meta: [
      { title: "Business Card — A Better Way to Connect" },
      { name: "description", content: marketingDescription },
      { property: "og:title", content: "Business Card — A Better Way to Connect" },
      { property: "og:description", content: marketingDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: marketingUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: marketingUrl }],
  }),
  component: MarketingHome,
});