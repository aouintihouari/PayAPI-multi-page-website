import { Outlet } from "react-router";

import { Header, CTA, Footer } from "./";

const Layout = () => {
  return (
    <main className="bg-main overflow-x-hidden">
      <Header />
      <Outlet />
      <CTA />
      <Footer />
    </main>
  );
};

export default Layout;
