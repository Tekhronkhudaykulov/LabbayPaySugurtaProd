import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenName } from "../helpers/api";
import { APP_ROUTES } from "../router";
import { Port } from "../config";
import socketValueStore from "../store/socketResult/socketResultSlice";

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
  const { addValue } = socketValueStore();
  useEffect(() => {
    const socket = new WebSocket(Port);

    socket.onopen = () => {
      // `OPEN` komandani yuborish
      const openCommand = JSON.stringify({
        device: "BILL_ACCEPTOR",
        method: "OPEN",
      });
      socket.send(openCommand);
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      console.log(message, "message");

      // Agar qiymat bo'lsa, Zustand do'koniga qo'shish
      if (message.data) {
        // ID va amount qismlarini to'g'rilang
        const valueObject = { id: Date.now(), amount: message.data };
        addValue(valueObject);
      }

      // `STACK` komandani yuborish
      const stackCommand = JSON.stringify({
        device: "BILL_ACCEPTOR",
        method: "STACK",
      });
      socket.send(stackCommand);
    };

    // Component unmount bo'lganda WebSocketni tozalash
    return () => {
      socket.close();
    };
  }, []);
};

export const CashDevice = () => {
  const { addValue } = socketValueStore();

  useEffect(() => {
    const socket = new WebSocket(Port);

    socket.onopen = () => {
      const openCommand = JSON.stringify({
        device: "BILL_ACCEPTOR",
        method: "OPEN",
      });
      socket.send(openCommand);
    };

    socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        console.log("Received message:", message);

        if (message.data === "REJECTED") {
          alert("Transaction rejected. The amount will not be added.");
          // Qo'shimcha ishlarni bajarish mumkin (masalan, to'lovni qayta ishlash)
        } else if (message.method === "READ" && message.data) {
          const valueObject = { id: Date.now(), amount: message.data };
          addValue(valueObject);
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }

      const stackCommand = JSON.stringify({
        device: "BILL_ACCEPTOR",
        method: "STACK",
      });
      socket.send(stackCommand);
    };

    return () => {
      socket.close();
    };
  }, [addValue]);
};
