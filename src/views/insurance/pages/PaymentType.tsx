import { Outlet } from "react-router-dom";
import InsuranceInfo from "../component/InsuranceInfo";

const PaymentType = () => {
  return (
    <div>
      <InsuranceInfo />
      <Outlet />
    </div>
  );
};

export default PaymentType;
