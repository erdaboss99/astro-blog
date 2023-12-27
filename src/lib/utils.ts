import type { CollectionEntry } from 'astro:content';

export const excludeDrafts = ({ data }: CollectionEntry<'posts'>): boolean => {
	return import.meta.env.PROD ? !data.draft : true;
};

export const sortPosts = (posts: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] => {
	return posts.sort((a, b) => {
		return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
	});
};
