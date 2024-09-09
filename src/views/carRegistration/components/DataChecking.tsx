import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../../assets/images/assets";
import { FooterNav } from "../../../components";
import { CheckingCard } from "../../../components/Cards";
import { APP_ROUTES } from "../../../router";
import { stepsStore } from "../../../store";

const DataChecking = () => {
  const navigate = useNavigate();
  const { dataClient } = stepsStore();

  console.log(dataClient, "dataClient");

  return (
    <div className="h-[85vh] flex flex-col">
      <div className="flex items-center justify-center">
        <img src={ASSETS.Info} alt="" />
        <div className="grid gap-y-[10px]">
          <p className="text-orangeInfo text-center text-[24px] font-[700]">
            Проверьте данные!
          </p>
          <p className="text-[24px] font-[500]">
            Данные свидетельства о регистрации (техпаспорта) транспортного
            средства:
          </p>
        </div>
        <img src={ASSETS.Info} alt="" />
      </div>
      <div className="grid gap-y-[10px]">
        <div className="grid grid-cols-4 gap-x-[14px] mt-[22px]">
          <CheckingCard
            label="Модель транспортного средства:"
            title={dataClient?.vmodel}
            className="bg-content rounded-[14px] px-[20px] py-[15px]"
          />
          <CheckingCard
            label="Вид транспортного средства:"
            title="Легковой автомобиль"
            className="bg-content rounded-[14px] px-[20px] py-[15px] "
          />
          <CheckingCard
            label="Регион регистрации:"
            title="г. Ташкент"
            className="bg-content rounded-[14px] px-[20px] py-[15px] "
          />
          <CheckingCard
            label="Год выпуска:"
            title={dataClient?.year}
            className="bg-content rounded-[14px] px-[20px] py-[15px] "
          />
        </div>
        <div className="grid grid-cols-2 gap-x-[14px]">
          <CheckingCard
            label="Vehicle body number:"
            title={dataClient?.dvigatel}
            className="bg-content rounded-[14px] px-[20px] py-[15px] "
          />
          <CheckingCard
            label="Vehicle engine number:"
            title={dataClient?.kuzov}
            className="bg-content rounded-[14px]  px-[20px] py-[15px] "
          />
        </div>
        <div className="bg-content py-[20px] px-[24px] ">
          <p className="text-[22px] text-[#0D0D0D] font-[500] mb-[15px]">
            Данные собственника транспортного средства:
          </p>
          <CheckingCard
            label="Владелец автомобиля:"
            title="TURDIBAEV MARAT JOHON UGLI"
            className="bg-white rounded-[14px] px-[20px] py-[15px] "
          />
          <div className="grid grid-cols-3 gap-x-[15px] mt-[15px]">
            <CheckingCard
              label="ПИНФЛ владельца ТС"
              title="17236812739"
              className="bg-white rounded-[14px] px-[20px] py-[15px] "
            />
            <CheckingCard
              label="Серия паспорта/ID-card:"
              title="AA"
              className="bg-white rounded-[14px] px-[20px] py-[15px] "
            />
            <CheckingCard
              label="Номер паспорта/ID-card:"
              title="0 0 0 0 0 0 1"
              className="bg-white rounded-[14px] px-[20px] py-[15px] "
            />
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <FooterNav
          nextTitle="ДАЛЕЕ"
          nextClick={() => navigate(APP_ROUTES.INSURANCE)}
          prevClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default DataChecking;
