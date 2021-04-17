import Navbar from "../components/Navbar";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar />
      <div className="w-1/2 bg-red-100 rounded-2xl mt-20 mb-4 shadow-md px-8 py-4 flex flex-col items-center">
        <div className="mb-4 w-full flex flex-col items-center">
          <label
            className="w-1/2 text-gray-700 text-sm font-bold mb-2 text-left"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4 w-full flex flex-col items-center">
          <label
            className="w-1/2 text-gray-700 text-sm font-bold mb-2"
            htmlFor="Password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-row space-x-8">
          <button className="bg-button px-6 py-2 rounded-lg text-gray-100">
            Sign In
          </button>
          <p className="px-4 py-1">
            Don't have an account?{" "}
            <button className=" text-blue-500">Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
