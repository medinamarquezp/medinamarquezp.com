export interface TimelineItem {
	type: 'academic' | 'professional';
	company: string;
	brand: string;
	title: string;
	start: Date;
	end: Date | null;
	description: string;
	techs?: Tech[];
}

export interface Filter {
	label: string;
	path: string;
}

export interface Tech {
	icon: string;
	label: string;
}

export interface Card {
	title: string;
	content: string;
	path: string;
	date: string;
}

export interface BlogItem {
	id: string;
	slug: string;
	title: string;
	categories: string[];
	excerpt: string;
	published: boolean;
	hero?: string;
	tldr: string;
	reading_time: number;
	created_at: string;
	created_at_timestamp: number;
	content?: string;
	related?: BlogItem[];
}

export interface BlogProps {
	slug?: string;
	categories?: string[];
}

export interface ProjectItem {
	title: string;
	categories: string[];
	phase: string;
	description: string;
	images: string[];
	techs: Tech[];
	created_at: string;
}
