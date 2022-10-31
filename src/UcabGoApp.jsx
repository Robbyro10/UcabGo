import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { store } from "./store";
import "./styles.css";
import { Footer } from "./UcabGo/components/ui";

export const UcabGoApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
