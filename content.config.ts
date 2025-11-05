import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        avatar: z.string(),
        name: z.string(),
        role: z.string(),
        layout: z.enum(["x", "linkedin", "instagram"]).default("x"),
        summary: z.string().optional(),
        date: z.date().optional(),
      }),
    }),
  },
});
