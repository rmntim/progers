import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { TopNav } from "~/components/top-nav";
import { Footer } from "~/components/footer";
import NextTopLoader from "nextjs-toploader";
import { useTheme } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Progers",
  description: "Progers - share your code with the world",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="#a8a29e" showSpinner={false} />
          <TopNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
