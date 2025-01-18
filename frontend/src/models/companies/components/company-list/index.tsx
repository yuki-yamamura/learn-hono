"use client";

import { Suspense } from "react";
import { useGetCompanies } from "./useGetCompanies";

export const CompanyList = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

const Component = () => {
  const { data: companies } = useGetCompanies();

  return (
    <div>
      {companies.map((company) => (
        <div key={company.id}>{company.name}</div>
      ))}
    </div>
  );
};
