//import { NavigationBlockerProvider } from "./contexts/navigation-blocker";
import ThemeProvider from "./theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/**<NavigationBlockerProvider>{children}</NavigationBlockerProvider> */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
