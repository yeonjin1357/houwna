import "./globals.css";

import Header from "@/app/_components/Header/Header";
import Footer from "@/app/_components/Footer/Footer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "테스트",
  description: "테스트 앱입니다",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
