import { env } from '$env/dynamic/private';
import type { Tech, TimelineItem, BlogItem } from '$lib/types';
import { notionClient } from './client';
import {
	parseTechResult,
	parseTimelineResult,
	parseBlogResult
} from './parsers';

class NotionBlocks {
	private client: typeof notionClient;
	private techs: Map<string, Tech>;
	private blogs: BlogItem[];
	private timeline: TimelineItem[];

	constructor() {
		this.client = notionClient;
		this.techs = new Map();
		this.timeline = [];
		this.blogs = [];
	}

	async getTechs(): Promise<Map<string, Tech>> {
		if (this.techs.size) return this.techs;
		const techsDB = env.NOTION_TECHS_DB as string;
		const result = await this.client.queryDatabase({
			database_id: techsDB
		});
		result.map((item: any) => {
			this.techs.set(item.id, parseTechResult(item));
		});
		return this.techs;
	}

	async getTimeline(): Promise<TimelineItem[]> {
		if (this.timeline.length) return this.timeline;
		const timelineDB = env.NOTION_TIMELINE_DB as string;
		const result = await this.client.queryDatabase({
			database_id: timelineDB,
			sorts: [{ property: 'start', direction: 'descending' }]
		});
		const techs = await this.getTechs();
		result.map((item: any) =>
			this.timeline.push(parseTimelineResult(item, techs))
		);
		return this.timeline;
	}

	async getBlogs(): Promise<BlogItem[]> {
		if (this.blogs.length) return this.blogs;
		const blogsDB = env.NOTION_BLOGS_DB as string;
		const result = await this.client.queryDatabase({
			database_id: blogsDB,
			filter: {
				and: [
					{
						property: 'published',
						checkbox: {
							equals: true
						}
					}
				]
			},
			sorts: [{ property: 'published', direction: 'descending' }]
		});
		result.map((item: any) => this.blogs.push(parseBlogResult(item)));
		return this.blogs;
	}
}

export const notionBlocks = new NotionBlocks();
