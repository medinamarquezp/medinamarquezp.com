import { env } from '$env/dynamic/private';
import { compile } from 'mdsvex';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
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

	async getPage(id: string) {
		const n2m = new NotionToMarkdown({ notionClient: this.notion });
		const mdblocks = await n2m.pageToMarkdown(id);
		const mdString = n2m.toMarkdownString(mdblocks);
		const mdCompiled = await compile(mdString.parent);
		return mdCompiled?.code
			.replace(/>{@html `<code class="language-/g, '><code class="language-')
			.replace(/<\/code>`}<\/pre>/g, '</code></pre>');
	}
}

export const notionClient = new NotionClient();
