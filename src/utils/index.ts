import { format as formatDateFns } from "date-fns";

type Format = "long" | "short";
export const formatDate = (date: string | Date, format: Format = "long") => {
  if (!date) {
    return "-";
  }
  return formatDateFns(
    new Date(date),
    format === "long" ? "LLL dd, y" : "LLL dd"
  );
};

export const getPagesCount = ({
  pageSize,
  totalCount,
}: {
  pageSize: number;
  totalCount: number;
}) => {
  return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
};
