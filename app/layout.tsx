import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chamreun Vira — Developer Portfolio",
  description: "The personal portfolio of Chamreun Vira: thoughtful digital spaces, useful interfaces, and work in progress.",
  openGraph: {
    title: "Chamreun Vira — Developer Portfolio",
    description: "Thoughtful digital spaces, useful interfaces, and work in progress.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
