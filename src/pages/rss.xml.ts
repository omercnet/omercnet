import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getPublishedWriting } from "../lib/writing";

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPublishedWriting();

  return rss({
    title: "Omer Cohen — Writing",
    description: "Writing on identity, security, incident response, and agents.",
    site: site ?? "https://omer.cohen.io",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/writing/${post.id}/`,
    })),
    customData: "<language>en-us</language>",
  });
};
