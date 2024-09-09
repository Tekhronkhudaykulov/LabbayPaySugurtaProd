import { useEffect } from "react";
import { ASSETS } from "../../assets/images/assets";
import LanguageBtn from "../../components/LanguageBtn/view";
import "./style.scss";
import ServicesCard from "../../components/Cards/ServiceCard/view";
import { APP_ROUTES } from "../../router";
import { useNavigate } from "react-router-dom";
import { companyStore } from "../../store";
import { useAuthRedirect } from "../../hook/view";

const Services = () => {
  const navigate = useNavigate();

  const { companyRequest, companyList } = companyStore();

  useEffect(() => {
    companyRequest();
  }, []);

  useAuthRedirect(APP_ROUTES.SERVICES);

  const goToRegister = (id: any) => {
    navigate(`${APP_ROUTES.REGISTER_CAR}/${id}`);
  };

  return (
    <div>
      <div className="bg-gradient-service absolute w-[100%] z-[-9999]  left-0"></div>
      <div className="service-header-container  mx-[auto] w-[90%]">
        <div>
          <img
            className="object-cover h-[450px] z-[9999]"
            src={ASSETS.MainPageLogo}
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="w-[700px]">
            <p className="text-[50px]">
              ОСАГО вашего автомобиля{" "}
              <span className="text-[45px] mx-[5px] text-[#3B41C6]">
                быстро и удобно
              </span>{" "}
              с Labbay Pay:
            </p>
          </div>

          <div className="flex gap-x-[5px] mt-[30px]">
            <div className="border-[#E7E7E7] flex items-center justify-center bg-white border-[2px] w-max rounded-[10px] p-[5px]">
              <img src={ASSETS.Sum} className="h-[100%]" alt="" />
            </div>
            <div className="border-[#E7E7E7] flex items-center justify-center bg-white border-[2px] w-max rounded-[10px] p-[5px]">
              <img src={ASSETS.Uzcard} alt="" />
            </div>
            <div className="border-[#E7E7E7] flex items-center justify-center bg-white border-[2px] w-max rounded-[10px] p-[5px]">
              <img src={ASSETS.Humo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-[40px]">
        <div className="flex items-center justify-between">
          <p className="text-[45px] font-font700">Выберите компанию:</p>
          <div className="flex gap-x-[14px]">
            <LanguageBtn title="O’Z" img={ASSETS.UzFlag} isHas={false} />
            <LanguageBtn title="РУ" img={ASSETS.RuFlag} isHas={true} />
            <LanguageBtn title="EN" img={ASSETS.EngFlag} isHas={false} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {companyList.map((item: any, ind: any) => (
          <div key={ind}>
            <ServicesCard
              classNameButton={`${
                item.company_id === 1 ? "bg-inson-button" : "bg-kapital-button "
              } w-full mt-auto px-[35px] py-[39px] text-[27px] rounded-[15px] font-[600] text-white`}
              title="Разработанно совместно с Канадской IT компанией - CROSURE"
              className={`w-full h-[405px] ${
                item.company_id === 1
                  ? "card-gradient-inson"
                  : "card-gradient-kapital"
              } pb-[20px]`}
              img={
                item.company_id === 1 ? ASSETS.InsonLogo : ASSETS.KapitalLogo
              }
              onClick={() => goToRegister(item.company_id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
