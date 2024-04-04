"use client";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib";
import { ReactNode } from "react";

type ContentProps = TooltipPrimitive.TooltipContentProps & {
  title?: ReactNode;
};
export const Tooltip = ({
  children,
  title,
  className = "",
  sideOffset = 3,
  ...rest
}: ContentProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={300}>
        <TooltipPrimitive.Trigger>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={cn(
              "dark:text-gray-200 z-50 text-gray-300 border border-gray-100 bg-white/60 px-3 text-sm py-[0.35rem] dark:border-dark-100 font-medium dark:bg-dark/70 backdrop-blur rounded-lg",
              className
            )}
            sideOffset={sideOffset}
            {...rest}
          >
            {title}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
