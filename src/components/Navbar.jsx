import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Optional: for icons
import { Link } from "react-router";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    // { name: "About", path: "/about-me" },
    // { name: "Education", path: "/education" },
    // { name: "Skill", path: "/skill" },
    // { name: "Experience", path: "/experience" },
    { name: "Project", path: "/project" },
    // { name: "Contact", path: "/contact" },
  ];

  // Logic to handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show if scrolling up or at the top, hide if scrolling down
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`fixed w-full z-[9999] transition-transform duration-300 bg-white  ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
        {/* Logo/Brand Area */}
        {/* <div className="text-2xl font-bold text-red-600">Logo</div> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 list-none">
          {menu.map((m) =>
            m.path.includes("project") ? (
              <Link to={m.path}>
                <p className="text-gray-700 hover:text-black text-lg no-underline transition-colors">{m.name}</p>
              </Link>
            ) : (
              <li key={m.path}>
                <a className="text-gray-700 hover:text-black text-lg no-underline transition-colors" href={`#${m.path.replace("/", "")}`}>
                  {m.name}
                </a>
              </li>
            ),
          )}
        </ul>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${isMenuOpen ? "max-h-screen border-b" : "max-h-0"}`}>
        <ul className="flex flex-col items-center gap-6 py-8">
          {menu.map((m) =>
            m.path.includes("project") ? (
              <Link to={m.path} onClick={() => setIsMenuOpen(false)}>
                <span className="text-xl text-gray-700">{m.name}</span>
              </Link>
            ) : (
              <li key={m.path} onClick={() => setIsMenuOpen(false)}>
                <a href={`#${m.path.replace("/", "")}`} className="text-xl text-gray-700">
                  {m.name}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
