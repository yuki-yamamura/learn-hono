import { PostCompanyRequestBodyType } from "@/backend/validators/companies";
import { postCompany } from "@/models/companies/api";
import { useMutation } from "@tanstack/react-query";

export const usePostCompany = (data: PostCompanyRequestBodyType) => {
  return useMutation({ mutationFn: () => postCompany(data) });
};
