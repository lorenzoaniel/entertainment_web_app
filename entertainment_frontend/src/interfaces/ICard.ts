/**
 * Represents a card with information about a media item (e.g., movie, book, etc.).
 */
export interface ICard {
	/**
	 * The title of the media item.
	 */
	title: string;

	/**
	 * The year when the media item was released or published.
	 */
	year: number;

	/**
	 * The category 'movie' or 'tv show'
	 */
	category: string;

	/**
	 * The rating or review score of the media item.
	 */
	rating: string;

	/**
	 * Indicates whether the card is bookmarked or not.
	 */
	isBookmarked: boolean;

	/**
	 * Indicates whether the media item is trending or popular.
	 */
	isTrending: boolean;

	/**
	 * The URL or source of the thumbnail image for the media item.
	 */
	thumbnailSrc: string;
}
