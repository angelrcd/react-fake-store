import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";


function Navbar({fullLogoURL, logoURL, navItems}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () =>{
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed w-screen h-10 bg-gray-200 flex justify-between items-center z-0 border-b border-gray-500 shadow-md">
        <img className="ml-3 md:ml-8 h-8" src={fullLogoURL} alt="" />
        <img onClick={handleMenu} className="mr-3 h-8 lg:hidden cursor-pointer hover:bg-gray-300 rounded-full" src="/img/menu-hamburger.svg" alt="" />
        <ul className="hidden lg:flex mr-3 md:mr-8 h-full items-center text-gray-700 text-xl">
          {navItems.map((item, index) => {
            return (
              <NavLink key={index} to={"/"+item}
                className={({ isActive }) => 
                  isActive ? "bg-red-400" : ""
                }>
                <li className="cursor-pointer px-4 rounded-md hover:bg-gray-300">{item}</li>
              </NavLink>
            );
          })}
        </ul>
      </nav>

      <div className={`${menuOpen ? "translate-x-[0%] duration-300" : "translate-x-[100%]"} fixed w-[300px] z-10 h-screen right-0 top-0 bg-gray-200 flex flex-col`}
        onClick={handleMenu} >
        <div className="flex justify-between">
          <img src={logoURL} alt="" />
          <img className="m-2 cursor-pointer h-8" src="/img/close-menu.svg" alt="" />
        </div>
        <ul className="text-gray-700 text-lg">
          {navItems.map((item, index) => {
            return <li className="cursor-pointer mx-5 my-3 border-b border-gray-500" key={index}>{item}</li>;
          })}
        </ul>
      </div>

      <div onClick={handleMenu} className={`${menuOpen ? "" : "hidden"} fixed w-screen h-screen bg-black opacity-50`}></div>
    </>
    
  );
}

export default Navbar;