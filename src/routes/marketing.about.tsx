import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/marketing/site";

const pageUrl = "https://tap-and-smile-business-card.lovable.app/marketing/about";
const pageDescription =
  "Learn why Business Card brings digital identity, NFC and QR sharing, and easier connections together.";

export const Route = createFileRoute("/marketing/about")({
  head: () => ({
    meta: [
      { title: "About — Business Card" },
      { name: "description", content: pageDescription },
      { property: "og:title", content: "About — Business Card" },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
  component: AboutPage,
});