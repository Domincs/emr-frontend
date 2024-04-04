import { createColumnHelper } from "@tanstack/react-table";
import { Inventory } from "@/types";
import Link from "next/link";

const columnHelper = createColumnHelper<Inventory>();

export const columns = [
  columnHelper.accessor("id", {
    header: "#",
    enableHiding: false,
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor("id", {
    header: "Ref",
    cell: (info) => (
      <Link className="underline" href={`/intentory/${info.renderValue()}`}>
        {info.renderValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("drugId", {
    header: "Drug Ref",
    enableHiding: false,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("quantity", {
    header: "Quantity",
    enableHiding: false,
    cell: (info) => info.renderValue(),
  }),
];
