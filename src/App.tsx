import "./App.css";
import Router from "./router/Router";
import { ConfigProvider } from "antd";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import "./assets/fonts/fonts.css";
import "react-simple-keyboard/build/css/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    },
  },
});

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider>
          <Router />
        </ConfigProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};

export default App;
