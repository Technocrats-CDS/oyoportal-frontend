export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface CdsGroup {
  id: string | number;
  documentId?: string;
  title: string;
  name: string;
  description: string;
  slug: string;
  status: string;
  tag: string;
  isActive: boolean;
  activities: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface CdsGroupParams {
  search?: string;
  category?: string;
  page?: number;
  pageSize?: number;
}

export interface Announcement {
  id: string | number;
  documentId?: string;
  slug: string;
  title: string;
  content: string;
  publish_at: string;
  isActive: boolean;
  status: string;
  priority: number;
  views: number;
  expires_at: string;
  tag: string;
  LGA?: unknown[];
  CDSGroup?: unknown[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface AnnouncementParams {
  page?: number;
  pageSize?: number;
  sort?: string;
  populate?: string;
}
