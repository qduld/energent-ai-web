import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function Layout({
  children,
  title = "Energent AI",
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Energent AI Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
