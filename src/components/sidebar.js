import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  studentIcon,
  planIcon,
  settingIcon,
  hireIcon,
} from "../utility/commonStaticData";

import Logo from "./logo";
import Mysocal from "./mysocal";

const Sidebar = () => {
  const location = useLocation();
  const manuItem = [
    { manu: "about me", icon: studentIcon, route: "/" },
    { manu: "Resume", icon: planIcon, route: "/stdunts" },
    { manu: "Contact Me", icon: settingIcon, route: "/settings" },
  ];

  return (
    <>
      <div className="logo">
        <h2>Biswajit Mondal</h2>
        <Logo />
        <p>
          Hi, my name is Biswajit Mondal and I'm a Software Developer. Welcome
          to my personal website
        </p>
        <Mysocal />
      </div>
      <div className="sideBarManu">
        <ul>
          {manuItem.map((item, index) => (
            <li key={index}>
              <Link
                className={
                  item.route === location.pathname
                    ? "active_manuitems"
                    : "manu_list"
                }
                to={item.route}
              >
                <span className="manuIcon">{item.icon}</span>
                {item.manu}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hire">{hireIcon} Hire Me</button>
      </div>
    </>
  );
};

export default Sidebar;
