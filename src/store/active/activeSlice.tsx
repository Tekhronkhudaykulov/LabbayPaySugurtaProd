import create from "zustand";

const activeStore = create((set) => ({
  activeIndex: null,
  setActiveIndex: (index: boolean) => set({ activeIndex: index }), // Aktiv indeksni o'zgartiradi
}));

export default activeStore;
