import { cn } from "@/lib";
import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

type NavLinkProps = LinkProps & {
  active?: boolean;
  children: ReactNode;
};

export const NavLink = ({ href, active, children, ...rest }: NavLinkProps) => {
  return (
    <Link
      className={cn(
        "group flex items-center gap-2 rounded-lg px-2 py-2 text-gray-300 outline-none ring-gray transition-colors duration-200 hover:bg-gray-50/70 dark:text-gray-200 dark:hover:bg-primary/5 dark:hover:text-white",
        {
          "bg-gray-50 font-medium dark:bg-primary/10 dark:text-white": active,
        }
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};
