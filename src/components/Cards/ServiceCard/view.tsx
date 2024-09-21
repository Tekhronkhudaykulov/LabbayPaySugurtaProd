import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
  onClick?: () => void;
  img?: string;
  classNameButton: string;
  title: ReactNode | string;
}

const ServicesCard = ({
  className,
  onClick,
  img,
  title,
  classNameButton,
}: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      onClick={onClick}
      className={`flex flex-col pt-[20px] px-[24px] h-[280px] ${className} w-full   bg-card rounded-[36px]`}
    >
      <img src={img} alt="" />
      <p className="text-[20px] !mt-[20px] leading-[24px] font-[600]">
        {title}
      </p>
      <button
        className={`${classNameButton} 
               transform transition-transform duration-150 ease-in-out 
               active:scale-90`}
      >
        {t("cardButton")}
      </button>
    </div>
  );
};

export default ServicesCard;
