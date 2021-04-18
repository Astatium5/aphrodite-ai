import { Fragment, useEffect, useState } from "react";
import logo from "../assets/navbar_logo.png";
import { Link, useHistory } from "react-router-dom";
import { UserCircleIcon, LogoutIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";

const handleLogout = (history) => {
  history.replace("/");
  localStorage.removeItem("token");
};

const Navbar = ({ page }) => {
  const [lc, setLC] = useState({});
  useEffect(() => {
    if (localStorage.token === undefined) setLC(null);
    else setLC(JSON.parse(localStorage.token));
  }, []);
  const history = useHistory();
  return (
    <div className="w-full h-16 bg-purple flex items-center shadow-lg">
      <Link to={lc === undefined || lc === null ? "/" : "/dashboard"}>
        <img src={logo} alt="Aphrodite.ai" className="ml-4 w-16 pb-2" />
      </Link>

      <div className="flex-1 flex justify-end space-x-8 mr-8">
        {page === "/dashboard" || page === "/create" || page === "/detail" ? (
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="inline-flex justify-center w-full px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <UserCircleIcon
                      className="w-10 text-gray-800 hover:text-gray-600"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "text-gray-600" : "text-gray-800"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            onClick={() => handleLogout(history)}
                          >
                            <LogoutIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        ) : (
          <>
            <Link className="text-gray-700 px-4 py-1" to="/signin">
              Sign in
            </Link>
            <Link
              className="bg-button px-4 py-1 rounded-xl text-gray-100"
              to="/signup"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
