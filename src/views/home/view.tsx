import { ASSETS } from "../../assets/images/assets";
import { SelectCard, Text } from "../../components";
import { APP_ROUTES } from "../../router";
import { useAuthRedirect } from "../../hook/view";
import { usePostCompany } from "../../hook/hook";
import LoadingPage from "../../components/Loading/view";

const Home = () => {
  useAuthRedirect(APP_ROUTES.HOME);

  const { mutate, isPending } = usePostCompany();

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

  const handleSubmit = (company_id: number) => {
    mutate({ company_id: company_id });
  };

  return (
    <>
      {isPending && <LoadingPage />}
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
              onClick={() => handleSubmit(item.company_id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
