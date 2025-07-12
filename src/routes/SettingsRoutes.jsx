import React from "react";
import { Route, Routes } from "react-router-dom";
import EditSetting from "../pages/settings/EditSetting";
import Notifications from "../pages/settings/Notifications";
import AccountPrivacy from "../pages/settings/AccountPrivacy";
import Blocked from "../pages/settings/Blocked";
import CloseFriends from "../pages/settings/CloseFriends";
import HideStory from "../pages/settings/HideStory";

const SettingsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<EditSetting />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/account-privacy" element={<AccountPrivacy/>} />
      <Route path="/account-privacy" element={<AccountPrivacy />} />
      <Route path="/blocked-list" element={<Blocked />} />
      <Route path="/hide-story" element={<HideStory />} />
      <Route path="/close-friends" element={<CloseFriends />} />
    </Routes>
  );
};

export default SettingsRoutes;
