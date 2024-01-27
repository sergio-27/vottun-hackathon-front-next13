import { type FC, type ReactNode } from "react";

import Navbar from "./NavBar";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="inset-0 flex-wrap items-stretch">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
