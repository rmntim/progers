import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { ModeToggle } from "~/components/mode-toggle";
import { SignIn } from "~/components/sign-in";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Progers - share your code with the world",
  description: "Application created with create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">progers</h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <SignIn />
      </div>
    </nav>
  );
}

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
          <TopNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
