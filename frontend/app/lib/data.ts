import { flattenAttributes } from "@/app/lib/utils";
import qs from "qs";

const STRAPI_URL = process.env.STRAPI_URL;

export async function fetchLandingPageData(locale: string) {
  try {
    const query = qs.stringify({
      populate: {
        banner: {
          populate: {
            fields: ["title", "description"],
            buttons: {
              populate: {
                fields: ["id", "name", "url"],
              },
            },
          },
        },
        foundations: {
          populate: {
            fields: ["title", "description"],
            image: {
              populate: {
                fields: ["id", "name", "url"],
              },
            },
          },
        },
      },
      locale: locale,
    });

    const data = await fetch(STRAPI_URL + "/api/landing-page?" + query);
    const landingPage = await data.json();
    const flatten = flattenAttributes(landingPage.data);
    return flatten;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch landing page data.");
  }
}

export async function fetchCosts() {
  try {
    const query = qs.stringify({
      sort: ["date:asc"],
      pagination: {
        pageSize: 12,
        page: 1,
      },
    });
    const response = await fetch(STRAPI_URL + "/api/costs?" + query, {
      cache: "no-store",
    });
    const data = await response.json();
    const revenue = flattenAttributes(data.data);
    return revenue;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch costs data.");
  }
}

export async function fetchStatistics(locale: string) {
  const query = qs.stringify({
    populate: {
      fields: ["id", "text", "value"],
    },
    locale: locale,
  });

  try {
    const response = await fetch(STRAPI_URL + "/api/statistics?" + query, {
      headers: {},
    });

    const data = await response.json();
    const flattened = flattenAttributes(data.data);
    return { data: flattened, meta: data.meta };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to load statistics data.");
  }
}
