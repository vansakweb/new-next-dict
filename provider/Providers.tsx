import { BookMarkWrapper } from "@/contexts/Bookmark";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { ShowWrapper } from "@/contexts/Show";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <BookMarkWrapper>
        <ShowWrapper>{children}</ShowWrapper>
      </BookMarkWrapper>
    </ThemeProvider>
  );
}
