import { SvgMenuIcon } from "../assets/SvgIcon";

export function Navbar() {
  return (
    <nav className="navbar container mx-auto lg:pt-7 lg:pb-5 pb-3 pt-3 pr-5 lg:pl-0 ">
      <div className=" mr-6 lg:mr-0 ">
        <div className="drawer drawer-end lg:flex-1 ">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-ghost lg:hidden m-1"
            >
              <SvgMenuIcon />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-56 p-4">
              {/* Sidebar content here */}
              <li>
                <a className="font-bold text-slate-900 ">Home</a>
              </li>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <button className="btn bg-[#54BD95] hover:bg-[#3d9271]  lg:px-7   text-white">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
        <a className="text-4xl text-[#54BD95]  hover:text-[#3d9271] ease-in-out font-bold cursor-pointer ml-5 lg:flex-1">
          Biccas
        </a>
      </div>

      <div className="navbar-end space-x-44 lg:flex-1">
        <ul className="menu menu-horizontal text-gray-500 hidden lg:flex px-1 text-lg font-medium">
          <li>
            <a className="font-bold text-slate-900 ">Home</a>
          </li>

          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
        <div className="lg:space-x-4 flex items-center pr-6 lg:pr-0">
          <button className="btn bg-transparent border-0 shadow-none hover:bg-transparent hidden lg:flex">
            Login
          </button>
          <button className="btn bg-[#54BD95]  hover:bg-[#3d9271]  text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
