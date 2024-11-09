import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../../assets/images/assets";
import { FooterNav, Text } from "../../../components";

import { CashDevice } from "../../../hook/view";
import { socketValueStore } from "../../../store";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../config";
import { ipcRenderer } from "electron";

const Cash = () => {
  const { getTotal, values } = socketValueStore();

  const total = getTotal();

  console.log(total, "total");

  CashDevice();

  console.log(values, "values");

  const navigate = useNavigate();

  useEffect(() => {
    // Do'konning total qiymatini kuzatish
    const unsubscribe = socketValueStore.subscribe(
      (state) => state.getTotal,
      // @ts-ignore
      (total) => {
        if (total) {
          // total qiymati o'zgarganda post request yuborish
          sendPostRequest(total);
        }
      }
    );

    return () => {
      unsubscribe(); // Komponent unmount bo'lganda unsubscribe qilish
    };
  }, []);

  const sendPostRequest = async (total: any) => {
    try {
      const response = await axios.post(`${API_URL}/save-every-cash`, {
        total,
      });
      console.log("Post request muvaffaqiyatli yuborildi:", response.data);
    } catch (error) {
      console.error("Post requestda xato:", error);
    }
  };

  const handlePrint = () => {
    // @ts-ignore
    window.electronAPI.print(); // ElectronAPI orqali chop etish funksiyasini chaqirish
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
              text="170 000 сум"
              className="ml-auto text-right text-[22px] font-[700]"
            />
          </div>
          <div className="flex flex-col gap-4 px-[15px] py-[20px] border-[12px] border-purple rounded-[36px]">
            <div className="flex items-center">
              <Text text="Введено:" className="text-[22px] font-[500]" />
              <Text
                text={`${getTotal()} сум`}
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
                text="3 000 000 сум"
                className="ml-auto text-right text-[22px] font-[700] text-white"
              />
            </div>
          </div>
          <img src={ASSETS.Money} className="mx-auto mt-[20px]" alt="" />
        </div>
      </div>
      <button onClick={handlePrint}>Print "HELLO WORLD"</button>
      <div>
        <FooterNav nextTitle="Оплатить" prevClick={() => navigate(-1)} />
      </div>
    </>
  );
};

export default Cash;
