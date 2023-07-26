import { Feed } from 'feed';
import { env } from '$env/dynamic/public';
import { notionBlocks } from '$lib/notion/blocks';

const siteUrl = env.PUBLIC_SITE_URL as string;
const feedCategories = [
	'Diseño',
	'Desarrollo',
	'Emprendimiento',
	'buildinginpublic'
];

const createFeedInstance = () => {
	const feed = new Feed({
		title: 'Pedro Medina Weblog',
		description:
			'El rincón de las reflexiones. Un lugar donde curiosear, aprender y compartir',
		id: siteUrl,
		link: siteUrl,
		language: 'es',
		image: `${siteUrl}/medinamarquezp.png`,
		favicon: `${siteUrl}/medinamarquezp.png`,
		copyright: `Pedro Medina Márquez ${new Date().getFullYear()}`,
		updated: new Date(),
		generator: 'medinamarquezp.com',
		author: {
			name: 'Pedro Medina Márquez',
			email: 'medinamarquezp@gmail.com',
			link: `${siteUrl}/about`
		}
	});
	feed.categories = feedCategories;
	return feed;
};

export const generateFeed = async () => {
	const feed = createFeedInstance();
	const posts = await notionBlocks.getBlogsList();
	posts.forEach((post) => {
		feed.addItem({
			title: post.title,
			id: post.id,
			link: `${siteUrl}/blog/${post.slug}`,
			description: post.tldr,
			content: post.tldr,
			category: post.categories.map((category) => ({ name: category })),
			author: [
				{
					name: 'Pedro Medina Márquez',
					email: 'medinamarquezp@gmail.com',
					link: `${siteUrl}/about`
				}
			],
			date: new Date(post.created_at_timestamp),
			...(post.hero && { image: post.hero })
		});
	});
	return feed.rss2();
};
