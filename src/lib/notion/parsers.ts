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
