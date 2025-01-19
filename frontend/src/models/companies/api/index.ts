import type {
  GetCompaniesResponseBodyType,
  GetCompanyRequestParamsType,
  GetCompanyResponseBodyType,
  PostCompanyRequestBodyType,
  PostCompanyResponseBodyType,
} from "@/backend/validators/companies";

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

const getCompany = async (id: GetCompanyRequestParamsType["id"]) => {
  const response = await fetch(`http://localhost:8787/companies/${id}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Failed to get company: ${response.status}`);
  }

  const data = (await response.json()) as GetCompanyResponseBodyType;

  return data;
};

const postCompany = async (data: PostCompanyRequestBodyType) => {
  const response = await fetch("http://localhost:8787/companies", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to post company: ${response.status}`);
  }

  const responseData = (await response.json()) as PostCompanyResponseBodyType;

  return responseData;
};

export { getCompanies, getCompany, postCompany };
