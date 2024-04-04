import { Table } from "@tanstack/react-table";

import { Popover } from "../Popover/Popover";
import { Filter } from "lucide-react";
import { Button } from "../Button/Button";
import { Text, Flex, Divider } from "@/components/ui";
import { ArrowDownIcon } from "@/components/icons";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
  size?: "xs" | "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  label?: string;
}

export function DataTableViewOptions<TData>({
  table,
  size = "sm",
  rounded = "md",
  label = "Columns",
}: DataTableViewOptionsProps<TData>) {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button
          color="tertiary"
          rounded={rounded}
          size={size}
          variant="outline"
          leftIcon={<Filter className="h-[1.1rem] w-auto" />}
          rightIcon={<ArrowDownIcon className="h-4 w-auto" />}
        >
          {label}
        </Button>
      </Popover.Trigger>
      <Popover.Content align="end" className="w-[24rem]">
        <Text className="mt-2 mb-3 px-4" fontWeight="medium">
          Display column options
        </Text>
        <Divider className="mb-4" />
        <Flex gap={2} wrap className="px-4 pb-2">
          {table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== "undefined" && column.getCanHide()
            )
            .map((column) => {
              return (
                <Button
                  color={column.getIsVisible() ? "primary" : "tertiary"}
                  key={column.id}
                  onClick={() => column.toggleVisibility()}
                  rounded="sm"
                  size="xs"
                  variant={column.getIsVisible() ? "solid" : "outline"}
                >
                  {column.columnDef?.header?.toString() ||
                    column.id.replace(/_/g, " ")}
                </Button>
              );
            })}
        </Flex>
        <Divider className="my-2" />
        <Flex className="px-4 pb-[0.1rem]" justify="end">
          <Button
            className="text-primary dark:text-primary"
            color="tertiary"
            onClick={() => {
              table.resetColumnVisibility();
            }}
            size="sm"
            variant="naked"
          >
            Reset to default
          </Button>
        </Flex>
      </Popover.Content>
    </Popover>
  );
}
