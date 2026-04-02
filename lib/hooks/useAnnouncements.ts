import { useQuery } from "@tanstack/react-query";
import { getAnnouncements } from "../api/announcements";
import { AnnouncementParams } from "@/types/api";

export function useAnnouncements(params?: AnnouncementParams) {
  return useQuery({
    queryKey: ["announcements", params],
    queryFn: () => getAnnouncements(params),
    staleTime: 5 * 60 * 1000, // 5 min cache
  });
}
