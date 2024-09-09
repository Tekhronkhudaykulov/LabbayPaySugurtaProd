interface ServicePaymentCardType {
  title: string;
  img: string;
  className?: string;
  onclick: () => void;
}

const ServivePaymentCard = ({
  title,
  img,
  className,
  onclick,
}: ServicePaymentCardType) => {
  return (
    <div
      onClick={onclick}
      className={`bg-[red] w-full rounded-[31px] card-gradient-service flex `}
    >
      <p className={`text-black font-[700] text-[36px] ${className}`}>
        {title}
      </p>
      <img src={img} alt="" />
    </div>
  );
};

export default ServivePaymentCard;
