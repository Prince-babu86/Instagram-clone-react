import React from "react";
import ProfileRoutes from "../routes/ProfileRoutes";
import { NavLink, Outlet } from "react-router-dom";

const UserProfilePosts = () => {
  return (
    <div className="w-full">
      <div className="profile_posts w-full flex items-center h-10 border-t-1 border-[#DBDBDB] mt-8 relative">
        <div className="profile_posts-rorutes flex absolute top-0 justify-center w-full gap-16">
          <NavLink
          end
            to={`/profile`}
            className={({ isActive }) =>
              
              `profile_rt_item flex items-center gap-1 py-2.5 ${
                isActive
                  ? "border-t-2 border-black"
                  : "border-t-2 border-transparent"
              }`
            }
          >
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <title></title>
              <rect
                fill="none"
                height="18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                width="18"
                x="3"
                y="3"
              ></rect>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="9.015"
                x2="9.015"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="14.985"
                x2="14.985"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="9.015"
                y2="9.015"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="14.985"
                y2="14.985"
              ></line>
            </svg>
            <h4 className="text-[12px] font-medium">POSTS</h4>
          </NavLink>

          <NavLink
            to="/profile/reels"
            className={({ isActive }) =>
              `profile_rt_item flex items-center gap-1 py-2.5 ${
                isActive
                  ? "border-t-2 border-black"
                  : "border-t-2 border-transparent"
              }`
            }
          >
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x1roi4f4"
              fill="currentColor"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <title></title>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="2.049"
                x2="21.95"
                y1="7.002"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="13.504"
                x2="16.362"
                y1="2.001"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="7.207"
                x2="10.002"
                y1="2.11"
                y2="7.002"
              ></line>
              <path
                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <h4 className="text-[12px] font-medium">REELS</h4>
          </NavLink>

          <NavLink
            to={`/profile/saved`}
            className={({ isActive }) =>
              `profile_rt_item flex items-center gap-1 py-2.5 ${
                isActive
                  ? "border-t-2 border-black"
                  : "border-t-2 border-transparent"
              }`
            }
          >
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x1roi4f4"
              fill="currentColor"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <title></title>
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
            <h4 className="text-[12px] font-medium">SAVED</h4>
          </NavLink>

          <NavLink
            to={`/profile/tagged`}
            className={({ isActive }) =>
              `profile_rt_item flex items-center gap-1 py-2.5 ${
                isActive
                  ? "border-t-2 border-black"
                  : "border-t-2 border-transparent"
              }`
            }
          >
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x1roi4f4"
              fill="currentColor"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <title></title>
              <path
                d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <circle
                cx="12.072"
                cy="11.075"
                fill="none"
                r="3.556"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
            </svg>
            <h4 className="text-[12px] font-medium">TAGGED</h4>
          </NavLink>
        </div>
      </div>

      {/* <Outlet/> */}
    </div>
  );
};

export default UserProfilePosts;
