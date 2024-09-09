import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../assets/images/assets";
import { FooterNav, KeyboardComponent, Text } from "../../components";
import "./style.scss";
import { APP_ROUTES } from "../../router";
const ReplenishmentFine = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full">
      <div className="paymentOfFines gap-[20px]">
        <div className="bg-[#F4F4F4]  py-[20px] px-[15px] rounded-[36px]">
          <Text
            text="Серия и номер постановления"
            className="text-[25px] font-[500]"
          />
          <div className="flex gap-x-[10px] mt-[10px]">
            <button className="bg-indigo-500 text-white h-[90px] px-[20px] rounded-[21px] flex items-center">
              <span className="mr-2 text-[35px] font-[500]">RB</span>
              <img src={ASSETS.Down} alt="" />
            </button>
            <input
              className=" px-[10px] h-[90px] w-full text-[30px] font-[500] outline-none text-[#E8E8E8] border rounded-[21px]"
              type="text"
              placeholder="Номер постановления"
            />
          </div>
          <div className="mt-[15px]">
            <Text text="Сумма платежа" className="text-[25px] font-[500]" />
            <div className=" mt-[10px]">
              <input
                className="px-[10px] h-[90px] text-[30px] w-full font-[500] outline-none text-[#E8E8E8] border rounded-[21px]"
                type="text"
                placeholder="Сумма платежа"
              />
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(
              `${APP_ROUTES.PAYMENT_OF_FINE}/${APP_ROUTES.PAYMENT_OF_FINE_TYPE}`
            )
          }
          className="border-[20px]   border-[#F4F4F4] rounded-[36px] py-[20px] px-[15px]"
        >
          <div className="flex items-center gap-x-[28px]">
            <img className="w-[90px] h-[90px]" src={ASSETS.GUVD} alt="" />
            <Text className="text-[32px] font-[500]" text="ГУБДД Штрафы" />
          </div>
          <div className="border border-[#E1E1E1] my-[15px] "></div>
          <div className="flex gap-x-[28px]">
            <img className="w-[110px] h-[110px]" src={ASSETS.Info} alt="" />
            <p className="text-[20px] font-[500] leading-[25px]">
              Постановления, которые начинаются с
              <span className="text-[#FF5F00] font-[700] text-[20px]"> KV</span>
              , оплачиваются в
              <span className="text-[#FF5F00] font-[700] text-[20px]">
                “Административные правонарушения”
              </span>
            </p>
          </div>
        </div>
      </div>
      <KeyboardComponent className="mt-auto" />
      <FooterNav />
    </div>
  );
};

export default ReplenishmentFine;
