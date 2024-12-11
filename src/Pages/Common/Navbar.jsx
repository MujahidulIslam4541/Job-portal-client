import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import logoSmall from '../../assets/favicon.png'

const Navbar = () => {
  const { user ,signOutUser} = useContext(AuthContext);

  const handleSignOut=()=>{
    signOutUser()
    .then(()=>{
      Swal.fire({
        title: "Good job!",
        text: "User SignOut Successful",
        icon: "success",
      });
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
  const Links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>

      
    </>
  );
  return (
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-10" src={logoSmall} alt="" />
          <h2 className="text-3xl">Job Portal</h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        {user && user.email ? (
          <button onClick={handleSignOut} className="btn text-white font-semibold bg-blue-500 hover:bg-blue-400 transition ease-in-out duration-150">Sign Out</button>
        ) : (
          <div className="flex gap-2 items-center">
            <Link className=" text-blue-500 underline" to="register">Register</Link>
            <Link className="btn bg-blue-500 text-white font-semibold hover:bg-blue-400 transition ease-in-out duration-150" to="signIn">SignIn</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
