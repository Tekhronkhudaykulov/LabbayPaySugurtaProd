import create from "zustand";
import { persist } from "zustand/middleware";

export const usePostStore = create(
  persist(
    (set) => ({
      services: null,
      serviceDetail: null,
      setServiceDetail: (item: any) => set({ serviceDetail: item }),
      setServices: (item: any) => set({ services: item }),
    }),
    {
      name: "services", // localStorage key
    }
  )
);
