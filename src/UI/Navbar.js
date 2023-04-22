import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LogoMin from '../assets/logo-min.svg'

const NavBar = () => {
  const routeLinks1 = [
    {
      display: "Home",
      to: "/",
    },
    {
      display: "Explore",
      to: "/explore",
    },
    {
      display: "Pricing",
      to: "/pricing",
    }
  ];

  const routeLinks2 = [
    {
      display: "Signup",
      to: "/signup",
    },
    {
      display: "Login",
      to: "/login",
    }
  ];



  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveLink(currentPath);
  }, [location]);

  return (
    <div className="w-full fixed flex items-center bg-[#1F3D53] z-30">
      <div className="flex items-center justify-between w-full py-1 px-2 overflow-y-auto h-auto sticky bg-[#1F3D53]">
        <div className="flex p-3">
          <img className="h-12" src={LogoMin} alt="PodVerse" />
        </div>
        <div className="flex gap-12">
          {routeLinks1.map((routeItem, index) => {
            return (
              <div key={index}>
                <NavLink
                  key={index}
                  to={routeItem.to}
                  className={`flex px-2 items-center font-semibold text-base whitespace-nowrap hover:border-b-2 border-golden ${activeLink === routeItem.to ? 'text-golden' : 'text-[#FFFFFF]'
                    }`}
                  exact
                >

                  <span>{routeItem.display}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="flex gap-8 px-4">
          {routeLinks2.map((routeItem, index) => {
            return (
              <div key={index}>
                <NavLink
                  key={index}
                  to={routeItem.to}
                  className={`flex gap-4 px-2 py-1 items-center font-semibold text-base whitespace-nowrap ${activeLink === routeItem.to ? 'text-[#1F3D53] bg-white rounded-md' : 'text-[#FFFFFF]'
                    }`}
                  exact
                >

                  <span>{routeItem.display}</span>
                </NavLink>
              </div>
            );
          })}
          <select>
            <option>English</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
