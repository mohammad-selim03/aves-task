import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoNotifications, IoSearch } from "react-icons/io5";
import userImg from "../../assets/men.jpeg";

const Navbar = () => {
  const menusData = [
    { title: "dashboad", link: "/" },
    { title: "inbox", link: "/inbox" },
    { title: "calender", link: "/calender" },
    { title: "insights", link: "/insights" },
    { title: "listings", link: "/listings" },
  ];
  return (
    <div className="flex items-center justify-between font-semibold text-gray-700 border-b-2 border-gray-200 p-5">
      <div>logo</div>
      <div className="flex items-center gap-5">
        {menusData?.map((item, index) => (
          // <Link key={index} to={item?.link} >
          <p key={index} className="capitalize cursor-pointer">
            {item?.title}
          </p>
          // </Link>
        ))}
      </div>
      <div className="flex items-center gap-3 text-2xl font-semibold text-gray-400">
        <span>
          <IoSearch />
        </span>
        <div className="relative">
          {" "}
          <span>
            <IoNotifications />
          </span>
          <span className="absolute bg-green-600 h-2 w-2 rounded-full top-0 right-0"></span>
        </div>
        <span>
          <img src={userImg} alt="user img" className="h-8 w-8 rounded-full object-cover" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
