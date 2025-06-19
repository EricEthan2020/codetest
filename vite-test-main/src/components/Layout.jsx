import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="hover:border hover:border-[#B1CAFD]">
      <div className="container mx-auto px-20 py-24">{children}</div>
    </section>
  );
};

export default Layout;
