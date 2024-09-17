import { useNavigate, useParams } from "react-router-dom";
import { FooterNav, KeyboardComponent, Text } from "../../components";
import "./style.scss";
import { APP_ROUTES } from "../../router";
import { useEffect, useRef, useState } from "react";
import { companyStore, stepsStore } from "../../store";
import { useAuthRedirect } from "../../hook/view";

const RegisterCar = () => {
  const navigate = useNavigate();

  const { stepOneRequest, stepOneLoading } = stepsStore();
  console.log(stepOneLoading, stepOneRequest);

  const [inputs, setInputs] = useState({});

  const [layoutName, setLayoutName] = useState("default");
  console.log(layoutName);

  const { companyDetailRequest, companyDetailItem } = companyStore();

  const { id } = useParams();

  useEffect(() => {
    companyDetailRequest({ company_id: id });
  }, []);

  useAuthRedirect(`${APP_ROUTES.REGISTER_CAR}/${id}`);

  const [inputName, setInputName] = useState("");

  const keyboard = useRef(null);

  const onChangeAll = (inputs: any) => {
    // Ensure that `input1` length does not exceed 8 characters
    if (inputs.input1 && inputs.input1.length > 8) {
      inputs.input1 = inputs.input1.slice(0, 8); // Truncate to 8 characters
    }
    if (inputs.input2 && inputs.input2.length > 3) {
      inputs.input2 = inputs.input2.slice(0, 3); // Truncate to 8 characters
    }

    setInputs({ ...inputs });
  };

  const handleShift = () => {
    setLayoutName((prev) => (prev === "default" ? "shift" : "default"));
  };

  const onKeyPress = (button: any) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
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
      keyboard.current.setInputs(value);
    }
  };

  const handleKeyPress = (button: any) => {
    // Handle backspace explicitly
    if (button === "{bksp}") {
      const currentValue = getInputValue(inputName);
      const updatedValue = currentValue.slice(0, -1); // Remove last character
      setInputs((prevInputs) => ({
        ...prevInputs,
        [inputName]: updatedValue,
      }));
      // @ts-ignore
      if (keyboard.current) keyboard.current.setInput(updatedValue);
    } else {
      onKeyPress(button);
    }
  };

  const getInputValue = (inputName: any) => {
    // @ts-ignore
    const value = inputs[inputName] || "";

    // if (inputName === "input3") {
    //   // Convert to a number first if it's a valid numeric string
    //   const numericValue = Number(value.replace(/\s+/g, "")); // Remove spaces if any

    //   // Check if the numericValue is a valid number before formatting
    //   if (!isNaN(numericValue) && numericValue !== 0) {
    //     return numericValue.toLocaleString("ru-RU");
    //   }
    // }

    return value;
  };

  // @ts-ignore
  let serviceId = companyDetailItem[0]?.service_id;
  return (
    <div className="flex flex-col ">
      <div className="register-car-container h-max">
        <div className="bg-[#F4F4F4] py-[15px] px-[15px] rounded-[36px] ">
          <div>
            <Text
              text="Номер машины"
              className="text-[20px] font-[500] mb-[5px]"
            />
            <input
              name="input1"
              className="px-[20px]  h-[60px] text-[22px] w-full font-[500] outline-none text-[#E8E8E8] border-[10px]  rounded-[21px] "
              type="text"
              placeholder="01A000AA"
              value={getInputValue("input1")}
              onFocus={(e: any) => {
                e.target.blur();
                setInputName("input1");
              }}
              onChange={onChangeInput}
              maxLength={8}
            />
          </div>
          <div className="mt-[15px]">
            <Text
              text="Серия и номер техпаспорта"
              className="text-[20px]  font-[500] mb-[5px]"
            />
            <div className="input-container">
              <input
                name="input2"
                className="px-[10px] h-[60px] text-[20px] w-full font-[500] outline-none text-[#E8E8E8] border rounded-[21px]"
                type="text"
                placeholder="AAF"
                value={getInputValue("input2")}
                onFocus={(e: any) => {
                  e.target.blur();
                  setInputName("input2");
                }}
                onChange={onChangeInput}
                maxLength={3}
              />
              <input
                name="input3"
                className="px-[20px] h-[60px] text-[22px] w-full font-[500] outline-none text-[#E8E8E8] border rounded-[21px]"
                type="text"
                placeholder="номер техпаспорта"
                value={getInputValue("input3")}
                onFocus={(e: any) => {
                  e.target.blur();
                  setInputName("input3");
                }}
                onChange={onChangeInput}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#F4F4F4] py-[10px]  px-[15px] rounded-[36px] ">
          <div className="flex items-center justify-center">
            {/* <img src={ASSETS.InsonLogo} alt="" /> */}
            <p className="text-[30px] font-bold text-btnGreen">
              {companyDetailItem[0]?.name}
            </p>
          </div>
          <div className="bg-white pt-[15px] pb-[12%] px-[15px] mt-[15px]  rounded-[30px]">
            <div className="flex items-center justify-between">
              <p className="text-[22px] font-[600]">ОСАГО:</p>
              <p className="text-[22px] font-[600]">117 000 сум</p>
            </div>
            <div className="flex items-center justify-between mt-[15px]">
              <p className="text-[22px] font-[600]">Сумма покрытия:</p>
              <p className="text-[22px] font-[600]">117 000 сум</p>
            </div>
          </div>
        </div>
      </div>
      <KeyboardComponent
        className=" w-[85%] mx-auto !mt-[10px]"
        ref={(r: any) => (keyboard.current = r)}
        handleKeyPress={handleKeyPress}
        inputName={inputName}
        onChange={onChangeAll}
      />

      <div className="mt-auto">
        <FooterNav
          prevClick={() => navigate(APP_ROUTES.SERVICES)}
          nextClick={() => {
            navigate(APP_ROUTES.DATA_CHECKING_CAR);
          }}
          nextTitle="ДАЛЕЕ"
        />
      </div>
    </div>
  );
};

export default RegisterCar;
