import { CdsGroup, CdsGroupParams, StrapiResponse } from "@/types/api";
import api from "./apiClient";

export const getCdsGroups = async ({
  search,
  category,
  page = 1,
  pageSize = 25,
}: CdsGroupParams): Promise<StrapiResponse<CdsGroup[]>> => {
  const params = new URLSearchParams();

  // Pagination
  params.append("pagination[page]", String(page));
  params.append("pagination[pageSize]", String(pageSize));

  // Category filter
  if (category && category !== "all-cds-groups") {
    // Exact match on tag
    params.append("filters[tag][$eq]", category);
  }

  // Search filter
  if (search) {
    params.append("filters[$or][0][name][$containsi]", search);
    params.append("filters[$or][1][title][$containsi]", search);
  }
  const response = await api.get<StrapiResponse<CdsGroup[]>>(
    `/cds-groups?${params.toString()}`,
  );
  return response.data;
};
