import type { BlogItem, Card } from '$lib/types';

export const blogsToCards = (blogs: BlogItem[]): Card[] => {
	return blogs
		? blogs.map(({ title, slug, excerpt, created_at }) => ({
				title,
				content: excerpt.slice(0, 80) + '...',
				path: `/blog/${slug}`,
				date: created_at
		  }))
		: [];
};
