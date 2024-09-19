import { useEffect, useState } from "react";
import Keyboard from "react-simple-keyboard";
import { defaultKeyboard, displayKeyboard } from "./typesKeyboars";
import "react-simple-keyboard/build/css/index.css";

interface Props {
  handleChangeParams?: (e: any) => void;
  onKeyPressProps?: (button: string) => void;
  layout?: any;
  maxLength?: number | null;
  numeric?: boolean;
  className?: string;
  onChange?: (e: any) => void;
  inputName?: string;
  ref?: any;
  handleKeyPress?: any;
}

const KeyboardComponent = ({
  handleKeyPress,
  layout = defaultKeyboard,
  maxLength = 50,
  numeric,
  className,
  onChange,
  inputName,
  ref,
}: Props) => {
  const [layoutName, setLayoutName] = useState("default");
  const [buttonTheme, setButtonTheme] = useState<any>([]);

  useEffect(() => {
    if (numeric) {
      setButtonTheme([
        {
          class: "custom-button-big-numeric", // Sahifa uchun raqamli klavishlar
          buttons: "1 2 3 4 5 6 7 8 9 0", // Sinfni oladigan tugmalar
        },
        {
          class: "custom-bksp-button", // bksp tugmasi uchun alohida sinf
          buttons: "{bksp}", // Sinfni oladigan bksp tugmasi
        },
      ]);
    }
  }, []);

  const keyboardOptions = {
    layout: {
      default: [
        "1 2 3 4 5 6 7 8 9 0 {bksp}",
        "q w e r t y u i o p {shift}",
        "{alt} a s d f g h j k l {enter}",
        "z x c v b n m , . /",
      ],

      shift: [
        "! @ # $ % ^ & * ( ) {bksp}",
        "Q W E R T Y U I O P {shift}",
        "{alt} A S D F G H J K L {enter}",
        "Z X C V B N M < > ?",
      ],
    },
    display: {
      "{shift}": "<div class='my-shift-button'></div>",
    },
    buttonTheme: buttonTheme,
  };

  return (
    <div className={`${numeric && "numeric"} ${className}`}>
      <Keyboard
        keyboardRef={ref}
        {...keyboardOptions}
        onChangeAll={onChange}
        onKeyPress={handleKeyPress}
        inputName={inputName}
        layoutName={layoutName}
        layout={layout}
        onRender={() => console.log(`Rendered`)}
        display={displayKeyboard}
        physicalKeyboardHighlight
        preventMouseDownDefault
        maxLength={maxLength}
      />
    </div>
  );
};

export default KeyboardComponent;
