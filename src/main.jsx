import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//Provider
import { Provider } from "react-redux";
//store
import { store } from "./store.js";
//toaster
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Toaster position="bottom-center" />
  </Provider>
);
