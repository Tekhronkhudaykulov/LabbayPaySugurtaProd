import create from "zustand";
import { persist } from "zustand/middleware";

interface PostErrorState {
  errorTitle: string | null;
  setErrorTitle: (item: string | null) => void;
}

export const usePostStore = create(
  persist(
    (set) => ({
      services: null,
      serviceDetail: null,
      setServiceDetail: (item: any) => set({ serviceDetail: item }),
      setServices: (item: any) => set({ services: item }),
    }),
    {
      name: "services",
    }
  )
);

export const stepOneStore = create(
  persist(
    (set) => ({
      stepOneData: null,
      setStepOneData: (item: any) => set({ stepOneData: item }),
    }),
    { name: "data" }
  )
);

export const usePostError = create<PostErrorState>((set) => ({
  errorTitle: null,
  setErrorTitle: (item: any) => set({ errorTitle: item }),
}));
