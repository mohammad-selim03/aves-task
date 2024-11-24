import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import userImg from "../../assets/men.jpeg";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import ToggleButton from "../DynamicComponents/ToggleButton";
import { AiFillPropertySafety } from "react-icons/ai";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard"); // Set default active menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menusData = [
    { title: "dashboard", link: "/" },
    { title: "inbox", link: "/inbox" },
    { title: "calendar", link: "/calendar" },
    { title: "insights", link: "/insights" },
    { title: "listings", link: "/listings" },
  ];

  // Function to handle menu open/close
  const handleMenuOpen = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the menu visibility
  };

  // Function to handle menu item click
  const handleMenuItemClick = (title) => {
    setActiveMenu(title); // Set the clicked menu as active
    setIsMenuOpen(false); // Close the menu after item is clicked
  };

  return (
    <div className="flex items-center justify-between font-semibold text-gray-700 border-b-2 border-gray-200 p-5">
      {/* Menu button for small screens */}
        <div>
          <p><AiFillPropertySafety size={40} className="text-green-600"/></p>
        </div>
      <div className="flex md:hidden items-center gap-5">
        <div onClick={handleMenuOpen} className="cursor-pointer">
          {isMenuOpen ? (
            <HiX size={25} /> // Show cross icon when the menu is open
          ) : (
            <HiMenuAlt1 size={25} /> // Show hamburger icon when the menu is closed
          )}
        </div>
      </div>
      {/* Overlay and Menu Items for small screens */}
      {isMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-50 top-14 left-[25%] lg:hidden"
          onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
        >
          <div
            className="bg-white p-5 rounded-xl shadow-lg space-y-4 w-64"
            onClick={(e) => e.stopPropagation()} // Prevent menu close on click inside
          >
            {menusData.map((item, index) => (
              <p
                key={index}
                className={`capitalize cursor-pointer px-3 py-1  rounded-xl transition-all duration-300 dark:text-white ${
                  activeMenu === item.title
                    ? "text-green-600 bg-green-100 font-semibold"
                    : "text-gray-500 dark:text-white"
                }`}
                onClick={() => handleMenuItemClick(item.title)} // Handle item click
              >
                {item.title}
              </p>
            ))}
          </div>
        </div>
      )}
      <div className="hidden md:flex items-center gap-3">
        {/*  */}
        {menusData.map((item, index) => (
          <p
            key={index}
            className={`capitalize cursor-pointer px-3 py-1 rounded-xl ${
              activeMenu === item.title
                ? "text-green-600 bg-green-100 font-semibold"
                : "text-gray-500 dark:text-white"
            }`}
            onClick={() => setActiveMenu(item.title)} // Set the clicked menu as active
          >
            {item.title}
          </p>
        ))}
      </div>

      <div className="flex items-center gap-3 text-2xl font-semibold text-gray-400">
        <div>
          <ToggleButton />
        </div>
        <span>
          <IoSearch />
        </span>
        <div className="relative">
          <span>
            <IoNotifications />
          </span>
          <span className="absolute bg-green-600 h-2 w-2 rounded-full top-0 right-0"></span>
        </div>
        <span>
          <img
            src={userImg}
            alt="user img"
            className="h-8 w-8 rounded-full object-cover"
          />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
