// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { EuiProviderWrapper } from "./EuiProviderWrapper";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Exact-match dashboard UI (EUI + custom CSS)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <EuiProviderWrapper>{children}</EuiProviderWrapper>
      </body>
    </html>
  );
}
