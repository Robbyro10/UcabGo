import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

export const UcabGoApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
