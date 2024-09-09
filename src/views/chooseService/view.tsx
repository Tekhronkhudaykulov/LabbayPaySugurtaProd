import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../assets/images/assets";
import { FooterNav, Text } from "../../components";
import CategoryCard from "../../components/Cards/CategoryCard/view";

import "./style.scss";
import { APP_ROUTES } from "../../router";

const ChooseService = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#F6F6F6] p-[25px] rounded-[36px]">
        <Text
          text="Оплата штрафа:"
          className="font-[700] text-[36px] mb-[25px]"
        />
        <div className="grid grid-cols-3 gap-x-[15px]">
          <CategoryCard
            title="ГУБДД Штрафы"
            onClick={() => navigate(`${APP_ROUTES.REPLENISHMENT_FINE}`)}
            img={ASSETS.GUVD}
          />
          <CategoryCard
            onClick={() => navigate(APP_ROUTES.REPLENISHMENT_FINE)}
            title="Административные правонарушения"
            img={ASSETS.Gai}
          />
          <CategoryCard
            onClick={() => navigate(APP_ROUTES.REPLENISHMENT_FINE)}
            title="MIB"
            img={ASSETS.Mib}
          />
        </div>
      </div>
      <div className="bg-[#F6F6F6] mt-[10px]  p-[25px] rounded-[36px]">
        <div className="flex items-center   relative ">
          <div className="w-[65%] relative">
            <p className="text-[45px] leading-[55px]">
              Оформляйте свой автомобиль
              <span className="text-[#3B41C6] text-[45px] mr-[5px]">
                быстро и удобно
              </span>
              с Labbay Pay:
            </p>
            <button className="flex button-gradient-service gap-[10px] relative text-white text-[36px] font-[700] rounded-[10px] mb-[20px] bg-[blue] h-[75px] items-center px-[20px] mt-[21px]">
              Оформить автомобиль
              <img src={ASSETS.ButtonIcon} alt="" />
            </button>
            <div className="flex gap-x-[5px] z-0">
              <div className="border-[#E7E7E7] border-[2px] w-max rounded-[10px] p-[5px]">
                <img src={ASSETS.Sum} className="h-[100%]" alt="" />
              </div>
              <div className="border-[#E7E7E7] border-[2px] w-max rounded-[10px] p-[5px]">
                <img src={ASSETS.Uzcard} alt="" />
              </div>
              <div className="border-[#E7E7E7] border-[2px] w-max rounded-[10px] p-[5px]">
                <img src={ASSETS.Humo} alt="" />
              </div>
            </div>
            {/* <div className="bg-gradient-service absolute w-[100%] z-[-9999] top-[24%] left-0"></div> */}
          </div>
          <div>
            <img
              className="object-cover h-[377px]"
              src={ASSETS.ServiceBanner}
              alt=""
            />
          </div>
        </div>
      </div>
      <FooterNav
        showNextButton={false}
        prevTitle="НАЗАД"
        prevClick={() => navigate(-1)}
      />
    </div>
  );
};

export default ChooseService;
