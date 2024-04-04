import { cn } from "@/lib";
import type { BoxProps } from "@/components/ui";
import { Box } from "@/components/ui";

export const BodyContainer = ({ children, className }: BoxProps) => {
  return (
    <Box
      className={cn(
        "relative h-[calc(100vh-4rem)] overflow-y-auto pb-6",
        className
      )}
    >
      {children}
    </Box>
  );
};
