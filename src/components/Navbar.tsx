import { AlignJustify } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
  const { pathname } = useLocation();
  const navlinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="border-b border-b-slate-400 flex justify-between p-4 md:px-28">
      {/* logo */}
      <h2 className="font-bold text-3xl"> Barkel</h2>
      {/* navigation links */}
      <ul className=" gap-4 items-center capitalize font-medium hidden md:flex">
        {navlinks.map((link, index) => (
          <li
            key={index}
            className={
              pathname == link.link ? `border-b-2 border-b-red-600` : ""
            }
          >
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
      {/* <button className="md:hidden">
        <AlignJustify />
      </button> */}
      {/* TODO: Add menu with slide bar */}
    </div>
  );
};

export default Navbar;
