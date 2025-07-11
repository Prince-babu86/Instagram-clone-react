import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Menubar from "./components/Menubar";

const App = () => {
  return (
    <div className="flex w-full">
      <div className="">
        <Menubar />
      </div>
      <div className="ml-[16rem] w-[80rem]">
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
