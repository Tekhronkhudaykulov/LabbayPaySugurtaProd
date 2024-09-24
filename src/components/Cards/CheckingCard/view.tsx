interface CheckingCardType {
  title?: string | undefined;
  label?: string;
  className: string;
  ind?: number;
  handleClick?: () => void;
  handleBlur?: () => void;
  isActive?: any;
  value?: any;
  onFocus?: any;
  onChange?: any;
}

const CheckingCard = ({ title, label, className }: CheckingCardType) => {
  return (
    <div className={className}>
      <div className="text-[18px] font-[500] h-[60px] text-contentText">
        {label}
      </div>
      <p className="text-[20px] font-[700] !mt-[10px]">{title}</p>
    </div>
  );
};

const CheckingCardInput = ({
  label,
  className,
  handleClick,
  handleBlur,
  value,
  onFocus,
  onChange,
}: CheckingCardType) => {
  return (
    <label
      className={`${className} `}
      onClick={handleClick}
      onBlur={handleBlur}
      onFocus={onFocus}
    >
      <div className="text-[18px] font-[500] h-[38px] text-contentText">
        {label}
      </div>
      <input
        typeof="number"
        className="text-[20px] w-full border-none font-[700] outline-none"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export { CheckingCard, CheckingCardInput };
