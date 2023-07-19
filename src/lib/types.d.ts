export interface TimelineItem {
	type: 'academic' | 'professional';
	company: string;
	brand: string;
	title: string;
	start: Date;
	end: Date | null;
	description: string;
	techs: Tech[];
}

export interface Tech {
	icon: string;
	label: string;
}
