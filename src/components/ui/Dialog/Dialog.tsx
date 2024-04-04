"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  forwardRef,
} from "react";
import { MdOutlineClose } from "react-icons/md";
import { Box } from "../Box/Box";

import { cn } from "@/lib";

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props} />
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/20 dark:bg-dark/50 flex items-center justify-center",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

type DialogCloseProps = ComponentProps<typeof DialogPrimitive.Close>;
const DialogClose = ({ className, ...rest }: DialogCloseProps) => (
  <DialogPrimitive.Close
    {...rest}
    data-testid="close-modal"
    className={cn(
      "rounded-lg inline-block hover:bg-gray-50 dark:hover:bg-dark-100 p-[2px] transition outline-none dark:text-gray-200",
      className
    )}
  >
    <MdOutlineClose className="h-6 w-auto" />
    <span className="sr-only">Close</span>
  </DialogPrimitive.Close>
);

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    hideClose?: boolean;
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
  }
>(({ className, children, hideClose, size = "md", ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay>
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "w-full bg-white/90 border border-gray-200 shadow-dark/20 dark:shadow-dark dark:border-dark-100 dark:bg-dark-200/80 shadow-lg backdrop-blur rounded-lg overflow-hidden max-w-3xl relative",
          {
            "max-w-md": size === "sm",
            "max-w-xl": size === "md",
            "max-w-4xl": size === "lg",
            "max-w-6xl": size === "xl",
            "max-w-[90rem]": size === "2xl",
          },
          className
        )}
        {...props}
      >
        {children}
        {!hideClose && <DialogClose />}
      </DialogPrimitive.Content>
    </DialogOverlay>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("py-4", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  variant = "naked",
  justify,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  variant?: "naked" | "bordered";
  justify?: "start" | "end" | "center" | "between";
}) => (
  <div
    className={cn(
      "flex px-6 pb-[0.8rem]",
      {
        "border-t border-gray-100/60 dark:border-dark-100 pt-[0.8rem]":
          variant !== "bordered",
        "justify-start": justify === "start",
        "justify-end": justify === "end",
        "justify-center": justify === "center",
        "justify-between": justify === "between",
      },
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "font-medium leading-none tracking-tight dark:text-white",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "text-[0.95rem] text-tertiary-300 dark:text-tertiary-100 px-6",
      className
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

type DialogProps = ComponentProps<typeof DialogPrimitive.Root>;

type BodyProps = ComponentProps<typeof Box>;

const Body = ({ className, ...props }: BodyProps) => (
  <Box
    className={cn(
      "px-6 pt-2 pb-4 dark:text-white max-h-[80vh] overflow-y-auto",
      className
    )}
    {...props}
  />
);

export const Dialog = ({ children, ...rest }: DialogProps) => (
  <DialogPrimitive.Root {...rest}>{children}</DialogPrimitive.Root>
);

Dialog.Header = DialogHeader;
Dialog.Trigger = DialogTrigger;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Content = DialogContent;
Dialog.Body = Body;
Dialog.Footer = DialogFooter;
Dialog.Close = DialogClose;
