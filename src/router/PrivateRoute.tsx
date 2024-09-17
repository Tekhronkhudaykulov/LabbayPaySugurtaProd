import { FC, ReactNode } from "react";
import { Footer, Navbar } from "../layouts";
import { ScrollToRefresh } from "../hook/view";

interface Props {
  child?: ReactNode;
}

const PrivateRoute: FC<Props> = ({ child }) => {
  ScrollToRefresh();
  return (
    <div className="h-[100vh] flex flex-col">
      <Navbar />
      <div className="wrapper">{child}</div>
      <Footer />
    </div>
  );
};

export default PrivateRoute;
