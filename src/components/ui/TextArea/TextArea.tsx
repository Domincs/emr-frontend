import { cn } from "@/lib";
import { FC, TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea: FC<Props> = (props) => {
  const { label, required, className, ...rest } = props;
  return (
    <label>
      {label && (
        <span className="mb-3 block dark:text-white font-medium">
          {label}
          {required && <span className="text-danger">*</span>}
        </span>
      )}
      <textarea
        required={required}
        className={cn(
          "w-full rounded-[0.4rem] border bg-gray-50/60 dark:bg-dark-200/50 border-gray-100 dark:border-dark-100/60 dark:ring-offset-dark px-3 leading-[2.2rem] focus:outline-0 focus:ring-[2px] focus:ring-dark-50/30 dark:focus:ring-dark-50 focus:ring-offset-1 read-only:focus:ring-0",
          className
        )}
        {...rest}
      />
    </label>
  );
};
