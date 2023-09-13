import React from 'react';
import {NavLink, Outlet, Routes} from "react-router-dom";

const Layout = () => {
  return (
    <div className="wrapper">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({isActive}) => isActive ? 'red' : null}
          >Главная</NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            className={({isActive}) => isActive ? 'red' : null}
          >Герои</NavLink>
        </li>
        <li>
          <NavLink
            to="/location"
            className={({isActive}) => isActive ? 'red' : null}
          >Локации</NavLink>
        </li>
        <li>
          <NavLink
            to="/episode"
            className={({isActive}) => isActive ? 'red' : null}
          >Эпизоды</NavLink>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
};

export default Layout;