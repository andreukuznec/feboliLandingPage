// components/Layout.js
import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <Header />
      <main className="overflow-auto min-h-screen">
        {children}
        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div className="relative w-screen h-screen bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
