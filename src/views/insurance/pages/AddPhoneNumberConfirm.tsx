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
    <div className="flex flex-col h-[100%]">
      <InsuranceInfo />
      <div className="mt-[50px] grid grid-cols-[1fr_30%]">
        <div className="bg-content py-[15px] px-[20px] rounded-[35px] h-[530px]">
          <div>
            <Text
              text="Введите номер телефона"
              className="text-[25px] font-[500] mb-[10px]"
            />
            <div>
              <div
                className={`flex items-center  gap-[20px] p-[20px] bg-white rounded-[22px] `}
              >
                <div className="text-[41px] font-[500] border-r-[5px] border-[#E8E8E8] pr-[20px]">
                  +998
                </div>
                <InputMask
                  name="input1"
                  mask="99 999 99 99"
                  className="text-[41px] p-0 h-[50px] !outline-none"
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
                className="text-[25px] font-[500] mb-[10px]"
              />
              <div>
                <div
                  className={`flex items-center gap-[20px] p-[20px] bg-white rounded-[22px] `}
                >
                  <InputMask
                    name="sms"
                    mask="999 999"
                    className="text-[41px] p-0 h-[50px] !outline-none"
                    value={inputs.sms}
                    onFocus={(e:any) => {
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
            className={`!bg-btnGreen uppercase w-[550px] mt-[30px]`}
          >
            {isHas ? "Повторно получить СМС-код (59)" : "Получить СМС-код"}
          </Button>
        </div>
        <div>
          <KeyboardComponent
            className="mx-auto mt-8"
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
