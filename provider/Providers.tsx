import { ThemeProvider } from "./ThemeProvider";
import { ShowWrapper } from "@/contexts/Show";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ShowWrapper>{children}</ShowWrapper>
    </ThemeProvider>
  );
}
