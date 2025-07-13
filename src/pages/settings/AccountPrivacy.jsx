import React, { useEffect, useState } from "react";

const AccountPrivacy = () => {
  const [isPrivate, setisPrivate] = useState(false);



  const handleIsPrivate = (e) => {
    isPrivate ? setisPrivate(false) : setisPrivate(true);
  };


  useEffect(()=>{
    localStorage.setItem("IsPrivate" , isPrivate);
  })



  return (
    <div className="w-[75%]  p-10 flex flex-col ">
      <h1 className="text-xl font-semibold">Account Privacy</h1>
      <div className="w-full flex items-center  justify-between border-1 rounded-2xl mt-5 py-5 px-5 ">
        <h2 className="text-md">Private Account</h2>

        <div
          onClick={handleIsPrivate}
          className={`h-6 w-12 rounded-full ease-in-out duration-500 ${
            isPrivate ? "bg-blue-800" : "bg-gray-500"
          } border-none flex items-center cursor-pointer`}
        >
          <div
            className={`h-4 w-4 rounded-full ease-in-out duration-500 bg-white ${
              isPrivate ? "translate-x-7" : "translate-x-1"
            }`}
          ></div>
        </div>
      </div>
      <p className="text-[12px] w-[80%] p-4 text-gray-500">
        When your account is public, your profile and posts can be seen by
        anyone, on or off Instagram, even if they don't have an Instagram
        account.
      </p>
      <p className="text-[12px] w-[80%] p-4 text-gray-500">
        When your account is private, only the followers you approve can see
        what you share, including your photos or videos on hashtag and location
        pages, and your followers and following lists. Certain info on your
        profile, like your profile picture and username, is visible to everyone
        on and off Instagram. <span className="text-blue-500">Learn more.</span>
      </p>
    </div>
  );
};

export default AccountPrivacy;
