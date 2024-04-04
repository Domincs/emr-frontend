import { get } from "@/lib/http/fetch-wrapper";
import { APIResponse, Inventory } from "@/types";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getInventory = async (queryString = "") => {
  const inventory = await get<
    APIResponse<{
      results: Inventory[];
      count: number;
    }>
  >(`${baseUrl}/inventory/?${queryString}`);

  return inventory;
};
