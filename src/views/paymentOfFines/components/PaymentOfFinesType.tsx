import { useNavigate } from "react-router-dom";
import { FooterNav, TypePaymentSection } from "../../../components";
import { APP_ROUTES } from "../../../router";

const PaymentOfFinesType = () => {
  const navigate = useNavigate();
  return (
    <>
      <TypePaymentSection
        onCashClick={() =>
          navigate(
            `${APP_ROUTES.PAYMENT_OF_FINE}/${APP_ROUTES.PAYMENT_OF_FINE_CASH}`
          )
        }
        onCardClick={() =>
          navigate(`${APP_ROUTES.PAY_PHONE}/${APP_ROUTES.PHONE_TERMINAL}`)
        }
      />
      <FooterNav
        prevClick={() => navigate(-1)}
        nextClick={() => {}}
        showNextButton={false}
      />
    </>
  );
};

export default PaymentOfFinesType;
