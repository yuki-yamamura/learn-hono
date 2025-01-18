import { PostCompanyButton } from "@/components/post-company-button";
import { ResponseData } from "@/types";

export default async function Home() {
  const data: ResponseData[] = await Promise.all([
    fetch("http://localhost:8787/companies").then((res) => res.json()),
    fetch("http://localhost:8787/employees").then((res) => res.json()),
  ]);

  return (
    <div>
      <div>
        {data.map(({ message }, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <PostCompanyButton />
    </div>
  );
}
