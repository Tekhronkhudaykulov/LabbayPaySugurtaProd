import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../../assets/images/assets";
import { FooterNav } from "../../../components";
import { APP_ROUTES } from "../../../router";
import { stepOneStore } from "../../../store/usePostStore/usePostStore";
import { CheckingCard, CheckingCardInput } from "../../../components/Cards";
import { useTranslation } from "react-i18next";

const DataChecking = () => {
  const navigate = useNavigate();
  const { stepOneData } = stepOneStore();
  const { t, i18n } = useTranslation();

  return (
    <div className=" flex flex-col">
      <div className="flex items-center justify-center">
        <img src={ASSETS.Info} alt="" />
        <div className="grid gap-y-[10px]">
          <p className="text-orangeInfo text-center text-[22px] font-[700]">
            {t("checkData.title")}!
          </p>
          <p className="text-[18px] font-[500]">{t("checkData.subtitle")}:</p>
        </div>
        <img src={ASSETS.Info} alt="" />
      </div>
      <div>
        <div className="grid gap-y-[10px]">
          <div className="grid grid-cols-4 gap-x-[14px] mt-[15px]">
            <CheckingCard
              label={t("checkData.model")}
              title={stepOneData?.vmodel}
              className="bg-content rounded-[14px] px-[20px] py-[10px]"
            />
            <CheckingCard
              label={t("checkData.typeCar")}
              title="Легковой автомобиль"
              className="bg-content rounded-[14px] px-[20px] py-[10px] "
            />
            <CheckingCard
              label={t("checkData.regionRegister")}
              title="г. Ташкент"
              className="bg-content rounded-[14px] px-[20px] py-[10px] "
            />
            <CheckingCard
              label={t("checkData.yearCard")}
              title={stepOneData?.year}
              className="bg-content rounded-[14px] px-[20px] py-[10px] "
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[14px]">
            <CheckingCard
              label={t("checkData.bodyNumber")}
              title={stepOneData?.dvigatel}
              className="bg-content rounded-[14px] px-[20px] py-[10px] "
            />
            <CheckingCard
              label={t("checkData.VehicleNumber")}
              title={stepOneData?.kuzov}
              className="bg-content rounded-[14px]  px-[20px] py-[10px] "
            />
          </div>
        </div>
        <div className="bg-content py-[10px] px-[24px] mt-[15px]">
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
              label={t("passport.passportSeria")}
              className="bg-white rounded-[14px] px-[20px] py-[10px] "
              ind={0}
            />
            <CheckingCardInput
              label={t("passport.passportNumber")}
              className="bg-white rounded-[14px] px-[20px] py-[10px] "
              ind={1}
            />
          </div>
        </div>
      </div>
      <div className="mt-[15px]">
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
