import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi2";
import { SidebarData } from "./Sidebar";
export default function NavigationMenu() {
  function showSideBar() {
    setSideBar(!sidebar);
  }

  const [sidebar, setSideBar] = useState(false);
  const breakpoint = 700;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="navigation-menu">
      <Link href="#" className="nav-burger-button">
        <HiIcons.HiBars3
          onClick={showSideBar}
          size={35}
          style={{ backgroundColor: "rgb(85, 7, 7)" }}
        />
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
        <div
          style={
            height < breakpoint
              ? {
                  paddingTop: "50px",
                  backgroundColor: "white",
                  overflowY: "scroll",
                  maxHeight: "500px",
                }
              : {
                  paddingTop: "50px",
                  backgroundColor: "white",
                }
          }
        >
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
          <div className="social-icons-container">
            <Link
              href="https://charlyrv84.wixsite.com/charlysgym/services"
              className="icon-link"
            >
              <AiIcons.AiFillFacebook
                size={35}
                color="#787676"
                style={{ backgroundColor: "white" }}
              />
            </Link>
            <Link
              href="https://charlyrv84.wixsite.com/charlysgym/services"
              className="icon-link"
            >
              <AiIcons.AiOutlineTwitter
                size={35}
                color="#787676"
                style={{ backgroundColor: "white" }}
              />
            </Link>
            <Link
              href="https://charlyrv84.wixsite.com/charlysgym/services"
              className="icon-link"
            >
              <AiIcons.AiOutlineMail
                size={35}
                color="#787676"
                style={{ backgroundColor: "white" }}
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
