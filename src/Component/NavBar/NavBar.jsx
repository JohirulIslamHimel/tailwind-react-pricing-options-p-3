import React from "react";
import Link from "./Link";

const navigationData = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "About Us", path: "/about-us" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Blog", path: "/blog" },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        {navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
      {/* <ul c
       */}
      {/* <ul className="flex">
        <li className="mr-10">
          <a href="/">Home</a>
        </li>
        <li className="mr-10">
          <a href="/about">About</a>
        </li>
        <li className="mr-10">
          <a href="/blog">Blogs</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
