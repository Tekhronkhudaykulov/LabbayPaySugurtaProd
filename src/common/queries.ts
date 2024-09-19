import { useQuery } from "@tanstack/react-query";
import { requests } from "../helpers/requests";
import { LoginClientParamsType } from "../types";

export const loginQuery = (payload: LoginClientParamsType) =>
  useQuery({
    queryKey: [payload],
    queryFn: async () => {
      const { data } = await requests.postLoginClient(payload);
      return data.data.items;
    },
  });

export const servicesQuery = () =>
  useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data } = await requests.postCompany();
      return data.data.result;
    },
  });

export const servicesDetailQuery = (company_id: any) =>
  useQuery({
    queryKey: ["services", company_id],
    queryFn: async () => {
      const { data } = await requests.postCompanyDetail(company_id);

      return data.data.result;
    },
  });

// export const stepOneQuery = () => {
//   return useMutation((payload: StepOne) => {
//     return requests.postStepOne(payload); // Yozilgan API chaqiruvi
//   });
// };
// export const categoriesQuery = () =>
//   useQuery({
//     queryKey: ["categories"],
//     queryFn: async () => {
//       const { data } = await requests.categories();
//       return data.data.items;
//     },
//   });

// export const servicesQuery = () =>
//   useQuery({
//     queryKey: ["services"],
//     queryFn: async () => {
//       const { data } = await requests.services();
//       return data.data.items;
//     },
//   });

// export const servicesDetailQuery = (id: number) =>
//   useQuery({
//     queryKey: ["services" + id],
//     queryFn: async () => {
//       const { data } = await requests.serviceDetail(id);
//       return data;
//     },
//   });

// export const productsQuery = () =>
//   useQuery({
//     queryKey: ["products"],
//     queryFn: async () => {
//       const { data } = await requests.products();
//       return data;
//     },
//   });

// export const newsQuery = () =>
//   useQuery({
//     queryKey: ["news"],
//     queryFn: async () => {
//       const { data } = await requests.news();
//       return data.data.items;
//     },
//   });

// export const newsDetailQuery = (id: number) =>
//   useQuery({
//     queryKey: ["news" + id],
//     queryFn: async () => {
//       const { data } = await requests.newsDetail(id);
//       return data.data;
//     },
//   });

// export const tagsQuery = () =>
//   useQuery({
//     queryKey: ["tags"],
//     queryFn: async () => {
//       const { data } = await requests.tags();
//       return data.data.items;
//     },
//   });

// export const productVariantsQuery = () =>
//   useQuery({
//     queryKey: ["productVariants"],
//     queryFn: async () => {
//       const { data } = await requests.productVariants();
//       return data.data.items;
//     },
//   });

// export const productVariantsDetailQuery = (payload: number) =>
//   useQuery({
//     queryKey: ["productVariantsDetail" + payload],
//     queryFn: async () => {
//       const { data } = await requests.productVariantsDetail(payload);
//       return data;
//     },
//   });

// export const productVariantsFilterQuery = (payload: any) =>
//   useQuery({
//     queryKey: ["productVariantsFilter" + payload],
//     queryFn: async () => {
//       const { data } = await requests.productVariantsFilter(payload);
//       return data;
//     },
//   });

// export const productVariantsCategoryFilterQuery = (payload: any) =>
//   useQuery({
//     queryKey: ["productVariantsCategoryFilter" + payload],
//     queryFn: async () => {
//       const { data } = await requests.productVariantsCategoryFilter(payload);
//       return data;
//     },
//   });

// export const brandsQuery = () =>
//   useQuery({
//     queryKey: ["brands"],
//     queryFn: async () => {
//       const { data } = await requests.brands();
//       return data;
//     },
//   });
