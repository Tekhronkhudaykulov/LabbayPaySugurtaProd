import { ASSETS } from "../../../assets/images/assets";

const AddRelativesCard = () => {
  return (
    <div className="bg-white py-[10px] px-[25px] rounded-[35px]">
      <div className="flex items-center justify-between ">
        <p className="text-[20px] font-[700]">Родственник-1</p>
        <div className="w-[40px] h-[40px] flex items-center justify-center bg-deleteBox rounded-[10px]">
          <img src={ASSETS.Delete} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[8px] mt-[15px]">
        <div className="bg-section py-[10px] px-[20px] rounded-[14px]">
          <p className="text-[18px] font-[500] leading-[26px]">
            Степень родства к владельцу авто:
          </p>
          <p className="text-[20px] font-[700] mt-[5px]">Отец</p>
        </div>
        <div className="bg-section py-[10px] px-[20px] rounded-[14px]">
          <p className="text-[18px] font-[500] leading-[26px]">
            Степень родства к владельцу авто:
          </p>
          <p className="text-[20px] font-[700] mt-[5px]">Отец</p>
        </div>
        <div className="bg-section py-[10px] px-[20px] rounded-[14px]">
          <p className="text-[18px] font-[500] leading-[26px]">
            Степень родства к владельцу авто:
          </p>
          <p className="text-[20px] font-[700] mt-[5px]">Отец</p>
        </div>
        <div className="bg-section py-[10px] px-[20px] rounded-[14px]">
          <p className="text-[18px] font-[500] leading-[26px]">
            Степень родства к владельцу авто:
          </p>
          <p className="text-[20px] font-[700] mt-[5px]">Отец</p>
        </div>
      </div>
    </div>
  );
};

export default AddRelativesCard;
