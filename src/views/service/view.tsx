import { ASSETS } from "../../assets/images/assets";
import LanguageBtn from "../../components/LanguageBtn/view";
import "./style.scss";
import ServicesCard from "../../components/Cards/ServiceCard/view";
import { APP_ROUTES } from "../../router";
import { useAuthRedirect } from "../../hook/view";
import { usePostStore } from "../../store";
import LoadingPage from "../../components/Loading/view";
import { usePostServicesDetail } from "../../hook/hook";
import { useTranslation } from "react-i18next";

const Services = () => {
  useAuthRedirect(APP_ROUTES.SERVICES);
  const { t, i18n } = useTranslation();

  console.log(t("selectCompany"));

  const value = usePostStore((state: any) => state.services);

  const { mutate, isPending } = usePostServicesDetail();

  // Buttonni bosganda `company_id` uzatish
  const handleClick = (id: any) => {
  
    mutate({ company_id: id });
  };

  return (
    <>
      {isPending && <LoadingPage />}
      <div>
        <div className="bg-gradient-service absolute w-[100%] z-[-9999]  left-0"></div>
        <div className="service-header-container  mx-[auto]">
          <div className="flex items-center justify-center">
            <img
              className="w-[380px] h-[230px] object-cover z-[9999]"
              src={ASSETS.MainPageLogo}
              alt=""
            />
          </div>
          <div className="w-full">
            <div>
              <p className="text-[42px]">
                ОСАГО вашего автомобиля{" "}
                <span className="text-[42px] mx-[5px] text-[#3B41C6]">
                  быстро и удобно
                </span>{" "}
                с Labbay Pay:
              </p>
            </div>

            <div className="flex gap-x-[5px] mt-[30px]">
              <div className="border-[#E7E7E7] flex items-center justify-center bg-white border-[2px] w-[130px] h-[55px] rounded-[10px] p-[5px]">
                <img
                  src={ASSETS.Sum}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="border-[#E7E7E7] flex items-center justify-center bg-white border-[2px]  w-[130px] h-[55px] rounded-[10px] p-[5px]">
                <img
                  src={ASSETS.Uzcard}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="border-[#E7E7E7] flex items-center justify-center bg-white border-[2px]  w-[130px] h-[55px] rounded-[10px] p-[5px]">
                <img
                  src={ASSETS.Humo}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-[10px]">
          <div className="flex items-center justify-between">
            <p className="text-[35px] font-[700]">{t("selectCompany")}:</p>
            <div className="flex gap-x-[14px] my-[15px]">
              <LanguageBtn
                title="O’Z"
                img={ASSETS.UzFlag}
                isHas={i18n.language === "uz"}
              />
              <LanguageBtn
                title="РУ"
                img={ASSETS.RuFlag}
                isHas={i18n.language === "ru"}
              />
              <LanguageBtn
                title="EN"
                img={ASSETS.EngFlag}
                isHas={i18n.language === "en"}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          {value?.map((item: any, ind: any) => (
            <div key={ind}>
              <ServicesCard
                classNameButton={`${
                  item.company_id === 1
                    ? "bg-inson-button"
                    : "bg-kapital-button "
                } w-full mt-auto h-[65px]  text-[24px] rounded-[15px] font-[600] text-white`}
                title={t("cardTitle")}
                className={`w-full  ${
                  item.company_id === 1
                    ? "card-gradient-inson"
                    : "card-gradient-kapital"
                } pb-[20px]`}
                img={
                  item.company_id === 1 ? ASSETS.InsonLogo : ASSETS.KapitalLogo
                }
                onClick={() => handleClick(item.company_id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
