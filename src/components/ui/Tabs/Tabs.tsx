"use client";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib";
import React, { ComponentProps } from "react";

type TabProps = ComponentProps<typeof TabsPrimitive.Trigger> & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};
const Trigger = ({
  children,
  value,
  className,
  leftIcon,
  rightIcon,
  ...rest
}: TabProps) => {
  return (
    <TabsPrimitive.Trigger
      value={value}
      className={cn(
        "relative w-max dark:data-[state=active]:border-dark-50 data-[state=active]:font-medium data-[state=active]:border dark:data-[state=active]:shadow dark:shadow-dark rounded-[0.4rem] border-gray-200/60 text-gray-300/80 dark:text-gray px-3 py-[0.2rem] hover:dark:text-gray-200 focus:dark:bg-dark-100 focus:outline-0 dark:data-[state=active]:text-gray-100 data-[state=active]:text-gray-300 data-[state=active]:bg-white data-[state=active]:dark:bg-dark-100/60 flex items-center gap-2",
        className
      )}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </TabsPrimitive.Trigger>
  );
};

type ListProps = ComponentProps<typeof TabsPrimitive.List>;
const List = ({ children, className, ...rest }: ListProps) => {
  return (
    <TabsPrimitive.List
      className={cn(
        "flex flex-wrap w-max mx-12 rounded-lg bg-gray-100/40 px-[0.21rem] py-[0.2rem] dark:bg-dark-200/50",
        className
      )}
      {...rest}
    >
      {children}
    </TabsPrimitive.List>
  );
};

type ContentProps = ComponentProps<typeof TabsPrimitive.Content>;
const Panel = ({ children, value, ...rest }: ContentProps) => {
  return (
    <TabsPrimitive.Content value={value} {...rest}>
      {children}
    </TabsPrimitive.Content>
  );
};

type TabsProps = ComponentProps<typeof TabsPrimitive.Root>;
export const Tabs = ({ children, ...rest }: TabsProps) => {
  return <TabsPrimitive.Root {...rest}>{children}</TabsPrimitive.Root>;
};

Tabs.Tab = Trigger;
Tabs.List = List;
Tabs.Panel = Panel;
