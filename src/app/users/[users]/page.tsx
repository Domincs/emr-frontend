
import { DisplayUserDetails } from "@/components/users/details/display";

type Props = {
  params: {
    users: number;
  };
};

export default async function Home({ params: { users } }: Props) {
  // const usersList = inventoryService.getInventory("");
  const usersList = []

  return <DisplayUserDetails />;
}
