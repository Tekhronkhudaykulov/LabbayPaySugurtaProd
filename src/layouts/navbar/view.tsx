import { Logo } from "../../components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ASSETS } from "../../assets/images/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router";
import { unShowItemInPages } from "../../utils";
// import { Button } from "antd";
// import { changeLanguage } from "../../helpers/api";
// import { useTranslation } from "react-i18next";

const homeButtonRoutes = [
  APP_ROUTES.HOME,
  APP_ROUTES.SERVICES,
  APP_ROUTES.SUPPORT_SERVICE,
  APP_ROUTES.SUCCESS,
  APP_ROUTES.CHECK,
  APP_ROUTES.AUTH,
];
const supportServiceButtonRoutes = [
  APP_ROUTES.SERVICES,
  APP_ROUTES.SUPPORT_SERVICE,
  APP_ROUTES.SUCCESS,
  APP_ROUTES.CHECK,
  APP_ROUTES.AUTH,
];
// const checkButtonRoutes = [
//   APP_ROUTES.SERVICES,
//   APP_ROUTES.SUPPORT_SERVICE,
//   APP_ROUTES.SUCCESS,
//   APP_ROUTES.CHECK,
//   APP_ROUTES.AUTH,
// ];

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const { t, i18n } = useTranslation();

  return (
    <nav className="bg-white py-[5px] z-[99]">
      <div className="wrapper">
        <div className="flex items-center gap-4">
          <div onClick={() => navigate(APP_ROUTES.HOME)}>
          <Logo />
          </div>
       
          {unShowItemInPages(supportServiceButtonRoutes, pathname) ? (
            <button
              onClick={() => navigate(APP_ROUTES.SUPPORT_SERVICE)}
              className="bg-purple ml-auto h-[55px] text-[20px] gap-6 rounded-button text-white w-[335px] flex items-center justify-center"
            >
              Служба поддержки
              <LazyLoadImage src={ASSETS.HelpCenter} effect="opacity" alt="" />
            </button>
          ) : null}
          {unShowItemInPages(homeButtonRoutes, pathname) ? (
            <button
              onClick={() => navigate(APP_ROUTES.HOME)}
              className="bg-orange h-[55px] text-[20px] gap-6 rounded-button text-white w-[355px] flex items-center justify-center"
            >
              Вернуться на главную
              <LazyLoadImage src={ASSETS.HomeImage} effect="opacity" alt="" />
            </button>
          ) : null}
          {/* <Button
            type={i18n.language === "uz" ? "default" : "primary"}
            className="rounded-main shadow-button py-[5px] h-[38px] w-[135px]"
            onClick={() => changeLanguage("ru")}
          >
            {t("russian")}
          </Button>
          <Button
            type={i18n.language === "ru" ? "default" : "primary"}
            className="rounded-main shadow-button py-[5px] h-[38px] w-[135px] text-purple font-700"
            onClick={() => changeLanguage("uz")}
          >
            {t("uzbek")}
          </Button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
