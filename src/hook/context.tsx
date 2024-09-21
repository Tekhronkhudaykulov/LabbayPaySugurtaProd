import React, { useContext, useState } from "react";
import { createContext } from "react";

// Context yaratish
const ClassNameContext = createContext<any>("");

export const ClassNameProvider = ({ children }: any) => {
  const [isHas, setIsHas] = useState("");

  return (
    <ClassNameContext.Provider value={{ isHas, setIsHas }}>
      {children}
    </ClassNameContext.Provider>
  );
};

// Contextdan foydalanish uchun hook yaratish
export const useClassName = () => useContext(ClassNameContext);
