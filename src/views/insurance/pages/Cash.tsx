import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../../assets/images/assets";
import { FooterNav, Text } from "../../../components";

import { CashDevice } from "../../../hook/view";
import { socketValueStore } from "../../../store";
import { useState } from "react";

declare global {
  interface Window {
    printer: {
      printText: (text: string) => Promise<string>;
    };
  }
}

const Cash = () => {
  const { getTotal } = socketValueStore();
  CashDevice();

  const navigate = useNavigate();

  const [text, setText] = useState("HELLO WORLD");
  const [message, setMessage] = useState("HELLO WORL");

  const printText = async () => {
    try {
      const response = await fetch("http://localhost:3001/print", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const result = await response.text();
      setMessage(result);
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="flex justify-between gap-4  mt-[10px]">
        <div className="min-w-[620px]">
          <div className="flex items-center mb-[15px] px-[15px] py-[20px] border-[12px] border-purple rounded-[36px]">
            <Text
              text="Указанная сумма оплаты:"
              className="text-[22px] font-[500]"
            />
            <Text
              text={getTotal()}
              className="ml-auto text-right text-[22px] font-[700]"
            />
          </div>
          <div className="flex flex-col gap-4 px-[15px] py-[20px] border-[12px] border-purple rounded-[36px]">
            <div className="flex items-center">
              <Text text="Введено:" className="text-[22px] font-[500]" />
              <Text
                text="0 сум"
                className="ml-auto text-right text-[22px] font-[700]"
              />
            </div>
            <div className="flex items-center">
              <Text text="К зачислению:" className="text-[22px] font-[500]" />
              <Text
                text="0 сум"
                className="ml-auto text-right text-[22px] font-[700]"
              />
            </div>
            <div className="flex items-center">
              <Text
                text="Комиссия сервиса:"
                className="text-[22px] font-[500]"
              />
              <Text
                text="0 сум"
                className="ml-auto text-right text-[22px] font-[700]"
              />
            </div>
            <div className="flex items-center">
              <Text text="Лишняя сумма:" className="text-[22px] font-[500]" />
              <Text
                text="0 сум"
                className="ml-auto text-right text-[22px] font-[700]"
              />
            </div>
            <Text
              text="Будет использованная для пополнения мобильной связи"
              className="text-[20px] font-[500]"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-4 bg-purple rounded-[36px] p-5">
            <div className="flex items-center">
              <Text
                text="Минимум:"
                className="text-[22px] font-[700] text-white"
              />
              <Text
                text="5000 сум"
                className="ml-auto text-right text-[22px] font-[700] text-white"
              />
            </div>
            <div className="flex items-center">
              <Text
                text="Максимум:"
                className="text-[22px] font-[700] text-white"
              />
              <Text
                text="5000 сум"
                className="ml-auto text-right text-[22px] font-[700] text-white"
              />
            </div>
          </div>
          <img src={ASSETS.Money} className="mx-auto mt-[20px]" alt="" />
        </div>
      </div>

      <div>
        <FooterNav
          nextTitle="Оплатить"
          prevClick={() => navigate(-1)}
          nextClick={() => printText()}
        />
      </div>
    </>
  );
};

export default Cash;
