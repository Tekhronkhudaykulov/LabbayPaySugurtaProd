import { Text } from "..";

interface Props {
  className?: string;
  focus?: any;
  inputRef?: any;
  value?: any;
}

const PhoneBlock = ({ className, focus, inputRef, value }: Props) => {
  return (
    <div
      className={`bg-content py-4 px-5 rounded-[36px] w-[810px] mx-auto ${className}`}
    >
      <Text
        text="Введите номер телефона:"
        className="font-[500] text-[25px] mb-2.5"
      />
      <div className="flex items-center gap-[20px] p-[20px] bg-white rounded-[22px]">
        <div className="text-[41px] font-[500] border-r-[5px] border-[#E8E8E8] pr-[20px]">
          +998
        </div>

        <input
          ref={inputRef}
          value={value}
          onFocus={focus}
          className="border-transparent text-[41px] p-0 h-[50px] !outline-none"
        />
      </div>
    </div>
  );
};

export default PhoneBlock;
