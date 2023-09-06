import React from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <TopNav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
