import React from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about-me",
    },
    // {
    //   name: "Vision",
    //   path: "/vision",
    // },
    {
      name: "Education",
      path: "/education",
    },
    {
      name: "Skill",
      path: "/skill",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Project",
      path: "/project",
    },
    // {
    //   name: "Portfolio",
    //   path: "/portfolio",
    // },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="fixed z-[99999999999999] top-0 w-full">
      <ul className="flex py-[20px] justify-end pr-[60px] gap-[40px] list-none">
        {menu.map((m) => (
          <a
            className="text-red no-underline"
            href={`#${m.path.replace("/", "")}`}
          >
            <li
              key={m.path}
              className={`${
                m.path === location.pathname ? "text-[black]" : "text-[#a3a3a1]"
              } hover:text-[black]  text-[20px] fadeUp`}
            >
              {m.name}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
