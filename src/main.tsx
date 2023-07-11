import ReactDOM from "react-dom/client";
import RouterManager from "./application/RouterManager";
import { Provider } from "react-redux";
import store from "./application/redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterManager />
  </Provider>
);
