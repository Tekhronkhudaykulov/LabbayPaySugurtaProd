import "./style.scss";

interface LanguageBtnType {
  title: string;
  img: string;
  isHas: boolean;
}

const LanguageBtn = ({ title, img, isHas }: LanguageBtnType) => {
  console.log(isHas, "ISHASFFNSJABFAS");
  return (
    <div>
      <div
        className={`bg-[#F7F7F7] h-[50px] flex items-center  ${
          isHas ? "active-lang" : "border-b-0"
        }  justify-center gap-x-[20px] w-[130px]   rounded-[15px]`}
      >
        <p className="text-[20px] font-[700]">{title}</p>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default LanguageBtn;
