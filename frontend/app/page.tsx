import { fetchCosts, fetchLandingPageData } from "@/app/lib/data";
import CostsChart from "@/app/ui/costs-chart";
import { CostsChartSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page() {
	const landingPageData = await fetchLandingPageData();
	const costs = await fetchCosts();

	return (
		<main className="flex min-h-screen flex-col">
			<div>
				{landingPageData.banner.header} {landingPageData.banner.description}
			</div>
			<Suspense fallback={<CostsChartSkeleton />}>
				{costs && costs.length > 0 ? (
					<CostsChart costs={costs} />
				) : (
					<p className="mt-4 text-gray-400">No data available.</p>
				)}
			</Suspense>
		</main>
	);
}
