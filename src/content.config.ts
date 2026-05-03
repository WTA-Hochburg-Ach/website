import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ 
    pattern: '*.md', 
    base: 'src/content/pages',
    transform: (data) => ({ ...data, slug: data.id.replace(/\.md$/, '') })
  }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const news = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: 'src/content/news',
    transform: (data) => ({ ...data, slug: data.id.replace(/\.md$/, '') })
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    preview: z.string().optional(),
    type: z.enum(['news', 'event']).default('news'),
    location: z.string().optional(),
    display: z.enum(['modal', 'page']).default('page'),
    color: z.enum(['moss', 'sage', 'gold']).default('moss'),
    pdfs: z
      .object({
        de: z.string().optional(),
        en: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  pages,
  news,
};
