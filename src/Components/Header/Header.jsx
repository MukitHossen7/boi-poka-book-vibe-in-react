import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="w-11/12 mx-auto pt-6">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/listBooks">Listed Books</NavLink>
              <NavLink to="/pagesRead">Pages to Read</NavLink>
            </ul>
          </div>
          <h3 className="font-bold text-3xl">Book Vibe</h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex items-start gap-10 text-xl text-slate-500 px-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/listBooks">Listed Books</NavLink>
            <NavLink to="/pagesRead">Pages to Read</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <button className="font-medium text-xl text-white bg-[#23BE0A] px-6 py-2 rounded-lg">
            Sign In
          </button>
          <button className="font-medium text-xl text-white bg-[#59C6D2]  px-6 py-2 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
