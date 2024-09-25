import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../../assets/images/assets";
import { FooterNav, Text } from "../../../components";

import { CashDevice } from "../../../hook/view";
import { socketValueStore } from "../../../store";

const { ipcRenderer } = window.require("electron");

const Cash = () => {
  const { getTotal } = socketValueStore();
  CashDevice();

  const navigate = useNavigate();
  const handlePrint = () => {
    const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            width: 80mm; /* Qog'oz kengligi */
            max-height: 500mm; /* Maksimal qog'oz uzunligi */
          }
          .receipt-container {
            padding: 10px;
            border: 1px dashed #000;
          }
          .receipt-header {
            text-align: center;
            font-size: 24px;
            margin-bottom: 20px;
          }
          .receipt-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
          }
          .receipt-total {
            margin-top: 20px;
            font-weight: bold;
            border-top: 1px solid #000;
            padding-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="receipt-container">
          <div class="receipt-header">Labbay Pay</div>
          <div class="receipt-item">
            <span>Product 1</span>
            <span>$50</span>
          </div>
          <div class="receipt-item">
            <span>Product 2</span>
            <span>$100</span>
          </div>
          <div class="receipt-item">
            <span>Product 3</span>
            <span>$30</span>
          </div>
          <div class="receipt-total">
            <span>Total:</span>
            <span>$180</span>
          </div>
          <p>Thank you for your purchase!</p>
        </div>
      </body>
    </html>
  `;

    // HTML tarkibini 'print-request' kanali orqali jo'natish
    ipcRenderer.send("print-request", htmlContent);
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
      <button onClick={handlePrint}>Print "HELLO WORLD"</button>
      <div>
        <FooterNav nextTitle="Оплатить" prevClick={() => navigate(-1)} />
      </div>
    </>
  );
};

export default Cash;
