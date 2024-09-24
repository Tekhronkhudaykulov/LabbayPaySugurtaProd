import "./App.css";
import Router from "./router/Router";
import { ConfigProvider } from "antd";
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
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <Router />
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
