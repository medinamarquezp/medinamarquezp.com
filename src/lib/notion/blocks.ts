import { env } from '$env/dynamic/private';
import type { Tech, TimelineItem } from '$lib/types';
import { notionClient } from './client';
import { parseTechResult, parseTimelineResult } from './parsers';

class NotionBlocks {
	private client: typeof notionClient;
	private techs: Map<string, Tech>;
	private timeline: TimelineItem[];

	constructor() {
		this.client = notionClient;
		this.techs = new Map();
		this.timeline = [];
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
}

export const notionBlocks = new NotionBlocks();
