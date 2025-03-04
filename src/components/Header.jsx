import Logo from "../assets/sawako.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // <div className="flex justify-between py-3 px-10 items-center">
    //     <div className='flex items-center gap-4'>
    //         <img src={Logo} className="size-11 rounded-full"
    //         />
    //         <h1 className='font-semibold text-xl'> Portfolio </h1>
    //     </div>
    //     <ul className="flex gap-6 font-semibold text-xl pr-4">
    //         <li>
    //             <Link to='/'>Home</Link>
    //         </li>
    //         <li>
    //             <Link to='/about'>About</Link>
    //         </li>
    //     </ul>

    // </div>

    <div className="navbar bg-primary lg:px-6 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-black hover:bg-green-800 lg:hidden">
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
            className="menu menu-sm dropdown-content bg-green-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-x-1">
          <img src={Logo} className="hidden lg:block lg:size-11 lg:rounded-full lg:ml-2" />
          <Link to='/' className="btn btn-ghost hover:bg-green-800 text-xl text-black font-semibold">
            Portfolio
          </Link>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="text-black font-semibold text-xl menu menu-horizontal px-1">
          <li className="hover:bg-green-800">
          <Link to='/'>Home</Link>
          </li>
          <li className="hover:bg-green-800">
          <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
