import { env } from '$env/dynamic/private';
import { Client } from '@notionhq/client';
import type { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

export class NotionClient {
	private notion: Client;

	constructor() {
		this.notion = new Client({
			auth: env.NOTION_API_KEY
		});
	}

	async queryDatabase(params: QueryDatabaseParameters) {
		const response = await this.notion.databases.query({
			...params
		});
		return response.results;
	}
}

export const notionClient = new NotionClient();
