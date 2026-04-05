export interface StrapiResponse<T> {
  data: T | null;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
    [key: string]: unknown;
  };
  error?: {
    status: number;
    name: string;
    message: string;
    details?: unknown;
  };
}

export interface CdsGroup {
  id?: string | number;
  documentId?: string;
  title: string;
  name: string;
  description: string;
  slug?: string;
  status?: "active" | "inactive" | "draft";
  tag?: string;
  isActive?: boolean;
  activities?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface CdsGroupParams {
  search?: string;
  category?: string;
  page?: number;
  pageSize?: number;
}

export interface Announcement {
  id?: string | number;
  documentId?: string;
  slug?: string;
  title: string;
  content: string;
  publishedAt?: string;
  isActive?: boolean;
  status?: string;
  priority?: number;
  views?: number;
  expiresAt?: string;
  tag?: string;
  LGA?: unknown[];
  CDSGroup?: unknown[];
  createdAt: string;
  updatedAt: string;
}

export interface AnnouncementParams {
  page?: number;
  pageSize?: number;
  sort?: string;
  populate?: string;
}

export interface StrapiMedia {
  id?: string | number;
  documentId?: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  url: string;
  formats?: unknown;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  width?: number;
  height?: number;
  provider?: string;
}

export interface ArticleAuthor {
  id?: string | number;
  documentId?: string;
  name: string;
  email?: string;
  avatar?: StrapiMedia;
}

export interface ArticleCategory {
  id?: string | number;
  documentId?: string;
  name: string;
  slug: string;
  description?: string;
}

export interface ArticleBlock {
  id?: string | number;
  __component: string;
  [key: string]: unknown;
}

export interface Article {
  id?: string | number;
  documentId?: string;
  title: string;
  description: string;
  slug: string;
  cover?: StrapiMedia;
  author?: ArticleAuthor;
  category?: ArticleCategory;
  blocks?: ArticleBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface ArticleParams {
  page?: number;
  pageSize?: number;
  sort?: string;
  populate?: string;
  filters?: Record<string, unknown>;
}
