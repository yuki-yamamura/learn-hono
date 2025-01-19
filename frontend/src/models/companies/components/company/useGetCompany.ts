import { useSuspenseQuery } from "@tanstack/react-query";
import { getCompany } from "@/models/companies/api";
import { GetCompanyRequestParamsType } from "@/backend/validators/companies";

export const useGetCompany = (id: GetCompanyRequestParamsType["id"]) => {
  return useSuspenseQuery({
    queryKey: ["company", id],
    queryFn: () => getCompany(id),
  });
};
