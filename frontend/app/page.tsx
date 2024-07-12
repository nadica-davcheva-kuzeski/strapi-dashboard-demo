import {
	fetchCosts,
	fetchLandingPageData,
	fetchStatistics,
} from "@/app/lib/data";
import { Card } from "@/app/ui/card";
import CostsChart from "@/app/ui/costs-chart";
import { CostsChartSkeleton } from "@/app/ui/skeletons";
import { cookies } from "next/headers";
import Image from "next/image";
import { Suspense } from "react";
const STRAPI_URL = process.env.STRAPI_URL;

export default async function Page() {
	const locale = cookies().get("lang");
	const landingPageData = await fetchLandingPageData(locale?.value || "en");
	console.log("landingPageData", landingPageData);
	const costs = await fetchCosts();
	const cardData = await fetchStatistics(locale?.value || "en");

	return (
		<>
			{landingPageData && (
				<div className="bg-blue-600 w-full flex justify-center items-center py-16">
					<div className="text-center max-w-3xl">
						<h1 className="text-4xl text-white font-bold mb-4">
							{landingPageData.banner.title}
						</h1>
						<p className="text-xl text-white mb-8">
							{landingPageData.banner.description}
						</p>
						<div className="space-x-4">
							{landingPageData.banner.buttons.map(({ id, name, url }) => (
								<a
									key={id}
									href={url}
									className="bg-white text-custom-blue  text-sm text-light py-2 px-4 rounded transition-all duration-300"
								>
									{name}
								</a>
							))}
						</div>
					</div>
				</div>
			)}
			<section className="container mx-auto flex-grow p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
				<div className="flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-8 bg-custom-blue text-black">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<h2 className="text-4xl font-bold text-left mb-4">
							{landingPageData.foundations.title}
						</h2>
						<p className="text-lg">{landingPageData.foundations.description}</p>
					</div>
					<div className="md:w-1/2">
						<Image
							src={
								STRAPI_URL +
								landingPageData.foundations.image.data.attributes.url
							}
							alt="Descriptive Alt Text"
							width={500}
							height={300}
							className="rounded-lg shadow-lg"
						/>
					</div>
				</div>
			</section>
			<section className="w-full flex justify-center items-center bg-gray-50 py-16">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
					{cardData.data?.map((stat: any) => (
						<Card key={stat.id} text={stat.text} value={stat.value} />
					))}
				</div>
			</section>
			<section className="container mx-auto flex-grow p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
				<div className="flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-8 bg-custom-blue text-black">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<Suspense fallback={<CostsChartSkeleton />}>
							{costs && costs.length > 0 ? (
								<CostsChart costs={costs} />
							) : (
								<p className="mt-4 text-gray-400">No data available.</p>
							)}
						</Suspense>
					</div>
					<div className="md:w-1/2">
						<h2 className="text-4xl font-bold text-left mb-4">
							{landingPageData.report.title}
						</h2>
						<p className="text-lg">{landingPageData.report.description}</p>
					</div>
				</div>
			</section>
		</>
	);
}
