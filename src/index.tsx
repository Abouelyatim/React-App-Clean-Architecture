import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./framework/presentation/store/store";

const container: HTMLElement | null = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
