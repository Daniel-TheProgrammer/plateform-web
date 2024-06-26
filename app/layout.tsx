import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { Nav } from "./components/view/nav";
import { Footer } from "./components/view/footer";

const inter = Inter({ subsets: ["latin"] });
const plus = Plus_Jakarta_Sans({
  variable: "--font-plus",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${plus.variable}`}>
        <StyledComponentsRegistry>
          <Nav />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
