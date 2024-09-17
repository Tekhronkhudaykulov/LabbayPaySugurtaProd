import { Outlet } from "react-router-dom";
import InsuranceInfo from "../component/InsuranceInfo";

const PaymentType = () => {
  return (
    <div className="flex flex-col h-[100%] ">
      <InsuranceInfo />
      <Outlet />
    </div>
  );
};

export default PaymentType;
