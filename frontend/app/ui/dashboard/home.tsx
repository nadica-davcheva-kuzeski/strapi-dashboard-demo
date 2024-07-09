import { fetchAboutUs } from "@/app/lib/data";

export default async function AboutUs() {
  const result = await fetchAboutUs();
  return (
    <div>
      <h1>{result.Header}</h1>
      <p>{result.Body}</p>
    </div>
  );
}
