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
        background: z.string().optional(),
        availableBadge: z.boolean().optional().default(false),
        socialLinks: z
          .object({
            github: z.string().url().optional(),
            linkedin: z.string().url().optional(),
            twitter: z.string().url().optional(),
          })
          .optional(),
      }),
    }),
  },
});
