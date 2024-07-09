import { fetchLandingPageData } from "@/app/lib/data";

export default async function Page() {
  const data = await fetchLandingPageData();

  console.log(data);
  return (
    <main className="flex min-h-screen flex-col">
      {data.banner.header} {data.banner.description}
    </main>
  );
}
