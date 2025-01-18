import type { GetCompaniesResponseBodyType } from "@/backend/validators/companies";

const getCompanies = async () => {
  const response = await fetch("http://localhost:8787/companies", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Failed to get companies: ${response.status}`);
  }

  const data = (await response.json()) as GetCompaniesResponseBodyType;

  return data;
};

export { getCompanies };
