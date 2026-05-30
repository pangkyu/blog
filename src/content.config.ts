import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			tags: z.array(z.string()).default([]),
			series: z.string().optional(),         // 시리즈 이름
			seriesOrder: z.number().optional(),     // 시리즈 내 순서
			draft: z.boolean().default(false),      // 초안 여부
		}),
});

export const collections = { blog };
