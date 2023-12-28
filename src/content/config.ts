import { defineCollection, reference, z } from 'astro:content';

const authors = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		avatar: z.string(),
		occupation: z.string(),
		website: z.string().url(),
		email: z.string().email(),
		github: z.string().url(),
		linkedin: z.string().url(),
		twitter: z.string().url(),
	}),
});

const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		tags: z.array(reference('tags')).default(['default']),
		draft: z.boolean().default(false),
		summary: z.string(),
		author: reference('authors').default('erdelyi-roland'),
		related: z.array(reference('posts')).default([]),
	}),
});

const tags = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		description: z.string(),
	}),
});

export const collections = { posts, authors, tags };
