import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Providers from "@/provider/Providers";

export const metadata: Metadata = {
  title: "CH KH DICT",
  description: "",
  openGraph: {
    images: ["https://new-next-dict.vercel.app/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`battambang`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
