import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { notionBlocks } from '$lib/notion/blocks';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const blog = await notionBlocks.getBlog(slug);
	if (!blog) throw error(404, { message: 'Blog not found' });
	return {
		blog
	};
};
