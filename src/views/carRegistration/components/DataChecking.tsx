import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../../assets/images/assets";
import { FooterNav } from "../../../components";
import { APP_ROUTES } from "../../../router";
import { stepOneStore } from "../../../store/usePostStore/usePostStore";
import { CheckingCard, CheckingCardInput } from "../../../components/Cards";

const DataChecking = () => {
  const navigate = useNavigate();
  const { stepOneData } = stepOneStore();

  return (
    <div className=" flex flex-col">
      <div className="flex items-center justify-center">
        <img src={ASSETS.Info} alt="" />
        <div className="grid gap-y-[10px]">
          <p className="text-orangeInfo text-center text-[22px] font-[700]">
            Проверьте данные!
          </p>
          <p className="text-[18px] font-[500]">
            Данные свидетельства о регистрации (техпаспорта) транспортного
            средства:
          </p>
        </div>
        <img src={ASSETS.Info} alt="" />
      </div>
      <div className="grid gap-y-[10px]">
        <div className="grid grid-cols-4 gap-x-[14px] mt-[15px]">
          <CheckingCard
            label="Модель транспортного средства:"
            title={stepOneData?.vmodel}
            className="bg-content rounded-[14px] px-[20px] py-[10px]"
          />
          <CheckingCard
            label="Вид транспортного средства:"
            title="Легковой автомобиль"
            className="bg-content rounded-[14px] px-[20px] py-[10px] "
          />
          <CheckingCard
            label="Регион регистрации:"
            title="г. Ташкент"
            className="bg-content rounded-[14px] px-[20px] py-[10px] "
          />
          <CheckingCard
            label="Год выпуска:"
            title={stepOneData?.year}
            className="bg-content rounded-[14px] px-[20px] py-[10px] "
          />
        </div>
        <div className="grid grid-cols-2 gap-x-[14px]">
          <CheckingCard
            label="Vehicle body number:"
            title={stepOneData?.dvigatel}
            className="bg-content rounded-[14px] px-[20px] py-[10px] "
          />
          <CheckingCard
            label="Vehicle engine number:"
            title={stepOneData?.kuzov}
            className="bg-content rounded-[14px]  px-[20px] py-[10px] "
          />
        </div>
        <div className="bg-content py-[10px] px-[24px] ">
          {/* <p className="text-[18px] text-[#0D0D0D] font-[500] !mb-[15px]">
            Данные собственника транспортного средства:
          </p>
          <CheckingCard
            label="Владелец автомобиля:"
            title="TURDIBAEV MARAT JOHON UGLI"
            className="bg-white rounded-[14px] px-[20px] py-[10px] "
          /> */}
          <div className="grid grid-cols-3 gap-x-[15px] ">
            {/* <CheckingCard
              label="ПИНФЛ владельца ТС"
              title="17236812739"
              className="bg-white rounded-[14px] px-[20px] py-[10px] "
            /> */}
            <CheckingCardInput
              label="Серия паспорта/ID-card:"
              className="bg-white rounded-[14px] px-[20px] py-[10px] "
              ind={0}
            />
            <CheckingCardInput
              label="Номер паспорта/ID-card:"
              className="bg-white rounded-[14px] px-[20px] py-[10px] "
              ind={1}
            />
          </div>
        </div>
      </div>
      <div>
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
