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
    {
      name: "Vision",
      path: "/vision",
    },
    {
      name: "Education",
      path: "/education",
    },
    {
      name: "Skill",
      path: "/skill",
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
    <div className="fixed top-0 w-full">
      <ul className="flex py-[20px] justify-end pr-[60px] gap-[40px] list-none">
        {menu.map((m) => (
          <Link className="text-red no-underline" to={m.path}>
            <li
              key={m.path}
              className={`${
                m.path === location.pathname ? "text-[#aa531a]" : "text-red"
              } hover:text-[#aa531a] text-[20px] fadeUp`}
            >
              {m.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
