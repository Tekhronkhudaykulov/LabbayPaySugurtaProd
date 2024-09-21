import { ASSETS } from "../../assets/images/assets";
import { SelectCard, Text } from "../../components";
import { APP_ROUTES } from "../../router";
import { useAuthRedirect } from "../../hook/view";
import { usePostCompany } from "../../hook/hook";
import LoadingPage from "../../components/Loading/view";
import Notification from "../../components/Notification/view";
import { usePostError } from "../../store/usePostStore/usePostStore";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../../i18n";
import { useEffect } from "react";

const Home = () => {
  useAuthRedirect(APP_ROUTES.HOME);

  const { t, i18n } = useTranslation();

  const { mutate, isPending, isError } = usePostCompany();

  const { errorTitle } = usePostError();

  const list = [
    {
      title: "O’ZBEKCHA",
      img: ASSETS.Uz,
      lng: "uz",
    },
    {
      title: "РУССКИЙ",
      img: ASSETS.Ru,
      lng: "ru",
    },
    {
      title: "ENGLISH",
      img: ASSETS.Gb,
      disabled: true,
      lng: "en",
    },
  ];

  useEffect(() => {
    i18n.language;
  }, [i18n.language]);

  const handleSubmit = (company_id: number) => {
    // @ts-ignore
    mutate({ company_id: company_id });
  };

  return (
    <>
      {isError && <Notification message={errorTitle} onClose="" />}
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
              onClick={() => {
                handleSubmit(item.company_id);
                changeLanguage(item.lng);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
