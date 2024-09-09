import { Modal } from "antd";
import { FC } from "react";
import { ASSETS } from "../../assets/images/assets";

interface Props {
  open?: boolean;
}

const Loading: FC<Props> = ({ open }) => {
  return (
    <Modal
      footer={null}
      open={open}
      classNames={{
        content: "!rounded-[44px] !w-[90vw] h-[90vh]",
        body: "h-full flex flex-col items-center justify-center",
      }}
      className="!w-[90vw] h-[90vh] !m-auto"
      centered
    >
      <div className="text-[38px] font-700 text-center text-purple mb-auto">
        Загрузка
      </div>
      <img src={ASSETS.loadingImage} className="animate-spin mb-auto" alt="" />
    </Modal>
  );
};

export default Loading;
