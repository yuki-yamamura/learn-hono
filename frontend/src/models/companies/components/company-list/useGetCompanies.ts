import { useSuspenseQuery } from "@tanstack/react-query";
import { getCompanies } from "@/models/companies/api";

export const useGetCompanies = () => {
  return useSuspenseQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
};
