"use client";

import { ArrowDownIcon, ArrowUpIcon, CheckIcon } from "@/components/icons";
import { cn } from "@/lib";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

type SelectProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  label?: string;
};
export const Select = ({ required, label, ...rest }: SelectProps) => (
  <label className="relative block">
    {label && (
      <span className="mb-2 block">
        {label}
        {required && <span className="text-danger">*</span>}
      </span>
    )}
    <SelectPrimitive.Root {...rest} required={required} />
  </label>
);

const Group = SelectPrimitive.Group;

type InputProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Value>;
const Input = forwardRef<HTMLButtonElement, InputProps>(
  ({ className, ...rest }, ref) => (
    <SelectPrimitive.Value ref={ref} {...rest} className={cn("", className)} />
  )
);
Input.displayName = "SelectInput";

const Trigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-[2.2rem] leading-[2.2rem] w-full items-center justify-between whitespace-nowrap outline-none rounded-[0.4rem] border border-gray-100 bg-gray-50/60 dark:bg-dark-200/50 0 dark:border-dark-100/60 dark:ring-offset-dark px-3",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ArrowDownIcon className="h-3.5 w-auto opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
Trigger.displayName = SelectPrimitive.Trigger.displayName;

const ScrollUpButton = forwardRef<
  ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ArrowUpIcon className="h-4 w-auto" />
  </SelectPrimitive.ScrollUpButton>
));
ScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const ScrollDownButton = forwardRef<
  ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ArrowDownIcon className="h-4 w-auto" />
  </SelectPrimitive.ScrollDownButton>
));
ScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border shadow-md bg-white/80 dark:bg-dark-200/80 dark:text-gray-200 backdrop-blur text-gray-300 border-gray-100 dark:border-dark-100 w-max shadow-dark/10 dark:shadow-dark/20",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <ScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <ScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const Label = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
));
Label.displayName = SelectPrimitive.Label.displayName;

const Item = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full hover:dark:bg-dark-50 rounded hover:bg-gray-100/50 select-none items-center py-[0.3rem] pl-2 pr-8 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-auto" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
Item.displayName = SelectPrimitive.Item.displayName;

const Separator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-primary", className)}
    {...props}
  />
));
Separator.displayName = SelectPrimitive.Separator.displayName;

Select.Trigger = Trigger;
Select.Content = SelectContent;
Select.Label = Label;
Select.Group = Group;
Select.Option = Item;
Select.Separator = Separator;
Select.Input = Input;
