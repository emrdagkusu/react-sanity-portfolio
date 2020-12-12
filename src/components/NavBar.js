import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-green-300"
            className="inflex-flex items-center py-9 px-3 mr-4 text-white hover:text-red-200 text-4xl font-bold cursive tracking-widest"
          >
            Emir
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-red-200"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-red-200"
          >
            Project
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-red-200"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/emrdagkusu"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/emrullah-da%C4%9Fku%C5%9Fu-801b631a7/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/emrdagkusu/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
