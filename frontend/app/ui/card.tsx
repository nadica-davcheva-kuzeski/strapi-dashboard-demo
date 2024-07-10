import { montserrat } from "@/app/ui/fonts";

export function Card({
	text,
	value,
}: {
	text: string;
	value: number | string;
}) {
	return (
		<div className="rounded-xl bg-white px-12 py-8 shadow-sm text-center text-dark">
			<p
				className={`${montserrat.className}
			truncate rounded-xl text-xl font-medium`}
			>
				{value}
			</p>
			<p
				className={`${montserrat.className}
			truncate rounded-l px-12 font-light`}
			>
				{text}
			</p>
		</div>
	);
}
