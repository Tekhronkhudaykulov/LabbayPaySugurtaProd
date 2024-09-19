import { useMutation } from "@tanstack/react-query";
import { requests } from "../helpers/requests"; // Adjust the path to your request functions
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../router";
import { setToken } from "../helpers/api";
import { usePostStore } from "../store";
import { StepOne } from "../types/steps";

const useLoginMutation = () => {
  const navigate = useNavigate();

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
    onError: (error) => {
      console.error("Error during login:", error);
    },
  });
};

const usePostCompany = () => {
  const navigate = useNavigate();

  const { setServices } = usePostStore();

  return useMutation({
    mutationFn: async () => {
      const { data } = await requests.postCompany();
      setServices(data.data.result);
      return data;
    },
    onSuccess: () => {
      navigate(APP_ROUTES.SERVICES);
    },
    onError: (error) => {
      console.error("Error during login:", error);
    },
  });
};

const usePostServicesDetail = () => {
  const navigate = useNavigate();

  const { setServiceDetail } = usePostStore();

  return useMutation({
    mutationFn: async (company_id) => {
      const { data } = await requests.postCompanyDetail(company_id);
      setServiceDetail(data.data.result);
      return data;
    },
    onSuccess: (data, variables) => {
      navigate(`${APP_ROUTES.REGISTER_CAR}/${variables.company_id}`);
    },
    onError: (error) => {
      console.error("Error during login:", error);
    },
  });
};

const stepOne = () => {
  return useMutation({
    mutationFn: async (payload: StepOne) => {
      const { data } = await requests.postStepOne(payload);
      return data;
    },
    onSuccess: () => {},
    onError: (error) => {
      console.error("Error during login:", error);
    },
  });
};

export { useLoginMutation, usePostCompany, usePostServicesDetail, stepOne };
