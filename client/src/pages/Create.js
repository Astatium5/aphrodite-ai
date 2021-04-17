import Navbar from "../components/Navbar";

const Create = (props) => {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar page={props.location.pathname} />
      <div className="w-1/2 bg-red-100 rounded-2xl mt-20 mb-4 shadow-md px-8 py-4 flex flex-col items-center">
        <div className="mb-4 w-full flex flex-col items-center mt-4">
          <label
            className="w-1/2 text-gray-700 text-sm font-bold mb-2 text-left"
            htmlFor="Patient name"
          >
            Patient Name
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Patient Name"
          />
        </div>
        <div className="mb-4 w-full flex flex-col items-center mt-4">
          <label
            className="w-1/2 text-gray-700 text-sm font-bold mb-2 text-left"
            htmlFor="Patient name"
          >
            Age
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="text"
            placeholder="Age"
          />
        </div>
        <div className="mb-4 w-full flex flex-col items-center mt-4">
          <label
            className="w-1/2 text-gray-700 text-sm font-bold mb-2 text-left"
            htmlFor="Patient name"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <button className="bg-button px-6 py-2 rounded-lg text-gray-100 w-1/2 mt-4">
          Create New Record
        </button>
      </div>
    </div>
  );
};

export default Create;
