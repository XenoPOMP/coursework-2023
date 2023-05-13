export type ChangelogParagraph = string | HTMLUListElement;

export interface ChangelogRecord {
	version: string;
	date: {
		day: number;
		month: string;
		year: number;
	};
	paragraphs?: ChangelogParagraph[];
}
