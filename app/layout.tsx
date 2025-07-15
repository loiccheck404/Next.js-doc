//import { NavigationBlockerProvider } from "./contexts/navigation-blocker";
import ThemeProvider from "./theme-provider";
// These styles apply to every route in the application
import "./global.css";
//import "bootstrap/dist/css/bootstrap.css";

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
