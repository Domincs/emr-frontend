"use client";
import { Box, Container, DataTable } from "@/components/ui";
import { BodyContainer } from "@/components/shared";
import { Header } from "./header";
import { Intro } from "./intro";
import { Inventory } from "@/types";
import { columns } from "./columns";
import { usePagination } from "@/hooks";

export const ListInventory = ({
  inventory,
}: {
  inventory: {
    results: Inventory[];
    count: number;
  };
}) => {
  const { table } = usePagination<Inventory>({
    data: inventory.results,
    columns,
    totalCount: inventory.count,
  });
  return (
    <Box>
      <Header />
      <BodyContainer>
        <Container>
          <Intro />
          <DataTable
            table={table}
            totalRows={inventory.count}
            className="border-t dark:border-dark-200 border-gray-100/60"
          />
        </Container>
      </BodyContainer>
    </Box>
  );
};
