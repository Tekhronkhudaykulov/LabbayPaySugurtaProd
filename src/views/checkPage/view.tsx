import { Button } from "antd";
import { ASSETS } from "../../assets/images/assets";
import { Text } from "../../components";
import { APP_ROUTES } from "../../router";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full w-[65%] mx-auto ">
      <img src={ASSETS.PrintAnimation} className="h-[150px]" alt="" />
      <Text
        text="Печать чека"
        className="text-[35px] font-[700] text-center mt-8 mb-[10px]"
      />
      <div className="bg-content p-5 rounded-[36px] flex flex-col gap-4">
        <div className="flex items-center">
          <Text text="Услуга:" className="text-[20px] font-[500]" />
          <Text
            text="ГУБДД Штрафы"
            className="ml-auto text-right text-[20px] font-[500]"
          />
        </div>
        <div className="flex items-center">
          <Text text="Время оплаты:" className="text-[20px] font-[500]" />
          <Text
            text="ГУБДД Штрафы"
            className="ml-auto text-right text-[20px] font-[500]"
          />
        </div>
        <div className="flex items-center">
          <Text text="Тип оплаты:" className="text-[20px] font-[500]" />
          <Text
            text="ГУБДД Штрафы"
            className="ml-auto text-right text-[20px] font-[500]"
          />
        </div>
        <div className="flex items-center">
          <Text text="Сумма штрафа:" className="text-[20px] font-[500]" />
          <Text
            text="ГУБДД Штрафы"
            className="ml-auto text-right text-[20px] font-[500]"
          />
        </div>
        <div className="flex items-center">
          <Text text="Сумма к оплате:" className="text-[20px] font-[500]" />
          <Text
            text="ГУБДД Штрафы"
            className="ml-auto text-right text-[20px] font-[500]"
          />
        </div>
        <div className="flex items-center">
          <Text text="К зачислению:" className="text-[20px] font-[500]" />
          <Text
            text="ГУБДД Штрафы"
            className="ml-auto text-right text-[20px] font-[500]"
          />
        </div>
      </div>
      <div className="mt-[20px]">
        <Button
          onClick={() => navigate(APP_ROUTES.HOME)}
          className="!bg-btnGreen w-full !h-[65px]"
          type="primary"
        >
          ОК (30)
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
