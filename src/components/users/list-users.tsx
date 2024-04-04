"use client";
import { Box, Container, DataTable } from "@/components/ui";
import { BodyContainer } from "@/components/shared";
import { Header } from "./header";
import { Intro } from "./intro";
import { User } from "@/types";
import { columns } from "./columns";
import { usePagination } from "@/hooks";

export const ListUsers = ({
  users,
}: {
  users: {
    results: User[];
    count: number;
  };
}) => {
  const { table } = usePagination<User>({
    data: users.results,
    columns,
    totalCount: users.count,
  });
  return (
    <Box>
      <Header />
      <BodyContainer>
        <Container>
          <Intro />
          <DataTable
            table={table}
            totalRows={users.count}
            className="border-t dark:border-dark-200 border-gray-100/60"
          />
        </Container>
      </BodyContainer>
    </Box>
  );
};
