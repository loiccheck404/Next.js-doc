//import { NavigationBlockerProvider } from "./contexts/navigation-blocker";
//import ThemeProvider from "./theme-provider";
// These styles apply to every route in the application
import "./global.css";
//import "bootstrap/dist/css/bootstrap.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {/* <NavigationBlockerProvider> */}
        {/* <ThemeProvider> */}
        {/* Uncomment the above lines to enable navigation blocking and theme provider */}
        {/** */}
        {children}
      </body>
    </html>
  );
}
