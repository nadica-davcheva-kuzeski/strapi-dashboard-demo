import { lusitana } from "@/app/ui/fonts";

export function Card({
  text,
  value,
}: {
  text: string;
  value: number | string;
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <p
        className={`${lusitana.className}
			truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
      <span
        className={`${lusitana.className}
			truncate rounded-l px-12 text-center text-xl`}
      >
        {text}
      </span>
    </div>
  );
}
