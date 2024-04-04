import { NoRecords } from "@/components/ui";
import {
  ColumnDef,
  Table as ReactTable,
  flexRender,
} from "@tanstack/react-table";
import { Button, Flex, Menu, Table, Text } from "..";
import { ComponentProps } from "react";
import { BsCheckLg } from "react-icons/bs";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import {
  RxCaretSort,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from "react-icons/rx";
import { cn } from "@/lib";

type TableProps = ComponentProps<typeof Table>;

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  table: ReactTable<TData>;
} & TableProps;

export const RawDataTable = <TbData, TValue>(
  props: DataTableProps<TbData, TValue>
) => {
  const { columns, data, table, ...rest } = props;
  const totalColumns = table.getAllColumns().length;
  const allRows = table.getPrePaginationRowModel().rows.length;

  return (
    <>
      <Table {...rest}>
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.Head>
        <Table.Body>
          {table.getRowModel().rows.map((row) => (
            <Table.Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
          {table.getRowModel().rows.length === 0 && (
            <Table.Tr>
              <Table.Td colSpan={totalColumns}>
                <NoRecords />
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Body>
      </Table>
      <Flex
        gap={2}
        align="center"
        justify="between"
        className="py-3 border-t border-tertiary-50/80 dark:border-secondary-200"
      >
        <Text color="muted" className="pl-[2px]">
          Showing {table.getRowModel().rows.length} of {allRows} records
        </Text>
        <Flex align="center" gap={12}>
          <Flex align="center" gap={12}>
            <Flex align="center" gap={3}>
              <Text>Rows per page</Text>
              <Menu>
                <Menu.Button>
                  <Button
                    size="xs"
                    color="tertiary"
                    variant="outline"
                    rounded="md"
                    className="px-4 gap-2"
                    rightIcon={
                      <RxCaretSort
                        strokeWidth={0.3}
                        className="relative -top-[0.4px]"
                      />
                    }
                  >
                    {table.getState().pagination.pageSize}
                  </Button>
                </Menu.Button>
                <Menu.Items className="w-36">
                  {[10, 20, 30, 50].map((size) => (
                    <Menu.Item
                      onClick={() => table.setPageSize(size)}
                      key={size}
                      className={cn("py-2 flex items-center justify-between", {
                        "bg-primary/20 dark:bg-primary/10 hover:bg-primary dark:hover:bg-primary":
                          table.getState().pagination.pageSize === size,
                      })}
                    >
                      {size}
                      {table.getState().pagination.pageSize === size && (
                        <BsCheckLg />
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Menu>
            </Flex>

            <Text>
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Button
              variant="outline"
              rounded="md"
              color="tertiary"
              className="aspect-square"
              size="xs"
              leftIcon={
                <RxDoubleArrowLeft className="h-5 w-auto" strokeWidth={0.3} />
              }
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">First page</span>
            </Button>
            <Button
              variant="outline"
              color="tertiary"
              rounded="md"
              className="aspect-square"
              size="xs"
              rightIcon={<RiArrowLeftSLine className="h-6 w-auto" />}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Previous page</span>
            </Button>
            <Button
              variant="outline"
              rounded="md"
              className="aspect-square"
              color="tertiary"
              rightIcon={<RiArrowRightSLine className="h-6 w-auto" />}
              size="xs"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Next page</span>
            </Button>
            <Button
              variant="outline"
              color="tertiary"
              rounded="md"
              className="aspect-square"
              size="xs"
              rightIcon={
                <RxDoubleArrowRight className="h-5 w-auto" strokeWidth={0.3} />
              }
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Last page</span>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
