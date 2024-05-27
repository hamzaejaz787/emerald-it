"use client";

import React from "react";
import { NavDropDownMenu } from "./DropdownMenu";
import { useActivePath } from "@/app/helper";
import Link from "next/link";

export interface NavItemProps {
  href: string;
  title: string;
  subItems?: {
    title: string;
    href: string;
  }[];
}

export interface NavItemTypes {
  href: string;
  title: string;
  children: NavItemTypes[];
}

const Navbar = ({ navItems }: { navItems: NavItemTypes[] }) => {
  const activepath = useActivePath();

  return (
    <nav className="hidden md:block px-10 md:p-0 py-8">
      <ul className="flex gap-4 flex-col md:flex-row">
        {navItems.map((navItem, index) => (
          <li
            key={index}
            className={`${
              activepath(navItem.href) ? "text-custom-emerald" : "text-white"
            } hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300`}
          >
            {navItem.children.length > 0 ? (
              <NavDropDownMenu item={navItem} />
            ) : (
              <Link href={navItem.href}>{navItem.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
