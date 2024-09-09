import { FC, ReactNode } from "react";
import { Footer, Navbar } from "../layouts";
import { ScrollToRefresh } from "../hook/view";

interface Props {
  child?: ReactNode;
}

const PrivateRoute: FC<Props> = ({ child }) => {
  ScrollToRefresh();
  return (
    <>
      <Navbar />
      <div className="py-[23px] h-full wrapper">{child}</div>
      <Footer />
    </>
  );
};

export default PrivateRoute;
