import { client } from "@/sanity/lib/client";

export const fetchBlogsData = async (query) => {
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Failed to fetch data", error);
    return [];
  }
};
