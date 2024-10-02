import { Button } from "antd";
import { FooterNav, KeyboardComponent, Text } from "../../../components";
import { numericKeyboard } from "../../../components/Keyboard/typesKeyboars";
import InputMask from "react-input-mask";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

const Terminal = () => {
  const [isHas, setIsHas] = useState(false);

  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const [inputName, setInputName] = useState("");

  const keyboard = useRef(null);

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
        // @ts-ignore
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
      // @ts-ignore
      keyboard.current.setInput(value);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center gap-4 mt-[20px] !mb-[5px]">
        <div className="min-w-[620px]">
          <div className="flex items-center mb-[10px] px-[15px] py-[10px] border-[12px] border-purple rounded-[36px]">
            <Text text="Сумма оплаты:" className="text-[24px] font-[500]" />
            <Text
              text="120 000.00"
              className="ml-auto text-right text-[24px] font-[700]"
            />
          </div>

          <div className="bg-content mt-[10px] rounded-[36px] px-5 py-[20px]">
            {isHas ? (
              <>
                <div>
                  <div className="text-[24px] font-[500] mb-4">СМС-код</div>
                  <InputMask
                    name="input1"
                    placeholder="_ _ _ _ _ _"
                    mask="9 9 9 9 9 9"
                    className="h-[65px] w-full  border-none rounded-[22px] px-[20px] text-[24px] !outline-none"
                    value={inputs.input1}
                    onFocus={(e: any) => {
                      e.target.blur();
                      setInputName("input1");
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
                <div className="flex flex-col gap-[15px] mt-[25px]">
                  <Button
                    className="!bg-btnGreen !text-[18px] h-[65px]  [&>span]:whitespace-pre-wrap"
                    type="primary"
                    onClick={() => setIsHas(false)}
                  >
                    Изменить карту оплаты
                  </Button>
                  <Button
                    className="!bg-btnGreen h-[65px] !text-[20px] w-full"
                    type="primary"
                  >
                    Повторно получить СМС-код (59)
                  </Button>
                </div>
              </>
            ) : (
              <div>
                <div className="flex gap-[10px] w-full">
                  <InputMask
                    placeholder="0000 0000 0000 0000"
                    name="input2"
                    mask="9999 9999 9999 9999"
                    className="h-[65px] w-full border-none rounded-[22px] px-[20px] text-[24px] !outline-none"
                    value={inputs.input2}
                    onFocus={(e: any) => {
                      e.target.blur();
                      setInputName("input2");
                    }}
                    onChange={onChangeInput}
                    maskChar={null}
                  >
                    {
                      // @ts-ignore
                      (inputProps) => <input {...inputProps} />
                    }
                  </InputMask>
                  <InputMask
                    className="h-[65px] w-full border-none rounded-[22px] px-[20px] text-[24px] !outline-none"
                    placeholder="mm/yy"
                    name="input3"
                    mask="99 99"
                    value={inputs.input3}
                    onFocus={(e: any) => {
                      e.target.blur();
                      setInputName("input3");
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
                <InputMask
                  placeholder="Номер телефона смс-информир..."
                  name="input4"
                  mask="+998 99 999 99 99"
                  className="h-[65px] w-full border-none rounded-[22px] mt-[10px] px-[20px] text-[24px] !outline-none"
                  value={inputs.input4}
                  onFocus={(e: any) => {
                    e.target.blur();
                    setInputName("input4");
                  }}
                  onChange={onChangeInput}
                  maskChar={null}
                >
                  {
                    // @ts-ignore
                    (inputProps) => <input {...inputProps} />
                  }
                </InputMask>
                <Button
                  onClick={() => setIsHas(true)}
                  className="!bg-btnGreen w-[70%] mt-[10px] h-[65px]"
                  type="primary"
                >
                  Получить СМС-код
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          <KeyboardComponent
            className="numeric mx-auto "
            layout={numericKeyboard}
            ref={(r: any) => (keyboard.current = r)}
            handleKeyPress={handleKeyPress}
            inputName={inputName}
            numeric
          />
        </div>
      </div>
      <FooterNav
        prevClick={() => navigate(-1)}
        nextClick={() => navigate(APP_ROUTES.SUCCESS)}
        nextTitle="Оплатить"
      />
    </>
  );
};

export default Terminal;
