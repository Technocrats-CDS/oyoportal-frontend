import api from "./apiClient";
import { StrapiResponse, Announcement, AnnouncementParams } from "@/types/api";

export const getAnnouncements = async ({
  page = 1,
  pageSize = 25,
  sort = "createdAt:desc",
  populate = "*",
}: AnnouncementParams = {}): Promise<StrapiResponse<Announcement[]>> => {
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

  const response = await api.get<StrapiResponse<Announcement[]>>(
    `/announcements?${params.toString()}`,
  );

  return response.data;
};
