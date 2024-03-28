import { useState, useEffect } from "react";

import data from "../data/navbarItems.json";
import logo from "../images/logo-header.svg";
import logoDark from "../images/logo-header-dark.svg";

interface IProps {
  refs: React.RefObject<HTMLElement>[];
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = (props: IProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const listElements = data.map((item, index) => (
    <li
      key={index}
      onClick={() => {
        props.refs[index].current?.scrollIntoView({ behavior: "smooth" });
        setShowMenu(false);
      }}
    >
      {item}
    </li>
  ));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <div className="nav-wrapper">
        {windowWidth < 1100 ? (
          <div
            className="hamburger"
            onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}
          >
            <div className="line"></div>
            {showMenu && (
              <div className="menu" onClick={(e) => e.stopPropagation()}>
                <div
                  className="close-btn"
                  onClick={() => setShowMenu(false)}
                ></div>
                <ul>{listElements}</ul>
              </div>
            )}
          </div>
        ) : (
          <>
            <ul>{listElements}</ul>
          </>
        )}
        <input
          type="checkbox"
          id="theme-toggle"
          checked={props.theme}
          onChange={(e) => {
            props.setTheme(e.target.checked);
            localStorage.setItem("theme", e.target.checked.toString());
          }}
        />
        <label
          htmlFor="theme-toggle"
          className={`theme-toggler ${
            props.theme ? "theme-dark" : "theme-light"
          }`}
          title="Switch between light and dark mode"
          style={{ width: "50px" }}
        >
          <div className={`ball ${props.theme && "checked"}`}></div>
        </label>
        <img
          src={!props.theme ? logo : logoDark}
          alt="logo"
          className="logo-header"
        />
      </div>
    </nav>
  );
};

export default Navbar;
