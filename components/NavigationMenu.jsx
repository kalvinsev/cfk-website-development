import React, { useState } from "react";
import Link from "next/link";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi2";
import { SidebarData } from "./Sidebar";
export default function NavigationMenu() {
  function showSideBar() {
    setSideBar(!sidebar);
  }

  const [sidebar, setSideBar] = useState(false);

  return (
    <div className="navigation-menu">
      <Link href="#" className="nav-burger-button">
        <HiIcons.HiBars3 onClick={showSideBar} size={35} />
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <Link href="#" className="menu-close">
          <AiIcons.AiOutlineClose
            size={35}
            color={"#787676"}
            style={{ backgroundColor: "white" }}
            onClick={showSideBar}
          />
        </Link>
        <div style={{ paddingTop: "50px", backgroundColor: "white" }}>
          {SidebarData.map((item, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: "white" }}
                className={item.cName}
              >
                <Link href={item.path}>{item.title}</Link>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
