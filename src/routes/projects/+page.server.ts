import type { PageServerLoad } from './$types';
import { notionBlocks } from '$lib/notion/blocks';

export const load: PageServerLoad = async () => {
	return {
		projects: await notionBlocks.getProjects()
	};
};
