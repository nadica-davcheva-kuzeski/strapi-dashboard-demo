import { lusitana } from "@/app/ui/fonts";
import { fetchStatistics } from "@/app/lib/data";

export default async function Cards() {
  const cardData = await fetchStatistics();
  return (
    <>
      {cardData.data?.map((stat: any) => (
        <Card key={stat.id} text={stat.text} value={stat.value} />
      ))}
    </>
  );
}

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
      <span>{text}</span>
    </div>
  );
}
