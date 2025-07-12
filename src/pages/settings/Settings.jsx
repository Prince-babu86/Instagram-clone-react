import React from "react";
import SettingsMenu from "../../components/SettingsMenu";
import SettingsRoutes from "../../routes/SettingsRoutes";

const Settings = () => {
  return (
    <div className="flex">
      <SettingsMenu />
      <SettingsRoutes />
    </div>
  );
};

export default Settings;

/* 

/accounts/*
pahle accounts route aaya and us ke andar baki or routes aaye jo nested hai
jese /accounts/edit-profile

*/
