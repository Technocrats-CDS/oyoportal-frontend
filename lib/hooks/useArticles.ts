import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../api/articles";
import { ArticleParams } from "@/types/api";

export function useArticles(params?: ArticleParams) {
  return useQuery({
    queryKey: ["articles", params],
    queryFn: () => getArticles(params),
    staleTime: 5 * 60 * 1000, // 5 min cache
  });
}
