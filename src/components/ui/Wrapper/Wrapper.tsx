import { cn } from "@/lib";
import { HTMLAttributes, JSXElementConstructor, ReactNode } from "react";
import { Box } from "../Box/Box";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  as?: "div" | "form" | "section" | "article" | JSXElementConstructor<any>;
  children?: ReactNode;
}

export const Wrapper = ({
  children,
  className,
  as = "div",
  ...rest
}: Props) => {
  return (
    <Box
      as={as}
      className={cn(
        "rounded-lg bg-gray-50/40 dark:bg-dark-100/20 py-2 border border-gray-100/60 dark:border-dark-200",
        className
      )}
      {...rest}
    >
      {children}
    </Box>
  );
};

const Header = ({ children, className, ...rest }: Props) => {
  return (
    <Box
      className={cn(
        "border-b border-gray-100/60 dark:border-dark-200 px-6 pb-2",
        className
      )}
      {...rest}
    >
      {children}
    </Box>
  );
};

const Body = ({ children, className, ...rest }: Props) => {
  return (
    <Box className={cn("px-6 py-4", className)} {...rest}>
      {children}
    </Box>
  );
};

Wrapper.displayName = "Wrapper";
Wrapper.Header = Header;
Wrapper.Body = Body;
