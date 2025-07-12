import React from "react";
import StoryHighlights from "../components/StoryHighlights";
import UserProfilePosts from "../components/UserProfilePosts";
import ProfileRoutes from "../routes/ProfileRoutes";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-full p-8 px-48  ">
      <div className="profile_top w-full flex items-start justify-start ">
        <div className="profile_logo_image h-36 w-36 rounded-full  border-3 p-1 border-[#DBDBDB] mt-16">
          <img
            className="h-full w-full rounded-full object-cover object-top"
            src="https://i.pinimg.com/1200x/b7/6a/4f/b76a4ff202483ad793f267a2e4baff12.jpg"
            alt=""
          />
        </div>
        <div className="profile_top_profile_data px-4  py-3 ml-16">
          <div className="_profile-top_profile_data-top flex items-center gap-4">
            <h1 className="text-xl">itz_kallukaliya</h1>
            <NavLink to={`/accounts/`} className="bg-[#DBDBDB]  text-[13px] py-1.5 px-3 rounded-md font-semibold cursor-pointer">
              Edit profile
            </NavLink>
            <button className="bg-[#DBDBDB] text-[13px] py-1.5 px-3 rounded-md font-semibold cursor-pointer">
              View archieve
            </button>
            <div className="cursor-pointer">
              <svg
                aria-label="Options"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Options</title>
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="8.635"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
                <path
                  d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
          </div>

          <div className="profile_friends_data flex items-center gap-12 mt-5">
            <div className="profile_frd_item flex items-center gap-1">
              <h4 className="text-md font-semibold">25</h4>
              <h4 className="text-md text-gray-500">Posts</h4>
            </div>

            <div className="profile_frd_item flex items-center gap-1">
              <h4 className="text-md font-semibold">125</h4>
              <h4 className="text-md text-gray-500">Followers</h4>
            </div>

            <div className="profile_frd_item flex items-center gap-1">
              <h4 className="text-md font-semibold">25</h4>
              <h4 className="text-md text-gray-500">Following</h4>
            </div>
          </div>

          <div className="profile_username flex flex-col gap-1.5  items-start w-full mt-3">
            <h4 className="text-sm font-semibold ml-1">Kallu Kalliya</h4>
            <h4 className="text-[13px] bg-[#E3E3E3] px-2 py-1 rounded-full">
              @itz_kallukaliya
            </h4>
          </div>

          <div className="profile_creatore_type text-gray-500 mt-2">
            Reel creator
          </div>

          <div className="profile_top_bio w-72">
            <p className="text-[13.5px]">
              🚀Frontend Developer | Animation Enthusiast 💻 Crafting Smooth &
              Engaging Web Experiences ✨ GSAP | Three.js | CSS Magic 📈 Bui
            </p>
          </div>
        </div>
      </div>
      

      <StoryHighlights/>
      <UserProfilePosts/>
     
     <div>
      <ProfileRoutes/>
     </div>
     
    </div>
  );
};

export default Profile;
