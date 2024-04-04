import type { Icon } from "./types";

export const DasboardIcon = (props: Icon) => {
  return (
    <svg
      {...props}
      fill="currentColor"
      fillOpacity={0.1}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="6.25"
        cy="6.25"
        r="4.25"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="17.75"
        cy="17.75"
        r="4.25"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="6.25"
        cy="17.75"
        r="4.25"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 2V10M22 6L14 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
