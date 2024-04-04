import { MainLayout } from "@/components/layouts";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <MainLayout>{children}</MainLayout>;
}
