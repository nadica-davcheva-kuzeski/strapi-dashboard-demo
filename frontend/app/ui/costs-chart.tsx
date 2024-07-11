import { Cost } from "@/app/lib/definitions";
import { generateYAxis } from "@/app/lib/utils";

interface CostsChartProps {
	costs: Cost[];
}

export default function CostsChart({ costs }: CostsChartProps) {
	const chartHeight = 350;
	const { yAxisLabels, topLabel } = generateYAxis(costs);

	return (
		<div className="w-full md:col-span-4">
			<div className="rounded-xl bg-gray-50 p-4">
				<div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
					{/* y-axis */}
					<div
						className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
						style={{ height: `${chartHeight}px` }}
					>
						{yAxisLabels.map((label) => (
							<p key={label}>{label}</p>
						))}
					</div>

					{costs.map((cost: Cost) => (
						<div key={cost.year} className="flex flex-col items-center gap-2">
							{/* bars */}
							<div
								className="w-full rounded-md bg-blue-300"
								style={{
									height: `${(chartHeight / topLabel) * cost.cost}px`,
								}}
							></div>
							{/* x-axis */}
							<p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
								{cost.year}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
