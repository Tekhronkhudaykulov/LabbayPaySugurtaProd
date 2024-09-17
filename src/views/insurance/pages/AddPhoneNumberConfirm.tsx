import { Button } from "antd";
import { FooterNav, KeyboardComponent, Text } from "../../../components";
import InsuranceInfo from "../component/InsuranceInfo";
import { useNavigate } from "react-router-dom";
import { numericKeyboard } from "../../../components/Keyboard/typesKeyboars";
import { useRef, useState } from "react";
import { APP_ROUTES } from "../../../router";
import InputMask from "react-input-mask";

const AddPhoneNumberConfirm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ input1: "", sms: "" });
  const [inputName, setInputName] = useState("");
  const keyboard = useRef<any>(null);
  const [isHas, setIsHas] = useState(false);

  const handleKeyPress = (button: any) => {
    setInputs((prevInputs) => {
      // @ts-ignore

      const currentValue = prevInputs[inputName] || "";

      let updatedValue = currentValue;

      if (button === "{bksp}") {
        // Handle backspace by removing the last character
        updatedValue = currentValue.slice(0, -1);
      } else {
        // Handle other key presses
        updatedValue = currentValue + button;
      }

      // Immediately update the keyboard input
      if (keyboard.current) {
        keyboard.current.setInput(updatedValue);
      }

      return {
        ...prevInputs,
        [inputName]: updatedValue,
      };
    });
  };

  const onChangeInput = (event: any) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));

    // Ensure that keyboard input value is updated
    if (keyboard.current && inputName === name) {
      keyboard.current.setInput(value);
    }
  };

  return (
    <div className="flex flex-col ">
      <InsuranceInfo />
      <div className="mt-[20px] grid grid-cols-[1fr_50%]">
        <div className="bg-content py-[15px] px-[20px] rounded-[35px] h-max">
          <div>
            <Text
              text="Введите номер телефона"
              className="text-[25px] font-[500] mb-[10px]"
            />
            <div>
              <div
                className={`flex items-center  gap-[20px] p-[10px] bg-white rounded-[22px] `}
              >
                <div className="text-[20px] font-[500] border-r-[5px] border-[#E8E8E8] pr-[20px]">
                  +998
                </div>
                <InputMask
                  name="input1"
                  mask="99 999 99 99"
                  className="text-[20px] p-0 h-[45px] !outline-none"
                  value={inputs.input1}
                  onFocus={(e: any) => {
                    setInputName("input1");
                    e.target.blur();
                  }}
                  onChange={onChangeInput}
                  maskChar={null}
                >
                  {
                    // @ts-ignore
                    (inputProps) => <input {...inputProps} />
                  }
                </InputMask>
              </div>
            </div>
          </div>
          {isHas && (
            <div className="mt-[20px]">
              <Text
                text="СМС-код"
                className="text-[20px] font-[500] mb-[10px]"
              />
              <div>
                <div
                  className={`flex items-center gap-[10px] p-[10px] bg-white rounded-[22px] `}
                >
                  <InputMask
                    name="sms"
                    mask="999 999"
                    className="text-[20px] p-0 h-[45px] !outline-none"
                    value={inputs.sms}
                    onFocus={(e: any) => {
                      setInputName("sms");
                      e.target.blur();
                    }}
                    onChange={onChangeInput}
                    maskChar={null}
                  >
                    {
                      // @ts-ignore
                      (inputProps) => <input {...inputProps} />
                    }
                  </InputMask>
                </div>
              </div>
            </div>
          )}
          <Button
            type="primary"
            onClick={() => setIsHas(true)}
            className={`!bg-btnGreen uppercase !text-[20px] h-[60px] w-full mt-[20px]`}
          >
            {isHas ? "Повторно получить СМС-код (59)" : "Получить СМС-код"}
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <KeyboardComponent
            className="mx-auto"
            ref={(r: any) => (keyboard.current = r)}
            handleKeyPress={handleKeyPress}
            inputName={inputName}
            layout={numericKeyboard}
            numeric
          />
        </div>
      </div>
      <FooterNav
        prevClick={() => navigate(-1)}
        nextClick={() =>
          navigate(`${APP_ROUTES.PAYMENTTYPE}/${APP_ROUTES.SELECTCURRENCY}`)
        }
      />
    </div>
  );
};

export default AddPhoneNumberConfirm;
