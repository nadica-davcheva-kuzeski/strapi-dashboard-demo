import { fetchStatistics } from "@/app/lib/data";
import { Card } from "../card";

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
