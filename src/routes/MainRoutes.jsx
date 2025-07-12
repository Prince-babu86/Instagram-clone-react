import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignUpPage from "../pages/Auth/SignUpPage";
import LoginPage from "../pages/Auth/LoginPage";
import ProfileRoutes from "./ProfileRoutes";
import Settings from "../pages/settings/Settings";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
         <Route path="/profile/*" element={<Profile />}  key="profile"/>
           <Route path="/accounts/*" element={<Settings/>} />
         
      </Routes>
    </>
  );
};

export default MainRoutes;
