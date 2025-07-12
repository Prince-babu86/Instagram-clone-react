import React from "react";
import { NavLink } from "react-router-dom";

const SettingsMenu = () => {
  return (
    <div className="flex min-h-screen w-72 border-r-1 border-[#DBDBDB] py-7 px-4 flex-col">
      <h1 className="text-xl font-bold">Settings</h1>

      <div className="settings_for_you flex flex-col mt-8 w-full gap-3">
        <h4 className="text-sm text-gray-500 font-semibold">
          How you use Instagram
        </h4>
        <div className="w-full flex flex-col gap-2.5">
          <NavLink
            end
            to={`/accounts/`}
            className={({ isActive }) =>
              `settings_item flex items-center  py-2.5 px-2.5 gap-2.5 rounded-md cursor-pointer hover:bg-[#efefef] duration-500 ease-in-out" ${
                isActive ? "bg-[#efefef]" : "bg-transparent"
              }`
            }
          >
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title></title>
              <circle
                cx="12.004"
                cy="12.004"
                fill="none"
                r="10.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
              ></circle>
              <path
                d="M18.793 20.014a6.08 6.08 0 0 0-1.778-2.447 3.991 3.991 0 0 0-2.386-.791H9.38a3.994 3.994 0 0 0-2.386.791 6.09 6.09 0 0 0-1.779 2.447"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
              ></path>
              <circle
                cx="12.006"
                cy="9.718"
                fill="none"
                r="4.109"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
              ></circle>
            </svg>
            <h4>Edit Profile</h4>
          </NavLink>

          <NavLink
            to={`/accounts/notifications`}
            className={({ isActive }) =>
              `settings_item flex items-center  py-2.5 px-2.5 gap-2.5 rounded-md cursor-pointer hover:bg-[#efefef] duration-500 ease-in-out" ${
                isActive ? "bg-[#efefef]" : "bg-transparent"
              }`
            }
          >
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title></title>
              <path d="m21.306 14.019-.484-.852A6.358 6.358 0 0 1 20 9.997a7.953 7.953 0 0 0-4.745-7.302 3.971 3.971 0 0 0-6.51.002 7.95 7.95 0 0 0-4.74 7.323 6.337 6.337 0 0 1-.83 3.175l-.468.823a4.001 4.001 0 0 0 3.476 5.983h1.96a3.98 3.98 0 0 0 7.716 0h1.964a4.004 4.004 0 0 0 3.482-5.982Zm-9.304 6.983a1.993 1.993 0 0 1-1.722-1.001h3.444a1.993 1.993 0 0 1-1.722 1.001Zm7.554-3.997a1.986 1.986 0 0 1-1.732.996H6.184a2.002 2.002 0 0 1-1.74-2.993l.47-.822a8.337 8.337 0 0 0 1.093-4.174 5.962 5.962 0 0 1 3.781-5.584.996.996 0 0 0 .494-.426 1.976 1.976 0 0 1 3.439 0 1 1 0 0 0 .494.425 5.989 5.989 0 0 1 3.786 5.634 8.303 8.303 0 0 0 1.082 4.094l.483.852a1.984 1.984 0 0 1-.01 1.998Z"></path>
            </svg>
            <h4>Notifications</h4>
          </NavLink>
        </div>
      </div>

      <div className="settings_for_you flex flex-col mt-5 w-full gap-3">
        <h4 className="text-sm text-gray-500 font-semibold">
          Who can see your content
        </h4>
        <div className="w-full flex flex-col gap-2.5">
          <NavLink
            to={`/accounts/account-privacy`}
            className={({ isActive }) =>
              `settings_item flex items-center  py-2.5 px-2.5 gap-2.5 rounded-md cursor-pointer hover:bg-[#efefef] duration-500 ease-in-out" ${
                isActive ? "bg-[#efefef]" : "bg-transparent"
              }`
            }
          >
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title></title>
              <path
                d="M6.71 9.555h10.581a2.044 2.044 0 0 1 2.044 2.044v8.357a2.044 2.044 0 0 1-2.043 2.043H6.71a2.044 2.044 0 0 1-2.044-2.044V11.6A2.044 2.044 0 0 1 6.71 9.555Zm1.07 0V6.222a4.222 4.222 0 0 1 8.444 0v3.333"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
            <h4>Account privacy</h4>
          </NavLink>

          <NavLink
            to={`/accounts/close-friends`}
            className={({ isActive }) =>
              `settings_item flex items-center  py-2.5 px-2.5 gap-2.5 rounded-md cursor-pointer hover:bg-[#efefef] duration-500 ease-in-out" ${
                isActive ? "bg-[#efefef]" : "bg-transparent"
              }`
            }
          >
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title></title>
              <path
                d="M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Zm4.691-11.82L13.91 9.35l-1.08-2.537a.893.893 0 0 0-1.66 0L10.086 9.35l-2.783.334a.963.963 0 0 0-.493 1.662l2.095 1.905-.606 2.837a.918.918 0 0 0 1.363 1.018l2.335-1.504 2.335 1.504a.918.918 0 0 0 1.363-1.018l-.605-2.837 2.094-1.905a.962.962 0 0 0-.493-1.662Z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <h4>Close friends</h4>
          </NavLink>

          <NavLink
            to={`/accounts/blocked-list`}
            className={({ isActive }) =>
              `settings_item flex items-center  py-2.5 px-2.5 gap-2.5 rounded-md cursor-pointer hover:bg-[#efefef] duration-500 ease-in-out" ${
                isActive ? "bg-[#efefef]" : "bg-transparent"
              }`
            }
          >
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title></title>
              <path d="M20.153 20.106A11.493 11.493 0 0 0 3.893 3.858c-.007.007-.016.009-.023.016s-.009.016-.015.023a11.493 11.493 0 0 0 16.247 16.26c.01-.009.022-.012.03-.02.01-.01.012-.022.021-.031Zm1.348-8.102a9.451 9.451 0 0 1-2.119 5.968L6.033 4.622a9.49 9.49 0 0 1 15.468 7.382Zm-19 0a9.451 9.451 0 0 1 2.118-5.967l13.35 13.35A9.49 9.49 0 0 1 2.5 12.003Z"></path>
            </svg>
            <h4>Blocked</h4>
          </NavLink>

          <NavLink
            to={`/accounts/hide-story`}
            className={({ isActive }) =>
              `settings_item flex items-center  py-2.5 px-2.5 gap-2.5 rounded-md cursor-pointer hover:bg-[#efefef] duration-500 ease-in-out" ${
                isActive ? "bg-[#efefef]" : "bg-transparent"
              }`
            }
          >
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title></title>
              <path d="M1.545 13.386a1 1 0 0 0 .961-1.037Q2.5 12.174 2.5 12a9.514 9.514 0 0 1 .467-2.955 1 1 0 0 0-1.902-.62A11.53 11.53 0 0 0 .5 12c0 .142.002.283.008.425a1 1 0 0 0 .998.962.52.52 0 0 0 .04-.001Zm1.742 2.424a1 1 0 1 0-1.834.798 11.588 11.588 0 0 0 3.163 4.23A1 1 0 1 0 5.9 19.307a9.581 9.581 0 0 1-2.614-3.497Zm12.828 4.757a9.575 9.575 0 0 1-7.113.45 1 1 0 1 0-.629 1.899 11.545 11.545 0 0 0 8.607-.546 1 1 0 0 0-.865-1.803Zm4.69-1.176A11.495 11.495 0 0 0 12.002.5a1 1 0 0 0 0 2 9.492 9.492 0 0 1 7.382 15.469L2.207.793A1 1 0 0 0 .793 2.207l21 21a1 1 0 0 0 1.414-1.414Z"></path>
            </svg>
            <h4>Hide story and live</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
