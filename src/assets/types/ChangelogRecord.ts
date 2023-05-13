export interface ChangelogRecord {
	version: string;
	date: {
		day: number;
		month: number;
		year: number;
	};
	/**
	 * Array of paragraphs.
	 *
	 * Marked list item: *{text}
	 */
	paragraphs?: string[];
}
