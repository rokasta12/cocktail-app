export interface GetCocktailResponse {
	data: Cocktail[];
	meta: Meta;
}

export interface Cocktail {
	id: number;
	attributes: CocktailData;
}

export interface CocktailData {
	name: string;
	recipe: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	hero_image: { data: HeroImage };
}

interface HeroImage {
	id: number;
	attributes: HeroImageData;
}
export interface HeroImageData {
	name: string;
	alternativeText: any;
	caption: any;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: any;
	provider: string;
	provider_metadata: ProviderMetadata3;
	createdAt: string;
	updatedAt: string;
}
export interface Formats {
	small: Small;
	thumbnail: Thumbnail;
}

export interface Small {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: any;
	size: number;
	width: number;
	height: number;
	provider_metadata: ProviderMetadata;
}
export interface ProviderMetadata {
	public_id: string;
	resource_type: string;
}

export interface Thumbnail {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: any;
	size: number;
	width: number;
	height: number;
	provider_metadata: ProviderMetadata2;
}
export interface ProviderMetadata2 {
	public_id: string;
	resource_type: string;
}
export interface ProviderMetadata3 {
	public_id: string;
	resource_type: string;
}
export interface Meta {
	pagination: Pagination;
}

export interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}
