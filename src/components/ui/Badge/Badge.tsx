import { VariantProps, cva } from "cva";
import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib";

const badge = cva(
  "flex w-max items-center justify-center uppercase font-semibold rounded-lg border gap-1",
  {
    variants: {
      variant: {
        outline: null,
        solid: null,
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-[0.3rem]",
        lg: "rounded-xl",
        full: "rounded-full",
      },
      color: {
        primary: "text-black bg-primary border-primary",
        danger: "text-white bg-danger border-danger",
        info: "text-white bg-info border-info",
        warning: "text-black bg-warning border-warning",
        tertiary:
          "text-gray-300/70 bg-tertiary dark:bg-dark-200 dark:border-dark-100 dark:text-gray-200",
        secondary: "text-white bg-secondary border-secondary",
      },
      size: {
        sm: "h-5 min-w-[1.25rem] text-[80%] py-2 px-1",
        md: "h-6 text-[0.8rem] leading-6 p-2",
        lg: "h-8 p-2 text-[0.9rem]",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        color: "tertiary",
        className: "bg-white text-black dark:text-white dark:bg-dark-200/60",
      },
      {
        variant: "outline",
        color: "primary",
        className: "bg-transparent text-primary-200 dark:text-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        className: "bg-transparent text-secondary",
      },
      {
        variant: "outline",
        color: "danger",
        className: "bg-transparent text-danger",
      },
      {
        variant: "outline",
        color: "info",
        className: "bg-transparent text-info",
      },
      {
        variant: "outline",
        color: "warning",
        className: "bg-transparent text-warning",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "solid",
      color: "primary",
      rounded: "md",
    },
  }
);

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof badge> {}

export const Badge: FC<BadgeProps> = (props) => {
  const { className, variant, size, color, rounded, children, ...rest } = props;
  const classes = cn(badge({ variant, color, size, rounded }), className);

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
};

Badge.displayName = "Badge";
