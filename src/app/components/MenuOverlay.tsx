import React from "react";
import NavLink from "./NavLink";

interface Link {
  href: string;
  title: string;
}

interface Links {
  links: Link[];
}

const MenuOverlay: React.FC<Links> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
