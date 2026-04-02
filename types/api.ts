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
