import React, { use, useEffect, useState } from "react";

const CloseFriends = () => {
  const users = [
    {
      name: "Aarav Sharma",
      username: "aarav_01",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      isCloseFriend: true,
    },
    {
      name: "Isha Verma",
      username: "isha.v",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      isCloseFriend: false,
    },
    {
      name: "Rohan Mehta",
      username: "rohan.mehta",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      isCloseFriend: true,
    },
    {
      name: "Simran Kaur",
      username: "simran_k",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      isCloseFriend: false,
    },
    {
      name: "Kabir Joshi",
      username: "kabirj",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      isCloseFriend: true,
    },
    {
      name: "Ananya Gupta",
      username: "ananya.g",
      image: "https://randomuser.me/api/portraits/women/61.jpg",
      isCloseFriend: false,
    },
    {
      name: "Devansh Singh",
      username: "dev_singh",
      image: "https://randomuser.me/api/portraits/men/71.jpg",
      isCloseFriend: false,
    },
    {
      name: "Pooja Raj",
      username: "pooja.raj",
      image: "https://randomuser.me/api/portraits/women/81.jpg",
      isCloseFriend: true,
    },
    {
      name: "Yash Malhotra",
      username: "yash_m",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
      isCloseFriend: false,
    },
    {
      name: "Tanya Jain",
      username: "tanya.j",
      image: "https://randomuser.me/api/portraits/women/99.jpg",
      isCloseFriend: true,
    },
  ];

  const [username, setusername] = useState("");
  const [usersdata, setusersdata] = useState(users);
  const [query, setquery] = useState("");
  const [loader, setloader] = useState(false);

  const handllefreind = (userid) => {
    setusername(userid);
    setloader(true);
    setTimeout(() => {
      if (userid) {
        setusersdata((prev) =>
          prev.map((user) =>
            user.username === userid
              ? { ...user, isCloseFriend: !user.isCloseFriend }
              : user
          )
        );
      }
      setloader(false);
    }, 1500);
  };

  console.log(usersdata);

  useEffect(() => {
    setloader(true);
    let newuser = users.filter((u) =>
      u.username.toLowerCase().includes(query.toLocaleLowerCase())
    );
    setTimeout(() => {
      setloader(false);
      setusersdata(newuser);
    }, 2000);
  }, [query]);

  return (
    <div className="settings_close_friends_page w-4xl p-12  ">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Close Friends</h1>
      </div>
      <p className="mt-3.5 text-sm text-gray-500">
        We don't send notifications when you edit your close friends list.{" "}
        <span className="text-blue-500 font-bold cursor-pointer">
          How it works.
        </span>
      </p>
      <div className="_settings_search w-[85%] bg-[#EFEFEF] flex items-center mt-5  px-4 rounded-md">
        <i className="ri-search-line text-gray-500"></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          value={query}
          type="text"
          placeholder="Search"
          className="w-full outline-none text-sm px-2 py-3 placeholder:text-gray-500 placeholder:text-md font-semibold"
        />
      </div>
      {!loader ? (
        <div className="settings_close_friends_users w-[85%] mt-5">
          {usersdata.map((user, id) => {
            return (
              <div
                onClick={() => {
                  handllefreind(user.username);
                }}
                key={id}
                className="item w-full flex items-center relative mb-4 cursor-pointer"
              >
                <img
                  src={user.image}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover object-top"
                />
                <div className="flex flex-col items-start leading-4 ml-3">
                  <h4 className="text-sm font-semibold">{user.username}</h4>
                  <h4 className="text-sm text-gray-500">{user.name}</h4>
                </div>
                <input
                  onChange={(e) => setusername(e.target.value)}
                  value={user.username}
                  checked={user.isCloseFriend}
                  type="radio"
                  className="h-4 w-4 absolute right-2"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-60 w-full flex items-center justify-center">
          <div className="loader h-5 w-5 rounded-full border-3 border-t-transparent animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default CloseFriends;
