import create from 'zustand';

interface Value {
  id: number;
  amount: number;
}

interface State {
  values: Value[];
  addValue: (value: Value) => void;
  getTotal: () => number;
}

const socketValueStore = create<State>((set, get) => ({
  values: [],
  addValue: (value) => set((state) => ({
    values: [...state.values, value],
  })),
  getTotal: () => {
    const state = get(); // get() metodini chaqirish
    return state.values.reduce((acc, curr) => acc + curr.amount, 0);
  },
}));

export default socketValueStore;
