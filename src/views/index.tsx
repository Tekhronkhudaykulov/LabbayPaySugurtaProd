import { lazy } from "react";

const Home = lazy(() => import("./home/view"));
const SupportService = lazy(() => import("./supportService/view"));
const Services = lazy(() => import("./service/view"));
const ReplenishmentPhone = lazy(() => import("./replenishmentPhone/view"));
const PayPhone = lazy(() => import("./payPhone/view"));
const TypePayment = lazy(() => import("./payPhone/components/TypePayment"));
const PhoneCash = lazy(() => import("./payPhone/components/PhoneCash"));
const PhoneTerminal = lazy(() => import("./payPhone/components/PhoneTerminal"));
const SuccessPage = lazy(() => import("./successPage/view"));
const CheckPage = lazy(() => import("./checkPage/view"));
const ChooseService = lazy(() => import("./chooseService/view"));
const PaymentOfFines = lazy(() => import("./paymentOfFines/view"));
const OverPlayQue = lazy(() => import("./overplay/OverPlayQue"));
const OverPlaySendSms = lazy(() => import("./overplay/OverPlaySendSms"));
const OverPlaySendCheck = lazy(() => import("./overplay/OverPlaySendCheck"));
const RegisterCar = lazy(() => import("./carRegistration/view"));
const PaymentOfRegisterCarCash = lazy(
  () => import("./carRegistration/components/PaymentOfRegisterCash")
);
const PaymentOfRegisterCarType = lazy(
  () => import("./carRegistration/components/PaymentOfRegisterType")
);
const DataCheckingCar = lazy(
  () => import("./carRegistration/components/DataChecking")
);
const PaymentOfRegister = lazy(
  () => import("./carRegistration/components/PaymentOfRegister")
);

const ReplenishmentFine = lazy(
  () => import("./replenishmentPhone/ReplenishmentFIne")
);

const PaymentOfFineType = lazy(
  () => import("./paymentOfFines/components/PaymentOfFinesType")
);

const PaymentOfFineCash = lazy(
  () => import("./paymentOfFines/components/PaymentOfFinesCash")
);

const PaymentOfRegisterTerminal = lazy(
  () => import("./carRegistration/components/PaymentOfRegisterTerminal")
);

const TopUpBalance = lazy(() => import("./balance/TopUpBalance/view"));
const TopUpBalanceInfo = lazy(
  () => import("./balance/TopUpBalance/InfoTopUpBalance")
);

const WithdrawMoney = lazy(() => import("./balance/WithdrawMoney/view"));
const WithDrawMoneyAddInfo = lazy(
  () => import("./balance/WithdrawMoney/WithDrawMoneyAddInfo")
);

const WithDrawMoneySms = lazy(
  () => import("./balance/WithdrawMoney/WithDrawMoneySms")
);

const AddRelatives = lazy(() => import("./insurance/pages/AddRelatives"));
const Insurance = lazy(() => import("./insurance/view"));
const AddPhoneNumber = lazy(() => import("./insurance/pages/AddPhoneNumber"));
const AddRelativesPerson = lazy(
  () => import("./insurance/pages/AddRelativesPerson")
);

const AddPhoneNumberConfirm = lazy(
  () => import("./insurance/pages/AddPhoneNumberConfirm")
);

const PaymentType = lazy(() => import("./insurance/pages/PaymentType"));
const SelectCurrency = lazy(() => import("./insurance/pages/SelectCurrency"));
const Cash = lazy(() => import("./insurance/pages/Cash"));
const Terminal = lazy(() => import("./insurance/pages/Terminal"));
const Sms = lazy(() => import("./insurance/pages/Sms"));
const Auth = lazy(() => import("./auth/view"));
const AddDocument = lazy(
  () => import("./carRegistration/components/AddDocument")
);
export {
  Home,
  SupportService,
  Services,
  ReplenishmentPhone,
  PayPhone,
  TypePayment,
  PhoneCash,
  PhoneTerminal,
  SuccessPage,
  CheckPage,
  ChooseService,
  PaymentOfFines,
  ReplenishmentFine,
  PaymentOfFineType,
  PaymentOfFineCash,
  OverPlayQue,
  OverPlaySendSms,
  OverPlaySendCheck,
  RegisterCar,
  DataCheckingCar,
  PaymentOfRegister,
  PaymentOfRegisterCarType,
  PaymentOfRegisterCarCash,
  PaymentOfRegisterTerminal,
  TopUpBalance,
  TopUpBalanceInfo,
  WithdrawMoney,
  WithDrawMoneyAddInfo,
  WithDrawMoneySms,
  Insurance,
  AddRelatives,
  AddPhoneNumber,
  AddRelativesPerson,
  AddPhoneNumberConfirm,
  PaymentType,
  SelectCurrency,
  Cash,
  Sms,
  Terminal,
  Auth,
  AddDocument,
};
