import {
	fetchCosts,
	fetchLandingPageData,
	fetchStatistics,
} from "@/app/lib/data";
import { Card } from "@/app/ui/card";
import CostsChart from "@/app/ui/costs-chart";
import { CostsChartSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page() {
	const landingPageData = await fetchLandingPageData();
	const costs = await fetchCosts();
	const cardData = await fetchStatistics();

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
			<div className="p-10">
				{cardData.data?.map((stat: any) => (
					<Card key={stat.id} title={stat.text} value={stat.value} />
				))}
			</div>
		</main>
	);
}
