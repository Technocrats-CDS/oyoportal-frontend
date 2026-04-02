import { useQuery } from "@tanstack/react-query";
import { getCdsGroups } from "../api/cds-groups";
import { CdsGroupParams } from "@/types/api";

export function useCdsGroups(params: CdsGroupParams) {
  return useQuery({
    queryKey: ["cds-groups", params],
    queryFn: () => getCdsGroups(params),
    staleTime: 5 * 60 * 1000, // 5 min cache
  });
}
