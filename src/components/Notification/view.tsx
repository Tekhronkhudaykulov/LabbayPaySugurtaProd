// import { ASSETS } from "../../assets/images/assets";
// import "./style.scss";

// const Notification = () => {
//   return (
//     <div className="min-[200px] bg-notification ">
//       <div className="w-[90%] mx-auto flex items-center">
//         <img src={ASSETS.Notification} alt="" />
//         <p className="text-[38px] font-[500]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Notification;

import { useState, useEffect } from "react";

import "./style.scss"; // CSS faylini import qiling
import { ASSETS } from "../../assets/images/assets";

const Notification = ({ message, onClose }: any) => {
  const [visible, setVisible] = useState(false);
  const [initialDelay, setInitialDelay] = useState(false);

  useEffect(() => {
    if (message) {
      setInitialDelay(true); // 1 sekund kutish
      const showTimer = setTimeout(() => {
        setVisible(true); // Xabarni pastga tushirish
      }, 500); // 1 sekund kutish

      const hideTimer = setTimeout(() => {
        setVisible(false); // 5 sekunddan so'ng yashirish
      }, 5000); // 5 sekund davomida ko'rsatish

      // O'chirishni to'g'ri boshqarish
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [message]);
  useEffect(() => {
    if (!visible && initialDelay) {
      const hideTimer = setTimeout(() => {
        onClose(); // Animatsiya tugagandan so'ng xabarni tozalash
      }, 500); // Animatsiya davomiyligi
      return () => clearTimeout(hideTimer);
    }
  }, [visible, initialDelay, onClose]);
  return (
    <div className={`notification ${visible ? "slide-down" : "slide-up"}`}>
      <div className="w-[90%] bg-white  slide-down-item  px-[20px] gap-x-[15px] py-[10px] rounded-[40px] mx-auto flex items-center">
        <img src={ASSETS.Notification} alt="" />
        <p className="text-[24px] text-center">{message}</p>
      </div>
    </div>
  );
};

export default Notification;
