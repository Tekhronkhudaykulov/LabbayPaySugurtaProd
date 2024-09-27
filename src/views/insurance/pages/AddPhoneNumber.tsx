import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import { FooterNav, KeyboardComponent, Text } from "../../../components";
import { numericKeyboard } from "../../../components/Keyboard/typesKeyboars";
import { useTranslation } from "react-i18next";

const AddPhoneNumber = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
  const [phone, setPhone] = useState("");
  const [inputName, setInputName] = useState<string>("");
  const keyboard = useRef(null);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPhone(value);

    if (keyboard.current && inputName === "phone") {
      // @ts-ignore
      keyboard.current.setInput(value);
    }
  };

  const handleKeyPress = (button: string) => {
    if (button === "{bksp}") {
      const updatedValue = phone.slice(0, -1);
      setPhone(updatedValue);
      // @ts-ignore

      if (keyboard.current) keyboard.current.setInput(updatedValue);
    } else if (button !== "{shift}" && button !== "{lock}") {
      const updatedValue = phone + button;
      setPhone(updatedValue);
      // @ts-ignore
      if (keyboard.current) keyboard.current.setInput(updatedValue);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div
        className={`bg-content py-[20px] px-5 rounded-[36px] w-[810px] mx-auto`}
      >
        <Text
          text={t("enterPhone")}
          className="font-[500] text-[22px] mb-2.5"
        />
        <div
          onClick={() => setActive(1)}
          className={`${
            active === 1 && "focus-input"
          } flex items-center gap-[20px] p-[10px] bg-white rounded-[22px]`}
        >
          <div className="text-[22px] font-[500] border-r-[5px] border-[#E8E8E8] pr-[20px]">
            +998
          </div>

          <InputMask
            id="phone"
            name="phone"
            mask="99 999 99 99"
            className="text-[22px] p-0 h-[50px] !outline-none border-none !no-caret"
            value={phone}
            onFocus={(e: any) => {
              e.target.blur();
              setInputName("phone");
            }}
            onChange={onChangeInput}
            maskChar={null}
            disabled
          >
            {
              // @ts-ignore
              (inputProps) => <input {...inputProps} />
            }
          </InputMask>
        </div>
      </div>
      <KeyboardComponent
        className="mx-auto mt-8"
        layout={numericKeyboard}
        ref={(r: any) => (keyboard.current = r)}
        handleKeyPress={handleKeyPress}
        inputName={inputName}
        numeric
      />

      <div className="mt-[20px]">
        <FooterNav prevClick={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default AddPhoneNumber;
