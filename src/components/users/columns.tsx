import { createColumnHelper } from "@tanstack/react-table";
import { User } from "@/types";
import Link from "next/link";

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor("id", {
    header: "#",
    enableHiding: false,
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor("id", {
    header: "Ref",
    cell: (info) => (
      <Link className="underline" href={`/user/${info.renderValue()}`}>
        {info.renderValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("firstName", {
    header: "First Name",
    enableHiding: false,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
    enableHiding: false,
    cell: (info) => info.renderValue(),
  }),
];
