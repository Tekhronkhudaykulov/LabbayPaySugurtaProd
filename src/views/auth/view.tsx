import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useRef, useState } from "react";
import { clientAuthStore, companyStore } from "../../store";
import { APP_ROUTES } from "../../router";
import { OpenDevice, useAuthRedirect } from "../../hook/view";
import { KeyboardComponent, Loading } from "../../components";

const Auth = () => {
  const navigate = useNavigate();

  useAuthRedirect(APP_ROUTES.HOME);

  const [inputs, setInputs] = useState({});
  const [isHas, setIsHas] = useState(false);

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
    <div>

      {loginLoading ? (
        <>
          <Loading />
          <>
            <div className="flex items-center justify-center flex-col h-[100vh] ">
              <div className="min-w-[500px] h-max rounded-[12px] bg-slate-50  p-[20px] flex flex-col  mb-[10px]">
                <div className="text-[30px] font-[700] text-center">Auth</div>
                <div className="mt-[20px]">
                  <p className="text-[18px] font-[500] !mb-[10px]">Логин</p>
                  <input
                    className="w-full text-[18px] h-[40px] rounded-[10px] outline-none px-[10px]"
                    type="text"
                    value={getInputValue("input1")}
                    onFocus={(e: any) => {
                      setIsHas(true);
                      e.target.blur();
                      setInputName("input1");
                    }}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="mt-[20px]">
                  <p className="text-[18px] font-[500] !mb-[10px]">Пароль</p>
                  <input
                    className="w-full h-[40px] text-[18px] rounded-[10px] outline-none px-[10px]"
                    type="password"
                    value={getInputValue("input2")}
                    onFocus={(e: any) => {
                      e.target.blur();
                      setInputName("input2");
                    }}
                    onChange={onChangeInput}
                  />
                </div>

                <div className="w-full mt-[15px]  bg-orange flex items-center justify-center text-[20px] text-white rounded-[12px]">
                  <button
                    className="h-[50px]"
                    onClick={() =>
                      login({
                        email: getInputValue("input1"),
                        password: getInputValue("input2"),
                        deviceName: "asfas",
                      }).then((res) => {
                        if (res.data) {
                          navigate(APP_ROUTES.HOME);
                          companyRequest();
                          OpenDevice();
                        }
                      })
                    }
                    type="button"
                  >
                    {loginLoading ? "Loading..." : "Войти"}
                  </button>
                </div>
              </div>
            </div>

            {isHas && (
              <div className="w-[80%] h-max mx-auto ">
                <KeyboardComponent
                  ref={(r: any) => (keyboard.current = r)}
                  handleKeyPress={handleKeyPress}
                  inputName={inputName}
                  onChange={onChangeAll}
                />
              </div>
            )}
          </>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center flex-col mt-[25px]">
            <div className="min-w-[500px] h-max rounded-[12px] bg-slate-50  p-[20px] flex flex-col  mb-[10px]">
              <div className="text-[30px] font-[700] text-center">Auth</div>
              <div className="mt-[20px]">
                <p className="text-[18px] font-[500] !mb-[10px]">Логин</p>
                <input
                  className="w-full text-[18px] h-[40px] rounded-[10px] outline-none px-[10px]"
                  type="text"
                  value={getInputValue("input1")}
                  onFocus={(e: any) => {
                    setIsHas(true);
                    e.target.blur();
                    setInputName("input1");
                  }}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mt-[20px]">
                <p className="text-[18px] font-[500] !mb-[10px]">Пароль</p>
                <input
                  className="w-full h-[40px] text-[18px] rounded-[10px] outline-none px-[10px]"
                  type="password"
                  value={getInputValue("input2")}
                  onFocus={(e: any) => {
                    e.target.blur();
                    setInputName("input2");
                  }}
                  onChange={onChangeInput}
                />
              </div>

              <div className="w-full mt-[15px]  bg-orange flex items-center justify-center text-[20px] text-white rounded-[12px]">
                <button
                  className="h-[50px]"
                  onClick={() =>
                    login({
                      email: getInputValue("input1"),
                      password: getInputValue("input2"),
                      deviceName: "asfas",
                    }).then((res) => {
                      if (res.data) {
                        navigate(APP_ROUTES.HOME);
                        companyRequest();
                        OpenDevice();
                      }
                    })
                  }
                  type="button"
                >
                  {loginLoading ? "Loading..." : "Войти"}
                </button>
              </div>
            </div>
          </div>

          {isHas && (
            <div className="w-[80%] h-max mx-auto ">
              <KeyboardComponent
                ref={(r: any) => (keyboard.current = r)}
                handleKeyPress={handleKeyPress}
                inputName={inputName}
                onChange={onChangeAll}
              />
            </div>
          )}
        </>
      )}

    </div>
  );
};
export default Auth;
