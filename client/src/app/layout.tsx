import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashBoardWrapper from "./DashBoardWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projex – Streamline Your Projects Effortlessly",
  description:
    "Projex is a powerful project management tool designed to help teams plan, collaborate, and execute tasks efficiently. Manage tasks, track progress, and stay organized – all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashBoardWrapper>{children}</DashBoardWrapper>
      </body>
    </html>
  );
}
