import { useRef, useState } from "react";
import { SelectInsurance } from "../component/InsuranceInput";
import { FooterNav, KeyboardComponent } from "../../../components";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

const AddRelativesPerson = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const [layoutName, setLayoutName] = useState("default");
  const [active, setActive] = useState(0);
  console.log(layoutName);

  const [inputName, setInputName] = useState("");

  const keyboard = useRef(null);

  // const onChangeAll = (inputs: any) => {
  //   // Ensure that `input1` length does not exceed 8 characters
  //   if (inputs.input1 && inputs.input1.length > 8) {
  //     inputs.input1 = inputs.input1.slice(0, 8); // Truncate to 8 characters
  //   }
  //   if (inputs.input2 && inputs.input2.length > 3) {
  //     inputs.input2 = inputs.input2.slice(0, 3); // Truncate to 8 characters
  //   }

  //   setInputs({ ...inputs });
  // };

  const onChangeAll = (inputs: any) => {
    const updatedInputs = { ...inputs };

    if (updatedInputs.input1) {
      // Ensure that `input1` length does not exceed 8 characters
      if (updatedInputs.input1.length > 8) {
        updatedInputs.input1 = updatedInputs.input1.slice(0, 8); // Truncate to 8 characters
      }

      // Convert `input1` to date format dd.mm.yyyy if exactly 8 characters
      if (updatedInputs.input1.length === 8) {
        const day = updatedInputs.input1.slice(0, 2);
        const month = updatedInputs.input1.slice(2, 4);
        const year = updatedInputs.input1.slice(4, 8);
        updatedInputs.input1 = `${day}.${month}.${year}`;
      }
    }

    if (updatedInputs.input2 && updatedInputs.input2.length > 3) {
      updatedInputs.input2 = updatedInputs.input2.slice(0, 3); // Truncate to 3 characters
    }

    setInputs(updatedInputs);
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
      keyboard.current.setInput(value);
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
    return inputs[inputName] || "";
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-grayCard py-[10px] gap-y-[15px] px-[25px] rounded-[30px] grid grid-cols-2 gap-x-[25px]">
          <SelectInsurance />
          <div>
            <p className="!mb-[15px] text-[20px] font-[700]">Дата рождения</p>
            <input
              type="text"
              className={`bg-white outline-none p-[20px] h-[60px] border-none text-[20px] w-full rounded-[20px] ${
                active === 1 && "focus-input"
              }`}
              placeholder="DD.MM.YYYY"
              value={getInputValue("input1")}
              onFocus={(e: any) => {
                e.target.blur();
                setInputName("input1");
                setActive(1);
              }}
              onChange={onChangeInput}
            />
          </div>
          <div>
            <p className="!mb-[15px] text-[20px] font-[700]">
              Серия паспорта/ID-card:
            </p>
            <input
              type="text"
              className={`bg-white outline-none border-none p-[20px] h-[60px] text-[20px] w-full rounded-[20px] ${
                active === 2 && "focus-input"
              }`}
              placeholder="AA"
              value={getInputValue("input2")}
              onFocus={(e: any) => {
                e.target.blur();
                setInputName("input2");
                setActive(2);
              }}
              onChange={onChangeInput}
            />
          </div>
          <div>
            <p className="!mb-[15px] text-[20px] font-[700]">
              Номер паспорта/ID-card:
            </p>
            <input
              type="text"
              className={`bg-white outline-none border-none p-[20px] h-[60px] text-[20px] w-full rounded-[20px] ${
                active === 3 && "focus-input"
              }`}
              placeholder="0 0 0 0 0 0 1"
              value={getInputValue("input3")}
              onFocus={(e: any) => {
                e.target.blur();
                setInputName("input3");
                setActive(3);
              }}
              onChange={onChangeInput}
            />
          </div>
        </div>
      </div>
      <div className="mt-[5px]">
        <KeyboardComponent
          className="mt-auto w-[85%] mx-auto"
          ref={(r: any) => (keyboard.current = r)}
          handleKeyPress={handleKeyPress}
          inputName={inputName}
          onChange={onChangeAll}
        />
      </div>
      <div className="mt-[-5px]">
        <FooterNav
          prevClick={() => navigate(-1)}
          nextClick={() =>
            navigate(`${APP_ROUTES.PAYMENTTYPE}/${APP_ROUTES.SELECTCURRENCY}`)
          }
        />
      </div>
    </>
  );
};

export default AddRelativesPerson;
