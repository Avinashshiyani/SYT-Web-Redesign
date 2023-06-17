import { Outlet } from "react-router-dom";

import { Header2, Footer2 } from "../components";

const Layout = () => {
  return (
    <div>
      <Header2 />
      <Outlet />
      <Footer2 />
    </div>
  );
};

export default Layout;