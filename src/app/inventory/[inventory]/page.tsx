import { DisplayInventoryDetails } from "@/components/inventory/details/display";
import { inventoryService } from "@/services/inventory";

type Props = {
  params: {
    inventory: number;
  };
};

export default async function Home({ params: { inventory } }: Props) {
  const invetory = inventoryService.getInventory("");

  return <DisplayInventoryDetails />;
}
