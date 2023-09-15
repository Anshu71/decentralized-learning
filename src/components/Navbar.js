import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../contexts/authContext';

const navlinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Courses',
    link: '#Courses',
  },
  {
    title: 'Contact Us',
    link: 'mailto:anshupandey133@gmail.com',
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="bg-[#101828] font-sans">
      <div className="relative group">
        <button
          className="text-[#E0EAFF] border-1 border-white py-1 px-2 focus:outline-none rounded md:mt-0 hover:bg-[#475467] hover:text-[#E0EAFF] text-lg 2xl:text-xl"
          onClick={handleLogout}
        >
          Logout
        </button>
        {user && (
          <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-white border border-[#475467] rounded-lg shadow-lg">
            <div className="px-4 py-2">
              <p className="text-gray-800">Logged in as:</p>
              <p className="font-bold">{user.email}</p>
            </div>
            <div className="px-4 py-2 border-t border-[#475467]">
              <button
                className="text-[#E0EAFF] text-sm hover:bg-[#475467] hover:text-[#E0EAFF] w-full text-left"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
      {!user && (
        <div className="ml-8 border-2 border-[#475467] rounded-lg">
          <button className="inline-flex items-center text-[#E0EAFF] border-1 border-white py-1 px-2 focus:outline-none rounded md:mt-0 hover:bg-[#475467] hover:text-[#E0EAFF] text-lg 2xl:text-xl">
            <a href="/signup">Get Started</a>
          </button>
        </div>
      )}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div>
          <a href="/">
            <img
              className="h-10"
              src="https://www.crio.do/images/crio-logo.svg"
              alt="Crio logo"
            />
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="text-[#E0EAFF] focus:outline-none"
            onClick={handleMenu}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navlinks.map((link) => (
              <li key={link.title}>
                <a
                  className="text-[#E0EAFF] hover:text-[#475467] text-lg 2xl:text-xl"
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {open && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            {navlinks.map((link) => (
              <li key={link.title}>
                <a
                  className="text-[#E0EAFF] hover:text-[#475467] text-lg 2xl:text-xl"
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
