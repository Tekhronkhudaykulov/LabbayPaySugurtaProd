import { Button } from "antd";
import { ASSETS } from "../../../assets/images/assets";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

const Sms = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col h-[100%] mt-[30px]">
      <div className="flex items-center justify-center h-[100%] flex-col">
        <div className="flex flex-col gap-y-[25px]">
          <div className="flex items-center justify-center gap-x-[25px]">
            <img src={ASSETS.SmsImage} alt="" />
            <img src={ASSETS.SmsImage2} alt="" />
            <img src={ASSETS.SmsImage3} alt="" />
          </div>
          <p className="text-center font-[700] text-[45px] ">СМС отправлено</p>
          <p className="text-center text-[28px] font-[500]">
            На номер: +998 99 999 99 99
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[20px]">
        <Button
          onClick={() => navigate(APP_ROUTES.HOME)}
          type="primary"
          className={`!bg-btnGreen uppercase min-w-[350px] `}
        >
          OK (10)
        </Button>
      </div>
    </div>
  );
};
export default Sms;
