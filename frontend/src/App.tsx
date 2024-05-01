import { Toaster } from "react-hot-toast";
import { HashRouter } from "react-router-dom";
import { RouterComponent } from "@/components";
import { initSentry } from "@/utils";

import "./App.scss";
import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

initSentry();

function App() {
  return (
    <HashRouter>
      <Toaster position="bottom-center" />
      <RouterComponent />
    </HashRouter>
  )
}

export default App
