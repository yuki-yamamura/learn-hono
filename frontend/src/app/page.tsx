import { PostCompanyButton } from "@/components/post-company-button";
import { CompanyList } from "@/models/companies/components/company-list";

export default function Home() {
  return (
    <div>
      <CompanyList />
      <PostCompanyButton />
    </div>
  );
}
