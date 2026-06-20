import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = ['food', 'toys', 'accessories', 'health'] as const;

const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: z.object({
    category: z.enum(categories),
    name_el: z.string(),
    name_en: z.string(),
    desc_el: z.string(),
    desc_en: z.string(),
    price: z.number().nullable().default(null), // [PLACEHOLDER] real prices before launch
    image: z.string(), // path under /public
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    icon: z.enum([
      'stethoscope', 'syringe', 'chip', 'scalpel',
      'tooth', 'shield', 'bowl', 'heart',
    ]),
    title_el: z.string(),
    title_en: z.string(),
    desc_el: z.string(),
    desc_en: z.string(),
    order: z.number(),
  }),
});

export const collections = { products, services };
export const productCategories = categories;
