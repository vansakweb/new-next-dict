import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/provider/Providers";

export const metadata: Metadata = {
  title: "CH KH DICT",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`battambang`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
