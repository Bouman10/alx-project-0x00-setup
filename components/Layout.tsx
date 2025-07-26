import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title = "Airbnb Clone", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
          © {new Date().getFullYear()} Airbnb Clone. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Layout;
