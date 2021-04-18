import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import axios from "axios";

const handleNewRecord = async (
  history,
  patientName,
  age,
  email,
  image,
  creatorId
) => {
  const res = await axios.post("http://localhost:5000/patients/create", {
    patientName,
    age,
    email,
    image,
    creatorId,
  });
  history.push("/detail", res.data);
};

const Create = (props) => {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const imageUpRef = useRef(null);
  const history = useHistory();
  const lc = JSON.parse(localStorage.token);
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar page={props.location.pathname} />
      <div className="w-11/12 md:w-1/2 bg-red-100 rounded-2xl mt-20 mb-4 shadow-md px-8 py-4 flex flex-col items-center">
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
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>
        <div className="mb-4 w-full flex flex-col items-center mt-4">
          <label
            className="w-1/2 text-gray-700 text-sm font-bold mb-2 text-left"
            htmlFor="age"
          >
            Age
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="text"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
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
        <div className="my-4 w-full flex flex-row justify-center items-center">
          <input
            className="hidden"
            type="file"
            onChange={(e) => {
              try {
                setImage(URL.createObjectURL(e.target.files[0]));
              } catch (e) {
                console.log(e);
              }
            }}
            ref={imageUpRef}
          />
          <button
            className="bg-blue-400 px-6 py-2 rounded-lg text-gray-100 mt-4 h-10 mr-8 flex flex-wrap"
            onClick={() => imageUpRef.current.click()}
          >
            Upload Image
          </button>
          <img
            src={image}
            alt="Preview"
            className={"w-42 h-32 " + (image === null ? "hidden" : "")}
          />
        </div>
        <button
          className="bg-button px-6 py-2 rounded-lg text-gray-100 w-1/2 mt-4"
          onClick={() =>
            handleNewRecord(history, patientName, age, email, image, lc._id)
          }
        >
          Create New Record
        </button>
      </div>
    </div>
  );
};

export default Create;
