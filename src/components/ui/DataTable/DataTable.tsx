import { NoRecords, Pagination } from "@/components/ui";
import { Table as ReactTable, flexRender } from "@tanstack/react-table";
import { Table } from "../Table/Table";
import { ComponentProps } from "react";

type TableProps = ComponentProps<typeof Table>;
type DataTableProps<TData> = {
  table: ReactTable<TData>;
  totalRows?: number;
} & TableProps;

export const DataTable = <TbData,>(props: DataTableProps<TbData>) => {
  const { table, totalRows = 0, ...rest } = props;

  const totalColumns = table.getAllFlatColumns().length;

  const allRows = totalRows || table.getPrePaginationRowModel().rows.length;

  return (
    <>
      <Table {...rest}>
        {table.getRowModel().rows.length > 0 && (
          <Table.Head>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Table.Th key={header.id} colSpan={header.colSpan}>
                    <span className="flex w-max mr-3">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </span>
                  </Table.Th>
                ))}
              </Table.Tr>
            ))}
          </Table.Head>
        )}

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
      {table.getPageCount() > 1 && (
        <Pagination className="border-t border-gray-100/60 pt-3">
          <Pagination.Info
            allRows={allRows}
            visibleRows={table.getRowModel().rows.length}
          />
          <Pagination.Controls
            pageSize={table.getState().pagination.pageSize}
            pageIndex={table.getState().pagination.pageIndex}
            pageCount={table.getPageCount()}
            canPreviousPage={table.getCanPreviousPage()}
            canNextPage={table.getCanNextPage()}
            previousPage={table.previousPage}
            nextPage={table.nextPage}
            setPageIndex={table.setPageIndex}
            setPageSize={table.setPageSize}
          />
        </Pagination>
      )}
    </>
  );
};
