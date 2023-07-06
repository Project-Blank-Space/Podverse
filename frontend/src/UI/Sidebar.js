import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiLogOut} from 'react-icons/fi';
import {IoMdAddCircle} from 'react-icons/io'
import { LocalStorageItems } from "../shared/localstorageitems";
import { googleLogout } from '@react-oauth/google';


const Sidebar = () => {

  const User = JSON.parse(localStorage.getItem(LocalStorageItems.user_data));
  // console.log(User)

  const navigate = useNavigate()


  const logOut = () => {
    // googleLogout();
    localStorage.removeItem(LocalStorageItems.user_data);
    navigate('/');
  };

  const routeLinks1 = [
    {
      display: "Home",
      to: "/dashboard",
    },
    {
      display: "Discover",
      to: "/discover",
    },
    {
      display: "Play Random",
      to: "/play-random",
    },
    {
      display: "Saved Episodes",
      to: "/saved-episodes",
    },
    {
      display: "Library",
      to: "/library",
    },
    {
      display: "History",
      to: "/history",
    }
  ];


  return (
    <div className="left-0 inset-0 top-24 bg-[#F1F1F1] z-30 sticky h-auto overflow-y-visible border-b-0 border-0 w-48">
      <div className="w-full px-3 py-10 overflow-y-auto h-auto block sticky bg-[#F1F1F1]">
        <div className="flex items-center gap-4 pb-12">
          <div className="rounded-full w-12 h-12 text-transparent bg-navblue">
            <img className="rounded-full" src={User.user_img} />
          </div>
          <span className="text-sm whitespace-nowrap">{User.user_name}</span>
        </div>
        <div className="flex flex-col gap-60">
          <ul className="space-y-2 w-full">
            {routeLinks1.map((routeItem, index) => {
              return (
                <li>
                  <NavLink
                    key={index}
                    to={routeItem.to}
                    className={({ isActive }) =>
                      isActive
                        ? "border-2 border-solid border-navblue bg-navblue text-white text-center block m-2 p-2 rounded-md font-semibold text-xs whitespace-nowrap"
                        : "border-2 border-solid border-navblue block m-2 p-2 text-center font-semibold rounded-md text-xs whitespace-nowrap"
                    }
                  >
                    <span>{routeItem.display}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ul className="space-y-5">
            <button className="flex gap-4 px-4 items-center text-sm whitespace-nowrap" onClick={() => navigate('/create-channel')}>
              <IoMdAddCircle size={20} />
              <span>Create channel</span>
            </button>
            <button className="flex gap-4 px-4 items-center text-sm whitespace-nowrap" onClick={() => logOut()}>
              <FiLogOut size={20} />
              <span>Logout</span>
            </button>

            {/* {routeLinks2.map((routeItem, index) => {
              return (
                <li key={index}>
                  <NavLink
                    key={index}
                    to={routeItem.to}
                    // onClick={() => routeItem.click}
                    className={`flex gap-6 px-6 items-center text-sm whitespace-nowrap ${activeLink === routeItem.to ? 'border-blue-400 border-x-[3px] text-white' : 'text-'
                      }`}
                    exact
                  >
                    {React.cloneElement(routeItem.icon, {
                      color: activeLink === routeItem.to ? '' : '#1F3D53',
                      size: 20,
                    })}
                    <span>{routeItem.display}</span>
                  </NavLink>
                </li>
              );
            })} */}
          </ul>
        </div>

      </div>
    </div>

  );
};

export default Sidebar;
