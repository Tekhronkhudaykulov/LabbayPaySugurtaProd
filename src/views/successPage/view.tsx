import { Button } from "antd";
import { ASSETS } from "../../assets/images/assets";
import { Text } from "../../components";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router";

const CheckPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full w-[65%] mx-auto pb-16">
      <img src={ASSETS.Success} className="h-[100px] object-contain" alt="" />
      <Text
        text="УСПЕШНО"
        className="text-[30px] font-[700] text-center mt-8 mb-[15px]"
      />
      <Text
        text="Ваши средства зачислены. Распечатать квитанцию?"
        className="text-[22px] font-[500] text-center w-[400px] mx-auto leading-[35px]"
      />

      <div className="grid grid-cols-2 gap-4 mt-[30px]">
        <Button
          onClick={() => navigate(APP_ROUTES.HOME)}
          className="!bg-btnRed h-[65px]"
          type="primary"
        >
          Нет (30)
        </Button>
        <Button
          onClick={() => navigate(APP_ROUTES.CHECK)}
          className="!bg-btnGreen h-[65px]"
          type="primary"
        >
          Да
        </Button>
        <Button
          icon={<MailOutlined className="[&>svg]:text-[22px] " />}
          className="flex items-center justify-center gap-4 leading-none col-span-2 !bg-btnGreen h-[65px]"
          type="primary"
          onClick={() => navigate(APP_ROUTES.SMS)}
        >
          Получить СМС
        </Button>
      </div>
    </div>
  );
};

export default CheckPage;
