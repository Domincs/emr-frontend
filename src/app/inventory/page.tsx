import { ListInventory } from "@/components/inventory/list-inventory";
import { inventoryService } from "@/services/inventory";
import qs from "qs";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    query?: string;
    to?: string;
    from?: string;
    page_size?: string;
  };
}) {
  // search params
  const page = Number(searchParams?.page) || 1;
  const searchQuery = searchParams?.query || null;
  const from = searchParams?.from || null;
  const to = searchParams?.to || null;
  const page_size = searchParams?.page_size || null;

  const query = qs.stringify(
    { page, page_size, from, to, policy_type: 1, query: searchQuery },
    {
      skipNulls: true,
    }
  );
  // get data
  const inventory = await inventoryService.getInventory(query);
  return <ListInventory inventory={inventory} />;
}
