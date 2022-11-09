import React from "react";
import "./css-files/Navbar.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
function Navbar(props: {
  toggleDarkMode: any;
  switchDarkMode: React.MouseEventHandler<HTMLDivElement> | undefined;
}) {
  return (
    <nav className={props.toggleDarkMode ? "navbar dark-element" : "navbar"}>
      <h1>Where in the world?</h1>

      <div className="navbar__mode-button" onClick={props.switchDarkMode}>
        {props.toggleDarkMode ? (
          <>
            <LightModeIcon />
            <h4>Light Mode</h4>
          </>
        ) : (
          <>
            <DarkModeIcon />
            <h4>Dark Mode</h4>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
