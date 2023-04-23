import React,{ useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiLogOut, FiSettings } from 'react-icons/fi';


const Sidebar = () => {

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

  const routeLinks2 = [
    {
      icon: <FiSettings/>,
      display: "Settings",
      to: "/settings",
    },
    {
      icon: <FiLogOut />,
      display: "Sign out",
      to: "/",
    },
  ];




  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveLink(currentPath);
  }, [location]);


  return (
    <div className="left-0 inset-0 top-24 bg-[#F1F1F1] z-30 sticky h-auto overflow-y-visible border-b-0 border-0 w-48">
      <div className="w-full px-3 py-10 overflow-y-auto h-auto block sticky bg-[#F1F1F1]">
        <div className="flex items-center gap-4 pb-12">
          <div className="rounded-full w-12 h-12 text-transparent bg-navblue">.</div>
          <span className="text-lg">Pranjal</span>
        </div>
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
          <ul className="space-y-4">
            {routeLinks2.map((routeItem, index) => {
              return (
                <li key={index}>
                  <NavLink
                    key={index}
                    to={routeItem.to}
                    className={`flex gap-4 px-2 items-center text-sm whitespace-nowrap ${activeLink === routeItem.to ? 'border-blue-400 border-x-[3px] text-white' : 'text-'
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
            })}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
