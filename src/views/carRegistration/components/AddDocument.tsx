import { useTranslation } from "react-i18next";
import { CheckingCardInput } from "../../../components/Cards";
import { useRef, useState } from "react";
import { FooterNav, KeyboardComponent } from "../../../components";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

const AddDocument = () => {
  const { t } = useTranslation();

  const keyboard = useRef(null);

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(0);

  const [layoutName, setLayoutName] = useState("default");

  const [inputName, setInputName] = useState("");

  const [inputs, setInputs] = useState({});

  const onChangeAll = (inputs: any) => {
    // Ensure that `input1` length does not exceed 8 characters
    if (inputs.input1 && inputs.input1.length > 2) {
      inputs.input1 = inputs.input1.slice(0, 2); // Truncate to 8 characters
    }
    if (inputs.input2 && inputs.input2.length > 7) {
      inputs.input2 = inputs.input2.slice(0, 7); // Truncate to 8 characters
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

    return value;
  };

  const handleClick = (index: any) => {
    setIsActive(index);
  };

  return (
    <div className="bg-content py-[10px] px-[24px] mt-[15px]">
      <div className="grid grid-cols-3 gap-x-[15px] py-[10px]">
        <CheckingCardInput
          label={t("passport.passportSeria")}
          className={`bg-white rounded-[14px] button-animation px-[20px] py-[10px] ${
            isActive === 0 ? "focus-input" : ""
          }`}
          value={getInputValue("input1")}
          onFocus={(e: any) => {
            e.target.blur();
            setInputName("input1");
          }}
          onChange={onChangeInput}
          handleClick={() => {
            handleClick(0);
          }}
          isActive={isActive}
        />
        <CheckingCardInput
          label={t("passport.passportNumber")}
          className={`bg-white rounded-[14px] button-animation px-[20px] py-[10px] ${
            isActive === 1 ? "focus-input" : ""
          }`}
          value={getInputValue("input2")}
          onFocus={(e: any) => {
            e.target.blur();
            setInputName("input2");
          }}
          onChange={onChangeInput}
          handleClick={() => {
            handleClick(1);
          }}
          isActive={isActive}
        />
      </div>
      <div className="mt-[25px]">
        <KeyboardComponent
          ref={(r: any) => (keyboard.current = r)}
          handleKeyPress={handleKeyPress}
          inputName={inputName}
          onChange={onChangeAll}
        />
      </div>
      <div>
        <FooterNav
          prevClick={() => navigate(-1)}
          nextClick={() => navigate(APP_ROUTES.INSURANCE)}
        />
      </div>
    </div>
  );
};

export default AddDocument;
