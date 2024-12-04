import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const CategoryNav = () => {
  const categories = [
    { title: "General", to: "/categories" },
    { title: "Business", to: "/categories/business" },
    { title: "Entertainment", to: "/categories/entertainment" },
    { title: "Health", to: "/categories/health" },
    { title: "Science", to: "/categories/science" },
    { title: "Sports", to: "/categories/sports" },
    { title: "Technology", to: "/categories/technology" },
    { title: "Fashion", to: "/categories/fashion" },
    { title: "Food", to: "/categories/food" },
    { title: "Politics", to: "/categories/politics" },
  ];
  
  return (
    <section className="fixed z-20 w-screen">
      <nav className="flex flex-row justify-center items-center text-xs md:text-base gap-4 md:gap-16 bg-gray-900 text-white p-2 md:p-3 mx-0 md:mx-[10%] flex-wrap">
        {categories.map((category, idx) => {
          return (
            <NavLink
              key={idx}
              to={category.to}
              end={category.to === "/categories"}
              className={({ isActive }) =>
                isActive
                  ? "border-solid border-2 p-1 border-gray-300 "
                  : "border-none "
              }
            >
              {category.title}
            </NavLink>
          );
        })}
      </nav>
    </section>
  );
};

export default CategoryNav;
