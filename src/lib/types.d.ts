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

export interface BlogItem {
	slug: string;
	title: string;
	categories: string[];
	excerpt: string;
	published: boolean;
	hero: string;
	tldr: string;
	reading_time: number;
	created_at: string;
}
