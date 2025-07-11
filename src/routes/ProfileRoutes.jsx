import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePosts from "../components/Profile/ProfilePosts";
import ProfileReels from "../components/Profile/ProfileReels";
import Profile from "../pages/Profile";
import ProfileSaved from "../components/Profile/ProfileSaved";
import ProfileTgged from "../components/Profile/ProfileTagged";

const ProfileRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route index  path="" element={<ProfilePosts/>} />
      <Route path="/reels" element={<ProfileReels/>} />
      <Route path="/saved" element={<ProfileSaved/>} />
      <Route path="/tagged" element={<ProfileTgged/>} />
    </Routes>
  );
};

export default ProfileRoutes;
