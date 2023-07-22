import { formatDate } from '$lib/utilities/dates';
import type { Tech, TimelineItem } from '../types';
export const parseTimelineResult = (item: any, techs: Map<string, Tech>) => {
	return {
		title: item.properties.title.title[0].plain_text,
		description: item.properties.description.rich_text[0].plain_text,
		company: item.properties.company.rich_text[0].plain_text,
		brand: item.properties.brand.files[0].file.url,
		start: new Date(item.properties.start.date.start),
		end: item.properties.end?.date?.end
			? new Date(item.properties.end?.date?.end)
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

export const parseBlogResult = (item: any) => {
	return {
		slug: item.properties.slug.rich_text[0].plain_text,
		title: item.properties.title.title[0].plain_text,
		categories: item.properties.categories.multi_select.map(
			(category: any) => category.name
		),
		excerpt: item.properties.excerpt.rich_text[0].plain_text,
		published: item.properties.published.checkbox,
		hero: item.properties.hero.files[0].file.url,
		tldr: item.properties.tldr.rich_text[0].plain_text,
		reading_time: item.properties.reading_time.formula.number,
		created_at: formatDate(new Date(item.created_time), {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		})
	};
};
