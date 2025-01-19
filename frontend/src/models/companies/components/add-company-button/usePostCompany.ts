import {
  PostCompanyRequestBodyType,
  PostCompanyResponseBodyType,
} from "@/backend/validators/companies";
import { postCompany } from "@/models/companies/api";
import { useMutation } from "@tanstack/react-query";

export const usePostCompany = () => {
  return useMutation<
    PostCompanyResponseBodyType,
    Error,
    PostCompanyRequestBodyType
  >({ mutationFn: (args) => postCompany(args) });
};
