import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useHistory } from "react-router-dom";
import { LoginIcon } from "@heroicons/react/outline";
import axios from "axios";

const handleSignIn = async (history, email, password) => {
  try {
    const res = await axios.post("http://localhost:5000/users/login", {
      email,
      password,
    });
    console.log(res.data);
    localStorage.setItem("token", JSON.stringify(res.data));
    history.push("/dashboard");
  } catch (e) {
    console.log(e);
  }
};

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar />
      <div className="w-1/2 bg-red-100 rounded-2xl mt-20 mb-4 shadow-md px-8 py-4 flex flex-col items-center">
        <LoginIcon className="w-20" />
        <div className="mb-4 w-full flex flex-col items-center mt-4">
          <label
            className="w-1/2 text-gray-700 text-sm font-bold mb-2 text-left"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-row space-x-8 mt-4">
          <button
            className="bg-button px-6 py-2 rounded-lg text-gray-100"
            onClick={() => handleSignIn(history, email, password)}
          >
            Sign In
          </button>
          <p className="px-6 py-2">
            Don't have an account?{" "}
            <Link to="/signup" className=" text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
