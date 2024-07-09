import { fetchLandingPageData } from "@/app/lib/data";

export default async function Page() {
	const data = await fetchLandingPageData();

	return <main className="flex min-h-screen flex-col">{data.Header}</main>;
}
