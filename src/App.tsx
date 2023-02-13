import { useState } from "react";
import Context from "./context/Context";
import MainRoutes from "./routes/mainRouters.routes";
import Global from "./style/Global";

function App() {
  return (
    <>
      <Context>
        <MainRoutes />
        <Global />
      </Context>
    </>
  );
}

export default App;
