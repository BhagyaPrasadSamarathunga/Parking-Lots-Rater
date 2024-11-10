import { ReactNode } from "react";
import Header from "../header/Header";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const {children} = props;

  return (
    <div className="flex flex-col h-screen w-full bg-gray-300 overflow-hidden" >
       <Header />
      <div className="flex flex-col flex-grow h-full min-h-content bg-whitemt-[52px] lg:mt-[60px] overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default Layout;