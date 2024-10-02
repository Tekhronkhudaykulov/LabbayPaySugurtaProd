import { Button } from "antd";
import { ASSETS } from "../../assets/images/assets";
import { Text } from "../../components";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router";

const SupportService = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full w-[72%] mx-auto gap-[50px]">
      <div className="grid grid-cols-2 gap-[51px] w-full">
        <div className="flex flex-col">
          <img
            src={ASSETS.Phone}
            className="h-[90px] w-[90px] object-contain mx-auto"
            alt=""
          />
          <div className="bg-card rounded-content p-[30px] h-full">
            <Text text="Служба поддержки:" className="text-[18px] font-[500]" />
            <Text
              text="+998 77 111 22 33"
              className="text-[22px] font-[700] text-link mt-[10px] mb-10"
            />
            <Text text="Головной офис:" className="text-[18px] font-[500]" />
            <Text
              text="adress"
              className="text-[22px] font-[700] text-link mt-[10px]"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src={ASSETS.Telegram}
            className="h-[90px] w-[90px] object-contain mx-auto"
            alt=""
          />
          <div className="bg-card rounded-content p-[30px] h-full">
            <Text text="Telegram-bot:" className="text-[18px] font-[500]" />
            <Text
              text="@Labbay_Pay_Bot"
              className="text-[22px] font-[700] text-blue mt-[10px] mb-10"
            />
            <img src={ASSETS.Qr} className="mx-auto h-[120px]" alt="" />
          </div>
        </div>
      </div>
      <Button
        onClick={() => navigate(APP_ROUTES.HOME)}
        size="large"
        type="primary"
        className="w-full h-[90px] !bg-orange"
      >
        Вернуться на главную
      </Button>
    </div>
  );
};

export default SupportService;
