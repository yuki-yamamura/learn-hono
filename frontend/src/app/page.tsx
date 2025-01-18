import { ResponseData } from "@/types/response-data";

export default async function Home() {
  const data: ResponseData[] = await Promise.all([
    fetch("http://localhost:8787/companies").then((res) => res.json()),
    fetch("http://localhost:8787/employees").then((res) => res.json()),
  ]);

  return (
    <div>
      {data.map(({ message }, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
}
