import { LazyLoadImage } from "react-lazy-load-image-component";
import { ASSETS } from "../../assets/images/assets";
import { FC } from "react";
import { modalsStore } from "../../store";
import { useLocation } from "react-router-dom";
import { APP_ROUTES } from "../../router";

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => {
  const { openModal } = modalsStore();
  const { pathname } = useLocation();

  return (
    <>
      {pathname === APP_ROUTES.AUTH ? (
        ""
      ) : (
        <LazyLoadImage
          onDoubleClick={() => openModal("logout")}
          className={`min-w-[205px] w-[205px] ${className}`}
          src={ASSETS.logoImage}
          effect="opacity"
          alt=""
        />
      )}
    </>
  );
};

export default Logo;
