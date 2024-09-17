import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../assets/images/assets";
import { SelectCard, Text } from "../../components";
import { APP_ROUTES } from "../../router";
import { changeLanguage } from "../../helpers/api";
import { useAuthRedirect } from "../../hook/view";

const Home = () => {
  const navigate = useNavigate();

  useAuthRedirect(APP_ROUTES.HOME);

  const list = [
    {
      title: "O’ZBEKCHA",
      img: ASSETS.Uz,
    },
    {
      title: "РУССКИЙ",
      img: ASSETS.Ru,
    },
    {
      title: "ENGLISH",
      img: ASSETS.Gb,
      disabled: true,
    },
  ];

  return (
    <div className="flex mt-[50px] flex-col items-center justify-center h-full w-[72%] mx-auto gap-[50px]">
      <Text text="Выберите язык:" className="text-[36px]" />
      <div className="grid grid-cols-3 gap-[34px] w-full">
        {list?.map((item, idx) => (
          <SelectCard
            className="h-[280px]"
            title={item?.title}
            img={item?.img}
            disabled={item?.disabled ? true : false}
            key={idx}
            onClick={() => {
              navigate(APP_ROUTES.SERVICES);
              changeLanguage(item.title);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
