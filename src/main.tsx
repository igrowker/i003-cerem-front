import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./i18n/i18n";
import { Provider } from "react-redux";
import { store } from "./store/store";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
