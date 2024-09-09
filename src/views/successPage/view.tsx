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
      <img src={ASSETS.Success} className="h-[150px]" alt="" />
      <Text
        text="УСПЕШНО"
        className="text-[45px] font-[700] text-center mt-8 mb-14"
      />
      <Text
        text="Ваши средства зачислены. Распечатать квитанцию?"
        className="text-[28px] font-[500] text-center w-[400px] mx-auto leading-[35px]"
      />

      <div className="mt-auto grid grid-cols-2 gap-4">
        <Button
          onClick={() => navigate(APP_ROUTES.HOME)}
          className="!bg-btnRed"
          type="primary"
        >
          Нет (30)
        </Button>
        <Button
          onClick={() => navigate(APP_ROUTES.CHECK)}
          className="!bg-btnGreen"
          type="primary"
        >
          Да
        </Button>
        <Button
          icon={<MailOutlined className="[&>svg]:text-[32px]" />}
          className="flex items-center justify-center gap-4 leading-none col-span-2 !bg-btnGreen"
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
