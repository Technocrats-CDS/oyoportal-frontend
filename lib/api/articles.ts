import api from "./apiClient";
import { StrapiResponse, Article, ArticleParams } from "@/types/api";

export const getArticles = async ({
  page = 1,
  pageSize = 25,
  sort = "createdAt:desc",
  populate = "*",
  filters,
}: ArticleParams = {}): Promise<StrapiResponse<Article[]>> => {
  const params = new URLSearchParams();

  // Pagination
  params.append("pagination[page]", String(page));
  params.append("pagination[pageSize]", String(pageSize));

  // Sorting
  if (sort) {
    params.append("sort", sort);
  }

  // Populate relations
  if (populate) {
    params.append("populate", populate);
  }

  // Filters
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      // Basic support for shallow filters (e.g., filters[category][slug][$eq]=foo)
      if (typeof value === "string" || typeof value === "number") {
        params.append(`filters${key}`, String(value));
      }
    });
  }

  const response = await api.get<StrapiResponse<Article[]>>(
    `/articles?${params.toString()}`,
  );

  return response.data;
};

export const getArticleById = async (
  id: string | number,
  populate = "*",
): Promise<StrapiResponse<Article>> => {
  const params = new URLSearchParams();

  if (populate) {
    params.append("populate", populate);
  }

  const response = await api.get<StrapiResponse<Article>>(
    `/articles/${id}?${params.toString()}`,
  );

  return response.data;
};
