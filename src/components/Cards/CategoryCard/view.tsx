interface CategoryCardType {
  img: string;
  title: string;
  onClick: () => void;
}

const CategoryCard = ({ img, title, onClick }: CategoryCardType) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center flex-col bg-white py-[15px] rounded-[36px]"
    >
      <p className="text-[26px] mb-[15px] font-[600] text-center">{title}</p>
      <img src={img} alt="" />
    </div>
  );
};

export default CategoryCard;
