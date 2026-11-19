import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it.each([
    ["/", "/"],
    ["/marketing", "/marketing/"],
    ["/marketing/how-it-works", "/marketing/how-it-works"],
    ["/marketing/about", "/marketing/about"],
  ])("matches the intended page for %s", (pathname, expectedRouteId) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes(pathname);

    expect(matches.at(-1)?.routeId).toBe(expectedRouteId);
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
