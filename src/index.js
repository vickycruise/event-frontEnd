import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./assets/styles/index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import { UserContextProvider } from "./providers/UserContext";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </React.StrictMode>
  </Provider>
);
