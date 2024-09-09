import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";

interface StateAction {
  companyRequest: () => Promise<any>;
  companyDetailRequest: () => Promise<any>;
  companyDetailItem: any;
  companyLoading: boolean;
  companyList: [];
}

const initialState: StateAction = {
  companyRequest: async () => {},
  companyDetailRequest: async () => {},

  companyLoading: false,
  companyList: [],
  companyDetailItem: {},
};

const companyStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    companyRequest: async () => {
      set({ companyLoading: true });
      try {
        const { data } = await requests.postCompany();
        set({ companyList: data.data.result });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ companyLoading: false });
      }
    },

    companyDetailRequest: async (payload: any) => {
      set({ companyLoading: true });
      try {
        const { data } = await requests.postCompanyDetail(payload);
        set({ companyDetailItem: data.data.result });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ companyLoading: false });
      }
    },
  }))
);

export default companyStore;
