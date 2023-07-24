import { env } from '$env/dynamic/private';
import type {
	Tech,
	TimelineItem,
	BlogItem,
	BlogProps,
	ProjectItem
} from '$lib/types';
import { notionClient } from './client';
import {
	parseTechResult,
	parseTimelineResult,
	parseBlogResult,
	parseProjectResult
} from './parsers';

class NotionBlocks {
	private client: typeof notionClient;
	private techs: Map<string, Tech>;
	private timeline: TimelineItem[];
	private blogsList: BlogItem[];
	private blogs: Map<string, BlogItem>;
	private latestsBlogs: BlogItem[];
	private projects: ProjectItem[];

	constructor() {
		this.client = notionClient;
		this.techs = new Map();
		this.timeline = [];
		this.blogsList = [];
		this.blogs = new Map();
		this.latestsBlogs = [];
		this.projects = [];
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
	async getBlogs(props?: BlogProps): Promise<BlogItem[]> {
		const blogsDB = env.NOTION_BLOGS_DB as string;
		const { slug, categories } = props || {};
		const result = await this.client.queryDatabase({
			database_id: blogsDB,
			filter: {
				and: [
					{
						property: 'published',
						checkbox: {
							equals: true
						}
					},
					...(slug ? [{ property: 'slug', rich_text: { equals: slug } }] : []),
					...(categories?.length
						? [
								{
									or: categories.map((category) => ({
										property: 'categories',
										multi_select: { contains: category }
									}))
								}
						  ]
						: [])
				]
			},
			sorts: [{ timestamp: 'created_time', direction: 'descending' }]
		});

		return result.map((item: any) => parseBlogResult(item));
	}

	async getBlogsList(): Promise<BlogItem[]> {
		if (this.blogsList.length) return this.blogsList;
		const result = await this.getBlogs();
		result.map((item) => this.blogsList.push(item));
		return this.blogsList;
	}

	async getBlog(slug: string): Promise<BlogItem | undefined> {
		if (this.blogs.has(slug)) return this.blogs.get(slug);
		const blogs = await this.getBlogs({ slug });
		if (!blogs.length) return undefined;
		const blog = blogs[0];
		const [page, relatedBlogs] = await Promise.all([
			this.client.getPage(blog.id),
			this.getBlogs({
				categories: blog.categories
			})
		]);
		const related = relatedBlogs
			.filter((item) => item.slug !== blog.slug)
			.slice(0, 3);
		blog.content = page;
		blog.related = related;
		this.blogs.set(slug, blog);
		return blog;
	}

	async getLatestsBlogs(): Promise<BlogItem[]> {
		if (this.latestsBlogs.length) return this.latestsBlogs;
		const blogs = await this.getBlogsList();
		this.latestsBlogs = blogs.slice(0, 3);
		return this.latestsBlogs;
	}

	async getProjects(): Promise<ProjectItem[]> {
		if (this.projects.length) return this.projects;
		const projectsDB = env.NOTION_PROJECTS_DB as string;
		const result = await this.client.queryDatabase({
			database_id: projectsDB,
			sorts: [{ timestamp: 'created_time', direction: 'descending' }]
		});
		const techs = await this.getTechs();
		result.map((item: any) =>
			this.projects.push(parseProjectResult(item, techs))
		);
		return this.projects;
	}
}

export const notionBlocks = new NotionBlocks();
