import React from "react";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const date = new Date()
  
  return (
    <>

    {/* Desktop Nav */}
    <nav className="h-fit w-screen fixed bg-white hidden md:flex justify-center items-center py-4 gap-24 text-lg z-50">
    <NavLink  to="/"  className={({ isActive }) =>
                `${isActive ? ' font-bold underline decoration-[2.5px] underline-offset-4' : ''}`
              }>Home </NavLink>
    <NavLink  to="/trending-news" className={({ isActive }) =>
                `${isActive ? ' font-bold underline decoration-[2.5px] underline-offset-4' : ''}`}>Trending</NavLink>
    <NavLink  to="/categories" className={({ isActive }) =>
                `${isActive ? ' font-bold underline decoration-[2.5px] underline-offset-4' : ''}`}>Categories</NavLink>
      <NavLink to="/"
      className="text-xl md:text-5xl"
        style={{
          fontFamily: "Lobster Two, sans-serif",
          fontWeight: 900,
          fontStyle: "bold",
        }} 
      >
        NewsFlash
      </NavLink>
      <NavLink  to="/local" className={({ isActive }) =>
                `${isActive ? ' font-bold underline decoration-[2.5px] underline-offset-4' : ''}`}>Local</NavLink>
    <NavLink  to="/global" className={({ isActive }) =>
                `${isActive ? ' font-bold underline decoration-[2.5px] underline-offset-4' : ''}`}>Global</NavLink>
    <NavLink  to="/video" className={({ isActive }) =>
                `${isActive ? ' font-bold underline decoration-[2.5px] underline-offset-4' : ''}`}>Videos</NavLink>
    <p className="absolute z-10 right-4 ">{date.getHours()}:{date.getMinutes()} &nbsp; &nbsp;{date.getDate()}/{date.getMonth()}</p>
    <div className="w-4/5 h-[3px] bg-gray-800 flex justify-center items-center absolute bottom-0"></div>
    </nav>


    {/* Mobile Nav */}
    <nav className="flex md:hidden h-fit w-screen  bottom-0 fixed bg-white justify-center items-center py-2 gap-4  text-md  z-50">
    <NavLink  to="/"  className={({ isActive }) =>
                `${isActive ? 'border-[1.5px] border-gray-600 rounded-xl' : ''}`
              }>
              <img width="24" height="24" className="" src="https://img.icons8.com/puffy/64/exterior.png" alt="exterior"/>
              
              </NavLink>
    <NavLink  to="/trending-news" className={({ isActive }) =>
                `${isActive ? 'border-[1.5px] border-gray-600 rounded-xl p-[0.8px]' : ''}`}><img width="20" height="20" src="https://img.icons8.com/?size=100&id=ofrJI04yh9fq&format=png&color=000000" className="" alt="external-fire-nature-ecology-those-icons-lineal-those-icons"/></NavLink>
    <NavLink  to="/categories"  className={({ isActive }) =>
                `${isActive ? ' border-[1.5px] border-gray-600 rounded-xl px-[3.5px]' : ''}`}><i className="bi bi-grid font-bold p-0"></i></NavLink>
      <NavLink to="/"
      className="text-2xl"
        style={{
          fontFamily: "Lobster Two, sans-serif",
          fontWeight: 900,
          fontStyle: "bold",
        }} 
      >
        NewsFlash
      </NavLink>
      <NavLink  to="/local" className={({ isActive }) =>
                `${isActive ? ' border-[1.5px] border-gray-600 rounded-xl px-[0.5px] py-[1px]' : ''}`}><img width="20" height="20" className="" src="https://img.icons8.com/?size=100&id=c0kUjxdWTRsk&format=png&color=000000" alt="marker--v1"/></NavLink>
    <NavLink  to="/global" className={({ isActive }) =>
                `${isActive ? ' border-[1.5px] border-gray-600 rounded-xl px-[3.5px]' : ''}`}><i className="bi bi-globe-central-south-asia "></i></NavLink>
    <NavLink  to="/video" className={({ isActive }) =>
                `${isActive ? ' border-[1.5px] border-gray-600 rounded-xl p-[1.5px]' : ''}`}><img width="20" height="20" src="https://img.icons8.com/?size=100&id=85450&format=png&color=000000" alt="circled-play"/></NavLink>
    <div className="w-[90%] h-[1px] bg-gray-800 flex justify-center items-center absolute top-0"></div>
    </nav>

    </>
  );
};

export default Navbar;
