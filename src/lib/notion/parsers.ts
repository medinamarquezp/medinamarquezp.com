import { env } from '$env/dynamic/private';
import * as cheerio from 'cheerio';
import type { Tech, TimelineItem } from '../types';
import { uploadFile } from '$lib/cloudinary';
import { formatDate } from '$lib/utilities/dates';

const processFiles = async (files: string | string[]) => {
	if (!Array.isArray(files)) files = [files];
	const processedFiles = [];
	for (const file of files) {
		const fileName = file.split('/')[5].split('?')[0].split('.')[0];
		const url = await uploadFile(file, fileName);
		processedFiles.push(url || file);
	}
	return processedFiles.length === 1 && !Array.isArray(files)
		? processedFiles[0]
		: processedFiles;
};

export const parseMarkdownImages = async (content: string) => {
	const $ = cheerio.load(content);
	if ($('img').length) {
		for (const image of $('img')) {
			const src = $(image).attr('src') as string;
			const uploadedImage = (await processFiles(src))[0];
			$(image).attr('src', uploadedImage);
		}
	}
	return $.html();
};

export const parseMarkdownTwitter = (content: string) => {
	const $ = cheerio.load(content);
	const twitterDomain = env.TWITTER_USERNAME_PATH as string;
	$('a[href^="' + twitterDomain + '"]').each((index, element) => {
		const currentHref = $(element).attr('href');
		const blockquoteHTML = `
			<div class="flex justify-center">
				<blockquote class="twitter-tweet">
	  				<a href="${currentHref}"></a>
				</blockquote>
			</div>
		`;
		$(element).replaceWith(blockquoteHTML);
	});
	return $.html();
};

export const parseMarkdownCode = (content: string) => {
	return content
		.replace(/>{@html `<code class="language-/g, '><code class="language-')
		.replace(/<\/code>`}<\/pre>/g, '</code></pre>');
};

export const parseTimelineResult = async (
	item: any,
	techs: Map<string, Tech>
) => {
	const brand = await processFiles(item.properties.brand.files[0].file.url);
	return {
		title: item.properties.title.title[0].plain_text,
		description: item.properties.description.rich_text[0].plain_text,
		company: item.properties.company.rich_text[0].plain_text,
		brand,
		start: new Date(item.properties.start.date.start),
		end: item.properties.end?.date?.start
			? new Date(item.properties.end?.date?.start)
			: null,
		type: item.properties.type.select.name,
		techs: item.properties.techs.relation.map((tech: any) => techs.get(tech.id))
	} as TimelineItem;
};

export const parseTechResult = (item: any) => {
	return {
		label: item.properties.label.title[0].plain_text,
		icon: item.properties.icon.rich_text[0].plain_text
	} as Tech;
};

export const parseBlogResult = async (item: any) => {
	const hero = await processFiles(item.properties.hero.files[0].file.url);
	return {
		id: item.id,
		slug: item.properties.slug.rich_text[0].plain_text,
		title: item.properties.title.title[0].plain_text,
		categories: item.properties.categories.multi_select.map(
			(category: any) => category.name
		),
		excerpt: item.properties.excerpt.rich_text[0].plain_text,
		published: item.properties.published.checkbox,
		hero: hero.length ? hero[0] : null,
		tldr: item.properties.tldr.rich_text[0].plain_text,
		reading_time: item.properties.reading_time.formula.number,
		created_at_timestamp: new Date(item.created_time).getTime(),
		created_at: formatDate(new Date(item.created_time), {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		})
	};
};

export const parseProjectResult = async (
	item: any,
	techs: Map<string, Tech>
) => {
	const paths = item.properties.images.files.map(
		(image: any) => image.file.url
	);
	const images = (await processFiles(paths)) as string[];
	return {
		title: item.properties.title.title[0].plain_text,
		categories: item.properties.categories.multi_select.map(
			(category: any) => category.name
		),
		phase: item.properties.phase.status.name,
		description: item.properties.description.rich_text[0].plain_text,
		images,
		techs: item.properties.techs.relation.map((tech: any) =>
			techs.get(tech.id)
		),
		created_at: formatDate(new Date(item.created_time), {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		})
	};
};
