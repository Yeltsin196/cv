import React from "react";
import { Footer } from "../footer";
import { Header } from "../header";

interface LayoutProps {
  children: React.ReactNode;
  header?: boolean;
  footer?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, header, footer }) => {
  return (
    <div>
      {header && <Header></Header>}
      <div>{children}</div>

      {footer && <Footer></Footer>}
    </div>
  );
};
