import { Outlet } from "react-router-dom";
import { PaymentOfFinesSidebar } from "./components";

const PaymentOfFine = () => {
  return (
    <div className="flex flex-col h-full">
      <PaymentOfFinesSidebar />
      <Outlet />
    </div>
  );
};

export default PaymentOfFine;
