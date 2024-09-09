interface CheckingCardType {
  title: string | undefined;
  label: string;
  className: string;
}

const CheckingCard = ({ title, label, className }: CheckingCardType) => {
  return (
    <div className={className}>
      <p className="text-[22px] font-[500] text-contentText">{label}</p>
      <p className="text-[24px] font-[700] mt-[15px]">{title}</p>
    </div>
  );
};

export default CheckingCard;
