export interface ChangelogRecord {
	version: string;
	date: {
		day: number;
		month: string;
		year: number;
	};
	/**
	 * Array of paragraphs.
	 *
	 * Marked list item: *{text}
	 */
	paragraphs?: string[];
}
