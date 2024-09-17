import { ReactNode } from "react";

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
  return (
    <div
      onClick={onClick}
      className={`flex flex-col pt-[20px] px-[24px] h-[280px] ${className} w-full   bg-card rounded-[36px]`}
    >
      <img src={img} alt="" />
      <p className="text-[20px] !mt-[20px] leading-[24px] font-[600]">
        {title}
      </p>
      <button className={classNameButton}>ОФОРМИТЬ</button>
    </div>
  );
};

export default ServicesCard;
