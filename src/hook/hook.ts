import { useMutation, useQuery } from "@tanstack/react-query";
import { requests } from "../helpers/requests"; // Adjust the path to your request functions
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../router";
import { setToken } from "../helpers/api";
import { usePostStore } from "../store";
import { StepOne } from "../types/steps";
import { stepOneStore, usePostError } from "../store/usePostStore/usePostStore";

const useLoginMutation = () => {
  const navigate = useNavigate();
  const { setErrorTitle } = usePostError();

  return useMutation({
    mutationFn: async (inputs: { email: string; password: string }) => {
      const { data } = await requests.postLoginClient({
        email: inputs.email,
        password: inputs.password,
      });

      let token = data.data?.authorization?.token;
      setToken(token);
      return data;
    },
    onSuccess: () => {
      navigate(APP_ROUTES.HOME);
    },
    onError: (error: any) => {
      if (error?.response) {
        setErrorTitle(error.response.data.message);
      }
    },
  });
};

type PostCompanyParams = {
  company_id: number; // or whatever type it should be
};

const usePostCompany = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const { setServices } = usePostStore();
  const { setErrorTitle } = usePostError();

  return useMutation<PostCompanyParams>({
    mutationFn: async () => {
      const { data } = await requests.postCompany();
      setServices(data.data.result);
      return data;
    },
    onSuccess: () => {
      navigate(APP_ROUTES.SERVICES);
    },

    onError: (error: any) => {
      if (error?.response) {
        setErrorTitle(error.response.data.message);
      }
    },
  });
};

const usePostServicesDetail = () => {
  const navigate = useNavigate();
  // @ts-ignore

  const { setServiceDetail } = usePostStore();

  return useMutation({
    mutationFn: async (company_id: any) => {
      const { data } = await requests.postCompanyDetail(company_id);
      setServiceDetail(data.data.result);
      return data;
    },
    onSuccess: (data: any, variables: any) => {
      console.log(data);

      navigate(`${APP_ROUTES.REGISTER_CAR}/${variables.company_id}`);
    },
    onError: (error: any) => {
      console.error("Error during login:", error);
    },
  });
};

const stepOne = () => {
  const { setErrorTitle } = usePostError();
  // @ts-ignore

  const { setStepOneData } = stepOneStore();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload: StepOne) => {
      const { data } = await requests.postStepOne(payload);
      setStepOneData(data.data.result.data);
      return data;
    },
    onSuccess: () => {
      navigate(APP_ROUTES.DATA_CHECKING_CAR);
    },
    onError: (error: any) => {
      if (error?.response) {
        setErrorTitle(error.response.data.message);
      }
    },
  });
};

const stepTwo = () => {
  const { setErrorTitle } = usePostError();
  // @ts-ignore

  const { setStepOneData } = stepOneStore();

  return useMutation({
    mutationFn: async (payload: StepOne) => {
      const { data } = await requests.postStepTwo(payload);
      setStepOneData(data.data.result.data);
      return data;
    },
    onSuccess: () => {
      // navigate(APP_ROUTES.DATA_CHECKING_CAR);
    },
    onError: (error: any) => {
      if (error?.response) {
        setErrorTitle(error.response.data.message);
      }
    },
  });
};

export {
  useLoginMutation,
  usePostCompany,
  usePostServicesDetail,
  stepOne,
  stepTwo,
};
