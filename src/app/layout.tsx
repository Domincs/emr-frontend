import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

const font = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className}>
        {children}
        <Toaster
          position="top-right"
          theme="system"
          duration={8000}
          offset={16}
          richColors
          closeButton
          style={{ fontFamily: "Inter" }}
          toastOptions={{
            style: {
              fontSize: "1rem",
              borderRadius: "0.8rem",
            },
          }}
        />
      </body>
    </html>
  );
}
