// import { useContext } from "react";
// import { CgArrowTopRight } from "react-icons/cg";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

// const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext);

//     return (
//         <nav className="bg-background backdrop-blur-md bg-opacity-60 sticky top-0 z-50">
//             <div className="navbar max-w-screen-xl mx-auto py-4 px-0">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div
//                             tabIndex={0}
//                             role="button"
//                             className="btn btn-ghost lg:hidden"
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16"
//                                 />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//                         >
//                             <NavLink
//                                 to="/"
//                                 className={({ isActive }) =>
//                                     `tab ${isActive ? "text-Orange" : ""}`
//                                 }
//                             >
//                                 Home
//                             </NavLink>
//                             <NavLink
//                                 to="/donation-campaigns"
//                                 className={({ isActive }) =>
//                                     `tab ${isActive ? "text-Orange" : ""}`
//                                 }
//                             >
//                                 Donation Campaigns
//                             </NavLink>
//                             <NavLink
//                                 to="/how-to-help"
//                                 className={({ isActive }) =>
//                                     `tab ${isActive ? "text-Orange" : ""}`
//                                 }
//                             >
//                                 How to Help
//                             </NavLink>
//                             <NavLink
//                                 to="/dashboard"
//                                 className={({ isActive }) =>
//                                     `tab ${isActive ? "text-Orange" : ""}`
//                                 }
//                             >
//                                 Dashboard
//                             </NavLink>
//                         </ul>
//                     </div>

//                     <NavLink to="/" className="text-2xl font-bold gap-0">
//                         <span className="text-primary">Demo</span>
//                         <span className="text-Orange">Aid</span>
//                     </NavLink>
//                 </div>

//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1 font-medium">
//                         <NavLink
//                             to="/"
//                             className={({ isActive }) =>
//                                 `tab ${isActive ? "text-Orange" : ""}`
//                             }
//                         >
//                             Home
//                         </NavLink>
//                         <NavLink
//                             to="/donation-campaigns"
//                             className={({ isActive }) =>
//                                 `tab ${isActive ? "text-Orange" : ""}`
//                             }
//                         >
//                             Donation Campaigns
//                         </NavLink>
//                         <NavLink
//                             to="/how-to-help"
//                             className={({ isActive }) =>
//                                 `tab ${isActive ? "text-Orange" : ""}`
//                             }
//                         >
//                             How to Help
//                         </NavLink>
//                         <NavLink
//                             to="/dashboard"
//                             className={({ isActive }) =>
//                                 `tab ${isActive ? "text-Orange" : ""}`
//                             }
//                         >
//                             Dashboard
//                         </NavLink>
//                     </ul>
//                 </div>

//                 <div className="navbar-end flex items-center gap-4">
//                     <div>
//                         {user && user?.email ? (
//                             <div className="flex flex-col items-center">
//                                 <img
//                                     src={
//                                         user?.photoURL ||
//                                         "https://i.ibb.co.com/P1n2z8D/profile-icon-design-free-vector.jpg"
//                                     }
//                                     alt="user"
//                                     className="w-10 h-10 rounded-full"
//                                 />
//                                 <p className="text-sm text-center">
//                                     {user?.displayName}
//                                 </p>
//                             </div>
//                         ) : (
//                             ""
//                         )}
//                     </div>

//                     {/* <div>
//                         {user && user?.email ? (
//                             <Link
//                                 onClick={logOut}
//                                 className="btn bg-accent text-white px-6 py-2 rounded-full border-none hover:bg-primary gap-0"
//                             >
//                                 Logout <CgArrowTopRight size={20} />
//                             </Link>
//                         ) : (
//                             <Link
//                                 to="/auth/signin"
//                                 className="btn bg-accent text-white px-6 py-2 rounded-full border-none hover:bg-primary gap-0"
//                             >
//                                 Login <CgArrowTopRight size={20} />
//                             </Link>
//                         )}
//                     </div> */}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import { AiFillHome } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";

const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {/* TOP NAVBAR (DESKTOP ONLY) */}
            <nav className="bg-background backdrop-blur-md bg-opacity-60 sticky top-0 z-[9999] hidden lg:block">
                <div className="navbar max-w-screen-xl mx-auto py-4 px-2">
                    <div className="navbar-start">
                        <NavLink to="/" className="text-2xl font-bold">
                            <span className="text-primary">Demo</span>
                            <span className="text-Orange">Aid</span>
                        </NavLink>
                    </div>

                    <div className="navbar-center">
                        <ul className="menu menu-horizontal px-1 font-medium gap-6">
                            <NavLink to="/" className="tab">Home</NavLink>
                            <NavLink to="/donation-campaigns" className="tab">
                                Campaigns
                            </NavLink>
                            <NavLink to="/how-to-help" className="tab">
                                Help
                            </NavLink>
                            <NavLink to="/dashboard" className="tab">
                                Dashboard
                            </NavLink>
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {user && (
                            <img
                                src={user?.photoURL}
                                className="w-10 h-10 rounded-full"
                            />
                        )}
                    </div>
                </div>
            </nav>

            {/* MOBILE BOTTOM NAVIGATION */}
{/* <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg flex justify-around items-center py-2 md:hidden z-[9999]">                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${
                            isActive ? "text-Orange" : "text-gray-500"
                        }`
                    }
                >
                    <AiFillHome size={24} />
                    Home
                </NavLink>

                <NavLink
                    to="/donation-campaigns"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${
                            isActive ? "text-Orange" : "text-gray-500"
                        }`
                    }
                >
                    <FaHandHoldingHeart size={24} />
                    Campaigns
                </NavLink>

                <NavLink
                    to="/how-to-help"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${
                            isActive ? "text-Orange" : "text-gray-500"
                        }`
                    }
                >
                    <MdVolunteerActivism size={24} />
                    Help
                </NavLink>

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${
                            isActive ? "text-Orange" : "text-gray-500"
                        }`
                    }
                >
                    <RiDashboardFill size={24} />
                    Dashboard
                </NavLink>

            </div> */}



            <div className="fixed bottom-6 left-0 w-full bg-orange-200/20 backdrop-blur-sm border-t shadow-lg flex justify-around items-center py-3 pb-6 md:hidden z-[9999]">

  <NavLink to="/" className="flex flex-col items-center text-xs">
    <AiFillHome size={22}/>
    Home
  </NavLink>

  <NavLink to="/donation-campaigns" className="flex flex-col items-center text-xs">
    <FaHandHoldingHeart size={22}/>
    Campaigns
  </NavLink>

  <NavLink to="/how-to-help" className="flex flex-col items-center text-xs">
    <MdVolunteerActivism size={22}/>
    Help
  </NavLink>

  <NavLink to="/dashboard" className="flex flex-col items-center text-xs">
    <RiDashboardFill size={22}/>
    Dashboard
  </NavLink>

</div>
        </>
    );
};

export default Navbar;