import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../../assets/images/assets";
import { FooterNav } from "../../../components";
import { APP_ROUTES } from "../../../router";
import { stepOneStore } from "../../../store/usePostStore/usePostStore";
import { CheckingCard } from "../../../components/Cards";
import { useTranslation } from "react-i18next";

const DataChecking = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const { stepOneData } = stepOneStore();
  const { t } = useTranslation();

  return (
    <div className=" flex flex-col mt-[30px]">
      <div className="flex items-center justify-center">
        <img src={ASSETS.Info} alt="" />
        <div className="grid gap-y-[10px]">
          <p className="text-orangeInfo text-center text-[35px] font-[700]">
            {t("checkData.title")}!
          </p>
          <p className="text-[22px] text-center font-[500]">
            {t("checkData.subtitle")}:
          </p>
        </div>
        <img src={ASSETS.Info} alt="" />
      </div>
      <div>
        <div className="grid gap-y-[10px] mt-[30px]">
          <div className="grid grid-cols-4 gap-x-[14px] mt-[15px]">
            <CheckingCard
              label={t("checkData.model")}
              title={stepOneData?.vmodel}
              className="bg-content rounded-[14px] px-[20px] pt-[20px] h-[140px]"
            />
            <CheckingCard
              label={t("checkData.typeCar")}
              title="Легковой автомобиль"
              className="bg-content rounded-[14px] px-[20px] pt-[20px] h-[140px]"
            />
            <CheckingCard
              label={t("checkData.regionRegister")}
              title="г. Ташкент"
              className="bg-content rounded-[14px] px-[20px] pt-[20px] h-[140px] "
            />
            <CheckingCard
              label={t("checkData.yearCard")}
              title={stepOneData?.year}
              className="bg-content rounded-[14px] px-[20px] pt-[20px] h-[140px] "
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[14px]">
            <CheckingCard
              label={t("checkData.bodyNumber")}
              title={stepOneData?.dvigatel}
              className="bg-content rounded-[14px] px-[20px] pt-[20px]  h-[140px]"
            />
            <CheckingCard
              label={t("checkData.VehicleNumber")}
              title={stepOneData?.kuzov}
              className="bg-content rounded-[14px]  px-[20px] pt-[20px] h-[140px] "
            />
          </div>
        </div>
      </div>
      <div className="mt-[25px]">
        <FooterNav
          nextTitle="ДАЛЕЕ"
          nextClick={() => navigate(APP_ROUTES.ADD_DOCUMENT)}
          prevClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default DataChecking;
