import { Link } from "react-router-dom";

const Navbar = () => {
  const Nav = (
    <>
      <Link
        to="/"
        className={`px-3 hover:bg-white hover:text-black rounded hover:duration-1000 ${
          location.pathname === "/"
            ? "active-link bg-white bg-opacity-80 text-black"
            : ""
        }`}
      >
        All Products
      </Link>
    </>
  );

  return (
    <div>
      <div className="navbar bg-opacity-90 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Nav}
            </ul>
          </div>
          <Link to={"/"}>
            <h1 className="text-4xl">Salemartia</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">{Nav}</div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
