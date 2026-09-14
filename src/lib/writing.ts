import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

const writingFiles = import.meta.glob("../content/writing/**/*.md");

export async function getPublishedWriting(): Promise<CollectionEntry<"writing">[]> {
  if (Object.keys(writingFiles).length === 0) {
    return [];
  }

  return (await getCollection("writing"))
    .filter(({ data }) => !data.draft)
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}
