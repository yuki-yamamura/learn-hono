"use client";

import type { GetCompanyRequestParamsType } from "@/backend/validators/companies";
import { useGetCompany } from "./useGetCompany";
import { Suspense } from "react";

export const Company = ({ id }: GetCompanyRequestParamsType) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component id={id} />
  </Suspense>
);

const Component = ({ id }: GetCompanyRequestParamsType) => {
  const { data: company } = useGetCompany(id);

  return <div className="font-bold text-green-400">{company.id}</div>;
};
