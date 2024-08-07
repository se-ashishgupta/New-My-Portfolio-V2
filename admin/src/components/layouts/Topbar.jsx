import React, { useState } from "react";
import { AiFillHome, AiFillSetting, AiFillBell } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context/Context";

const Topbar = () => {
  const {
    openMenu: title,
    openSidebar,
    setopenSidebar,
    setActiveMenu,
    setOpenSettingSidebar,
    topBarFixed,
  } = useMyContext();

  const sidebarHandler = () => {
    setopenSidebar((prev) => !prev);
  };

  const settingSidebarHandler = () => {
    setOpenSettingSidebar((prev) => !prev);
  };

  return (
    <div
      className={` ${
        topBarFixed && "sticky"
      } top-0 z-10 rounded-xl h-[4rem] flex items-center justify-between px-4 py-10 mb-4 border border-primary_color shadow-md shadow-primary_color bg-backPrimary-gradient`}
    >
      <div className=" ">
        <div className=" flex items-center gap-2 font-semibold text-text_color1 ">
          <Link to={"/"} onClick={() => setActiveMenu("/")}>
            <figure>
              <AiFillHome />
            </figure>
          </Link>
          <span>{"/"}</span>
          <span>{title}</span>
        </div>

        <h1 className="text-text_color1 text-xl font-bold">{title}</h1>
      </div>

      <div className=" flex items-center gap-5 text-2xl text-gray-500">
        <figure className=" cursor-pointer" onClick={settingSidebarHandler}>
          <AiFillSetting />
        </figure>
        <figure className="xl:hidden cursor-pointer" onClick={sidebarHandler}>
          {openSidebar ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </figure>
        <Link>
          <AiFillBell />
        </Link>
        <Link>
          <HiUserCircle />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
