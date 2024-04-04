import { FC, InputHTMLAttributes } from "react";

import { cn } from "@/lib";
import { SearchIcon } from "@/components/icons";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
  withIcon?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const {
    label,
    className,
    required,
    value,
    helpText,
    withIcon = false,
    type = "text",
    ...rest
  } = props;
  return (
    <label className="relative block">
      {label && (
        <span className="mb-2 block">
          {label}
          {required && <span className="text-danger">*</span>}
        </span>
      )}
      {withIcon && (
        <SearchIcon className="absolute h-4 w-auto top-1/2 left-3 opacity-60 transform -translate-y-1/2" />
      )}
      <input
        type={type}
        required={required}
        step={0.1}
        value={value}
        className={cn(
          "w-full rounded-[0.4rem] border bg-gray-50/60 dark:bg-dark-200/50 border-gray-100 dark:border-dark-100/60 dark:ring-offset-dark px-3 h-[2.2rem] leading-[2.2rem] focus:outline-0 focus:ring-[2px] focus:ring-dark-50/30 dark:focus:ring-dark-50 focus:ring-offset-1 read-only:focus:ring-0",
          {
            "pl-8": withIcon,
          },
          className
        )}
        {...rest}
      />
      {helpText && (
        <span className="text-[0.8rem] font-medium inline-block left-[2px] -bottom-5 absolute text-gray-300 first-letter:uppercase">
          {helpText}
        </span>
      )}
    </label>
  );
};
