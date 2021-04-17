import logo from "../assets/navbar_logo.png";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-rose flex items-center shadow-lg">
      <img src={logo} alt="Aphrodite.ai" className="ml-4 w-16" />

      <div className="flex-1 flex justify-end space-x-8 mr-8">
        <button className=" text-gray-700">Sign in</button>
        <button className="bg-button px-4 py-1 rounded-xl text-gray-100">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
