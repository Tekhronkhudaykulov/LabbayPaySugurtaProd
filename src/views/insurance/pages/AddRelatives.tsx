import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../../assets/images/assets";
import { FooterNav } from "../../../components";
import AddRelativesCard from "../component/AddRelativesCard";
import InsuranceInfo from "../component/InsuranceInfo";
import { APP_ROUTES } from "../../../router";

const AddRelatives = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-[85vh]">
      <InsuranceInfo />
      <div className="mt-[45px] bg-[#F6F6F6] p-[25px] rounded-[35px]">
        <div className="flex items-center justify-between">
          <p className="text-[26px] font-[700]">Данные родственников:</p>
          <div className="flex items-center gap-x-[15px]">
            <div className="w-[100px] h-[100px] bg-[#7076FF] rounded-[15px] flex items-center justify-center">
              <img src={ASSETS.Back} alt="" />
            </div>
            <div
              onClick={() => navigate(APP_ROUTES.ADDRELATIVESPERSON)}
              className="bg-[#4D53E0] px-[30px] rounded-[15px] h-[100px] flex items-center justify-center text-white text-[28px] font-[700]"
            >
              Добавить родственника
            </div>
            <div className="w-[100px] rotate-180 h-[100px] bg-[#7076FF] rounded-[15px] flex items-center justify-center">
              <img src={ASSETS.Back} alt="" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-[15px] mt-[15px]">
          <AddRelativesCard />
          <AddRelativesCard />
        </div>
      </div>
      <FooterNav prevClick={() => navigate(-1)} />
    </div>
  );
};

export default AddRelatives;
