import {
  ColumnDef,
  PaginationState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import { getPagesCount } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import nProgress from "nprogress";

export const usePagination = <T,>({
  columns,
  data,
  totalCount,
  defaultPageSize = 20,
}: {
  data: T[];
  columns: ColumnDef<T, any>[];
  totalCount: number;
  defaultPageSize?: number;
}) => {
  const hasMounted = useRef(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const currentPageSize =
    Number(searchParams.get("page_size")) || defaultPageSize;

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: currentPage - 1,
    pageSize: currentPageSize,
  });
  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data,
    columns,
    pageCount: getPagesCount({
      pageSize,
      totalCount,
    }),
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    state: {
      pagination,
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (currentPage !== pageIndex + 1 || currentPageSize !== pageSize) {
      if (pageIndex === 0) {
        params.delete("page");
      } else {
        params.set("page", (pageIndex + 1).toString());
      }
      if (pageSize === 20) {
        params.delete("page_size");
      } else {
        params.set("page_size", pageSize.toString());
      }

      nProgress.start();
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [
    pageIndex,
    pageSize,
    currentPage,
    currentPageSize,
    searchParams,
    pathname,
    router,
  ]);

  useEffect(() => {
    if (hasMounted.current) {
      nProgress.done();
    } else {
      hasMounted.current = true;
    }
  }, [data]);

  return { table };
};
