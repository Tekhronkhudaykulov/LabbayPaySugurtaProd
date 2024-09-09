import { DatePicker, Input } from "antd";
import { FooterNav, Text } from "../../components";
import { ASSETS } from "../../assets/images/assets";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router";
import { useState } from "react";
import "./pages/index.scss";
import "antd/dist/reset.css";

const Insurance = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>();

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClickDate1 = () => {
    setOpen1(true);
  };

  const handleClickDate2 = () => {
    setOpen2(true);
  };

  return (
    <div className="flex flex-col h-[87vh]">
      <div className="bg-[#F4F4F4] rounded-[20px] px-[25px] py-[25px]">
        <div className="bg-white px-[25px] flex items-center gap-y-[10px]  py-[25px] rounded-[36px]">
          <div>
            <Text
              text="Номер телефона:"
              className="text-[25px] font-[500] mb-[15px]"
            />
            <div>
              <div
                className={`flex items-center  gap-[20px] p-[20px] bg-[#F7F7F7] rounded-[22px] `}
              >
                <div className="text-[41px] font-[500] border-r-[5px] border-[#E8E8E8] pr-[20px]">
                  +998
                </div>
                <Input
                  onClick={() => navigate(APP_ROUTES.ADDPHONENUMBER)}
                  className={`border-transparent bg-[#F7F7F7] outline-none  text-[41px] p-0 h-[50px] `}
                />
              </div>
            </div>
            <div className="flex items-center justify-between   gap-[20px] mt-[25px] py-[25px] px-[20px] bg-[#F7F7F7] rounded-[22px] ">
              <label className="text-[26px] font-[500]">
                Владелец является заявителем
              </label>

              <input
                type="checkbox"
                className="ml-2 h-6 w-6 rounded border-gray-300 focus:ring-blue-500"
              />
            </div>
          </div>
          <p className="w-[50%] text-center text-[25px] text-[red] ">
            Введите существующий номер телефона, так как СМС о покупке полиса
            будет отправлено на этот номер.
          </p>
        </div>
        <div className="flex flex-col gap-y-[25px] mt-[25px]">
          <div className="grid grid-cols-3 items-center gap-x-[25px]">
            <div className="text-[26px] font-[700]">Выберите тип полиса:</div>
            <div
              onClick={() => handleClick(0)}
              className={`flex items-center gap-x-[30px] h-[100px] px-[20px] justify-between bg-white  rounded-[15px] ${
                activeIndex === 0 && "border border-purple"
              }`}
            >
              <p className="text-[28px] font-[700]">Неограничено : </p>
              <img src={ASSETS.Infinite} alt="" />
            </div>
            <div
              onClick={() => handleClick(1)}
              className={`flex items-center gap-x-[30px] h-[100px] px-[20px] justify-between bg-white   rounded-[15px] ${
                activeIndex === 1 && "border border-purple"
              }`}
            >
              <p className="text-[28px] font-[700]">До 5 человек: </p>
              <img src={ASSETS.Mens} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-3  gap-x-[25px] items-center">
            <div className="text-[26px] font-[700]">
              Выберите период <br /> страхования:
            </div>
            <div
              onClick={() => handleClick(2)}
              className={`flex items-center gap-x-[30px] h-[100px] px-[20px] justify-between bg-white  rounded-[15px] ${
                activeIndex === 2 && "border border-purple"
              }`}
            >
              <p className="text-[28px] font-[700]">1 год: </p>
              <p className="text-[28px] font-[700] text-[#7076FF]">
                168 000 сум
              </p>
            </div>
            <div>
              <div
                onClick={() => handleClick(3)}
                className={`flex items-center gap-x-[30px] h-[100px] px-[20px] justify-between bg-white  rounded-[15px] ${
                  activeIndex === 3 && "border border-purple"
                }`}
              >
                <p className="text-[28px] font-[700]">6 месяцев: </p>
                <p className="text-[28px] font-[700] text-[#7076FF]">
                  117 600 сум
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[28px] font-[700]">Дата страхования:</p>
            <div className="h-[100px] gap-x-[20px] px-[25px] rounded-[15px] bg-white flex items-center justify-between">
              <div onClick={handleClickDate1}>
                <DatePicker
                  className="custom-date-picker"
                  open={open1}
                  onOpenChange={(status) => setOpen1(status)}
                />
                {/* <p className="text-[28px] font-[700]">11.06.2024</p> */}
              </div>
              <img src={ASSETS.Next} alt="" />
              <div onClick={handleClickDate2}>
                <DatePicker
                  className="custom-date-picker"
                  open={open2}
                  onOpenChange={(status) => setOpen2(status)}
                />

                {/* <p className="text-[28px] font-[700]">11.06.2025</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <FooterNav nextClick={() => navigate(APP_ROUTES.ADDRELATIVES)} />
      </div>
    </div>
  );
};

export default Insurance;
