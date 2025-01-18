import { PostCompanyButton } from "@/components/post-company-button";

export default async function Home() {
  const data = await Promise.all([
    fetch("http://localhost:8787/companies").then((res) => res.json()),
  ]);

  console.log(JSON.stringify(data, null, 2));

  return (
    <div>
      <div>Hello</div>
      <PostCompanyButton />
    </div>
  );
}
