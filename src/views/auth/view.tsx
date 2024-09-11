import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useRef, useState } from "react";
import { clientAuthStore, companyStore } from "../../store";
import { APP_ROUTES } from "../../router";
import { OpenDevice, useAuthRedirect } from "../../hook/view";
import { KeyboardComponent } from "../../components";

const Auth = () => {
  const navigate = useNavigate();

  useAuthRedirect(APP_ROUTES.HOME);

  const [inputs, setInputs] = useState({});


  const [layoutName, setLayoutName] = useState("default");
  console.log(layoutName);
  

  const { login, loginLoading } = clientAuthStore();

  const { companyRequest } = companyStore();

  const [inputName, setInputName] = useState("");

  const keyboard = useRef(null);

  const onChangeAll = (inputs: any) => {
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

  return (
    <div className="h-[85vh] flex items-center justify-center flex-col">
      <div className="w-[500px] h-[550px] rounded-[12px] bg-slate-50 flex flex-col gap-y-[30px] p-[30px] mb-[10px]">
        <div className="text-[50px] font-[700] text-center">Auth</div>
        <div className="mb-auto">
          <p className="text-[25px] font-[500] mb-[12px]">Логин</p>
          <input
            className="w-full text-[25px] h-[60px] rounded-[10px] outline-none px-[10px]"
            type="text"
            value={getInputValue("input1")}
            onFocus={(e: any) => {
              e.target.blur();
              setInputName("input1");
            }}
            onChange={onChangeInput}
          />
        </div>
        <div className="mb-auto">
          <p className="text-[25px] font-[500] mb-[12px]">Пароль</p>
          <input
            className="w-full h-[60px] text-[25px] rounded-[10px] outline-none px-[10px]"
            type="password"
            value={getInputValue("input2")}
            onFocus={(e: any) => {
              e.target.blur();
              setInputName("input2");
            }}
            onChange={onChangeInput}
          />
        </div>

        <div className="w-full h-[90px] mb-auto bg-orange flex items-center justify-center text-[30px] text-white rounded-[12px]">
          <button
            onClick={() =>
              login({
                login: getInputValue("input1"),
                password: getInputValue("input2"),
                deviceName: "asfas",
              }).then((res) => {
                if (res.data) {
                  navigate(APP_ROUTES.HOME);
                  companyRequest();
                  OpenDevice()
                }
              })
            }
            type="button"
          >
            {loginLoading ? "Loading..." : "Войти"}
          </button>
        </div>
      </div>
      <KeyboardComponent
        ref={(r: any) => (keyboard.current = r)}
        handleKeyPress={handleKeyPress}
        inputName={inputName}
        onChange={onChangeAll}
      />
    </div>
  );
};
export default Auth;
