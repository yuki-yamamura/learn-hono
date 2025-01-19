import { AddCompanyButton } from "@/models/companies/components/add-company-button";
import { Company } from "@/models/companies/components/company";
import { CompanyList } from "@/models/companies/components/company-list";

export default function Home() {
  return (
    <div>
      <Company id={1} />
      <CompanyList />
      <AddCompanyButton />
    </div>
  );
}
