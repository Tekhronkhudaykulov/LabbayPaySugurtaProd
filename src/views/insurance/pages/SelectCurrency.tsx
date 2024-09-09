import { Button } from "antd";
import { TypePaymentSection } from "../../../components";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

const SelectCurrency = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[100px] ">
      <TypePaymentSection
        onCashClick={() =>
          navigate(`${APP_ROUTES.PAYMENTTYPE}/${APP_ROUTES.CASH}`)
        }
        onCardClick={() =>
          navigate(`${APP_ROUTES.PAYMENTTYPE}/${APP_ROUTES.TERMINAL}`)
        }
      />
      <div className="flex items-center justify-center mt-[100px]">
        <Button className="uppercase w-[505px]" type="default">
          Назад
        </Button>
      </div>
    </div>
  );
};

export default SelectCurrency;
