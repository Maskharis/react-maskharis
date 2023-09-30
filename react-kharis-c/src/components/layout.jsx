import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full overflow-auto flex flex-col">
      <nav className="w-full h-16 flex items-center justify-between p-3">
        <Link to="/" className="hover:text-sky-500 text-lg md:text-2xl lg:text-3xl font-bold" href="#">
          Simple Header
        </Link>
        <ul className="hidden md:flex gap-4">
          <li className="nav-item button-sky-500">
            <a className="text-white rounded-lg p-2 bg-indigo-700 hover:text-sky-500" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="text-black hover:text-sky-500" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="text-black hover:text-sky-500" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="text-black hover:text-sky-500" href="#">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a className="text-black hover:text-sky-500" href="#">
              About
            </a>
          </li>
        </ul>
      </nav>
      <></>
      <div className="w-full h-full flex flex-col">{children}</div>
    </div>
  );
}
