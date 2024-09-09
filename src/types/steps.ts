export type StepOne = {
  company_id: number | string | undefined;
  service_id: number;
  texpsery: string;
  texpnumber: string;
  renumber: string;
};

export type DataClient = {
  dvigatel: string;
  kuzov: string;
  marka: string;
  model: string;
  renumber: string;
  texpdate: string;
  texpnumber: string;
  texpsery: string;
  vehicle?: string;
  vmodel: string;
  year?: string;
  type?: string;
};
