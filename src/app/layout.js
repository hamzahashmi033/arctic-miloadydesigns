import BootstrapInit from "@/helper/BootstrapInit";
import "./font.css";
import "./globals.scss";

export const metadata = {
  title: "Arctic Shields",
  description:
    "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BootstrapInit />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
