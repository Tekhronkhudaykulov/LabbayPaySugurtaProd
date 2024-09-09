import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
import { DataClient, StepOne } from "../../types/steps";

interface StateAction {
  stepOneRequest: () => Promise<any>;
  stepOneLoading: boolean;
  dataClient: DataClient;
}

const initialState: StateAction = {
  stepOneRequest: async () => {},
  stepOneLoading: false,
  dataClient: {
    dvigatel: "",
    kuzov: "",
    marka: "",
    model: "",
    renumber: "",
    texpdate: "",
    texpnumber: "",
    texpsery: "",
    vmodel: "",
    type: "",
    vehicle: "",
    year: "",
  },
};

const stepsStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    stepOneRequest: async (payload: StepOne) => {
      set({ stepOneLoading: true });
      try {
        const { data } = await requests.postStepOne(payload);
        set({ dataClient: data.data?.result?.data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ stepOneLoading: false });
      }
    },
  }))
);

export default stepsStore;
