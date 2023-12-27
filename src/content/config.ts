import { defineCollection, reference, z } from 'astro:content';

const authors = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		avatar: z.string(),
		email: z.string().email(),
		github: z.string().url(),
	}),
});

const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		tags: z.array(reference('tags')).default(['default']),
		draft: z.boolean().default(false),
		summary: z.string().optional(),
		images: z.string().optional(),
		authors: z.array(reference('authors')).default(['erdelyi-roland']),
		related: z.array(reference('posts')).default([]),
	}),
});

const tags = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		description: z.string().optional(),
	}),
});

export const collections = { posts, authors, tags };
