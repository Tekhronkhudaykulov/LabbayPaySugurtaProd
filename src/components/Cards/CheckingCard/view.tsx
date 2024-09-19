import { useState } from "react";

interface CheckingCardType {
  title?: string | undefined;
  label?: string;
  className: string;
  ind?: number;
}

const CheckingCard = ({ title, label, className }: CheckingCardType) => {
  return (
    <div className={className}>
      <div className="text-[18px] font-[500] h-[38px] text-contentText">
        {label}
      </div>
      <p className="text-[20px] font-[700] !mt-[10px]">{title}</p>
    </div>
  );
};

const CheckingCardInput = ({ label, className, ind }: CheckingCardType) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`${className} ${
        isActive ? "border-[2px] border-[#7076FF]" : ""
      }`}
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={ind}
    >
      <div className="text-[18px] font-[500] h-[38px] text-contentText">
        {label}
      </div>
      <input
        className="text-[20px]  font-[700] outline-none w-full"
        type="text"
      />
    </div>
  );
};

export { CheckingCard, CheckingCardInput };
