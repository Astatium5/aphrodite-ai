import logo from "../assets/navbar_logo.png";
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/outline";

const Navbar = ({ page }) => {
  return (
    <div className="w-full h-16 bg-rose flex items-center shadow-lg">
      <Link to="/">
        <img src={logo} alt="Aphrodite.ai" className="ml-4 w-16 pb-2" />
      </Link>

      <div className="flex-1 flex justify-end space-x-8 mr-8">
        {page === "/dashboard" || page === "/create" || page === "/detail" ? (
          <UserCircleIcon className="w-10 text-gray-800 cursor-pointer hover:text-gray-600" />
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
