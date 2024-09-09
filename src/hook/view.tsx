import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenName } from "../helpers/api";
import { APP_ROUTES } from "../router";
import { Port } from "../config";

export const useAuthRedirect = (redirectPath: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(tokenName);
    const isTokenAvailable = token != null && token != "";
    if (isTokenAvailable) {
      navigate(redirectPath);
    } else {
      navigate(APP_ROUTES.AUTH);
    }
  }, [navigate, redirectPath]);
};

export const ScrollToRefresh = () => {
  const [startY, setStartY] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const handleTouchStart = (e: any) => {
      setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: any) => {
      const currentY = e.touches[0].clientY;
      if (window.scrollY === 0 && currentY > startY + 50 && !isRefreshing) {
        setIsRefreshing(true);
        window.location.reload();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    // Cleanup function
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [startY, isRefreshing]);
};

export const OpenDevice = () => {
  const socket = useRef<WebSocket>(new WebSocket(Port));

  useEffect(() => {
    socket.current.onmessage = (data: any) => {
      socket.current.close();
    };
  }, []);
};
