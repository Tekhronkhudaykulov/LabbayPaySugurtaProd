import { Text } from "..";
import { ASSETS } from "../../assets/images/assets";

interface Props {
  className?: string;
  onCashClick?: () => void;
  onCardClick?: () => void;
}

const TypePaymentSection = ({ className, onCashClick, onCardClick }: Props) => {
  return (
    <div
      className={`bg-section rounded-[36px] px-[26px] py-[10px] ${className}`}
    >
      <Text
        text="Выберите способ оплаты:"
        className="text-[25px] font-[700] mb-[26px]"
      />
      <div className="grid grid-cols-2 gap-4">
        <div
          onClick={onCashClick}
          className="flex flex-col items-center justify-center gap-4 rounded-[31px] bg-white p-[20px]"
        >
          <Text
            text="Наличными"
            className="text-[22px] font-[700] text-center"
          />
          <div className="border-[#E7E7E7] border-[2px] rounded-[10px] p-[5px]">
            <img className=" object-contain" src={ASSETS.Sum} alt="" />
          </div>
        </div>
        <div
          onClick={onCardClick}
          className="flex flex-col items-center justify-center gap-4 rounded-[31px] bg-white p-[20px]"
        >
          <Text
            text="Банковской картой"
            className="text-[22px] font-[700] text-center"
          />
          <div className="border-[#E7E7E7] border-[2px] rounded-[17px] p-[5px]">
            <img
              className="w-[205px] h-[67px] object-cover"
              src={ASSETS.Uzcard}
              alt=""
            />
          </div>
          <div className="border-[#E7E7E7] border-[2px] rounded-[17px] p-[5px]">
            <img
              className="w-[205px] h-[67px] object-cover"
              src={ASSETS.Humo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypePaymentSection;
