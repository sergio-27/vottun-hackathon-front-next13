import { type FC, type ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="inset-0 flex-wrap items-stretch">
      <Navbar />
      <div className="">
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
