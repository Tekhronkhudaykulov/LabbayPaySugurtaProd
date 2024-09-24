import { DatePicker, Input, Modal } from "antd";
import { FooterNav, Text } from "../../components";
import { ASSETS } from "../../assets/images/assets";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router";
import { useState } from "react";
import "./pages/index.scss";
import "antd/dist/reset.css";
import { AddPhoneNumber } from "..";
import { useTranslation } from "react-i18next";

const Insurance = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>();
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const { t } = useTranslation();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClickDate1 = () => {
    setOpen1(true);
  };

  const handleClickDate2 = () => {
    setOpen2(true);
  };

  return (
    <>
      <Modal
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
      >
        <AddPhoneNumber />
      </Modal>
      <div className="flex flex-col">
        <div className="bg-[#F4F4F4] rounded-[20px] px-[25px] py-[15px]">
          <div className="bg-white px-[25px] flex items-center gap-y-[10px]  py-[25px] rounded-[36px]">
            <div>
              <Text
                text={t("phone")}
                className="text-[20px] font-[500] mb-[15px]"
              />
              <div>
                <div
                  className={`flex items-center  gap-[20px] p-[10px] bg-[#F7F7F7] rounded-[22px] `}
                >
                  <div className="text-[25px] font-[500] border-r-[5px] border-[#E8E8E8] pr-[20px]">
                    +998
                  </div>
                  <Input
                    onClick={showModal}
                    className={`border-transparent bg-[#F7F7F7] outline-none  text-[25px]  `}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between   gap-[20px] mt-[20px] py-[25px] px-[20px] bg-[#F7F7F7] rounded-[22px] ">
                <label className="text-[25px] font-[500]">
                  {t("insurance.howI")}
                </label>

                <input
                  type="checkbox"
                  className="ml-2 h-6 w-6 rounded border-gray-300 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="f w-[40%] mx-auto">
              <p className=" text-center text-[20px] text-[red] ">
                {t("insurance.titleSms")}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-[15px] mt-[15px]">
            <div className="grid grid-cols-3 items-center gap-x-[25px]">
              <div className="text-[20px] font-[700]">
                {t("insurance.policeType")}:
              </div>
              <div
                onClick={() => handleClick(0)}
                className={`flex items-center gap-x-[30px] h-[70px] px-[20px] justify-between bg-white  rounded-[15px] ${
                  activeIndex === 0 && "border border-purple"
                }`}
              >
                <p className="text-[20px] font-[700]">
                  {t("insurance.Unlimited")} :{" "}
                </p>
                <img
                  className="w-[50px] h-[50px]"
                  src={ASSETS.Infinite}
                  alt=""
                />
              </div>
              <div
                onClick={() => handleClick(1)}
                className={`flex items-center gap-x-[30px] h-[70px] px-[20px] justify-between bg-white   rounded-[15px] ${
                  activeIndex === 1 && "border border-purple"
                }`}
              >
                <p className="text-[20px] font-[700]">
                  {t("insurance.PeopleTotal")}:{" "}
                </p>
                <img className="w-[50px] h-[50px]" src={ASSETS.Mens} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-3  gap-x-[25px] items-center">
              <div className="text-[20px] font-[700]">
                {t("insurance.insuranceYear")}
              </div>
              <div
                onClick={() => handleClick(2)}
                className={`flex items-center gap-x-[30px] h-[70px] px-[20px] justify-between bg-white  rounded-[15px] ${
                  activeIndex === 2 && "border border-purple"
                }`}
              >
                <p className="text-[20px] font-[700]">{t("insurance.year")} </p>
                <p className="text-[20px] font-[700] text-[#7076FF]">
                  168 000 сум
                </p>
              </div>
              <div>
                <div
                  onClick={() => handleClick(3)}
                  className={`flex items-center gap-x-[30px] h-[70px] px-[20px] justify-between bg-white  rounded-[15px] ${
                    activeIndex === 3 && "border border-purple"
                  }`}
                >
                  <p className="text-[20px] font-[700]">
                    {t("insurance.month")}:{" "}
                  </p>
                  <p className="text-[20px] font-[700] text-[#7076FF]">
                    117 600 сум
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-[700]">
                {t("insurance.insuranceDate")}:
              </p>
              <div className="h-[60px] gap-x-[20px]  px-[25px] rounded-[15px] bg-white flex items-center justify-between">
                <div onClick={handleClickDate1}>
                  <DatePicker
                    placeholder="Выберите"
                    className="custom-date-picker !text-[25px]"
                    open={open1}
                    onOpenChange={(status) => setOpen1(status)}
                  />
                  {/* <p className="text-[28px] font-[700]">11.06.2024</p> */}
                </div>
                <img src={ASSETS.Next} alt="" />
                <div onClick={handleClickDate2}>
                  <DatePicker
                    className="custom-date-picker"
                    placeholder="Выберите"
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
          <FooterNav
            prevClick={() => navigate(-1)}
            nextClick={() => navigate(APP_ROUTES.ADDRELATIVES)}
          />
        </div>
      </div>
    </>
  );
};

export default Insurance;
