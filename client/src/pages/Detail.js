import Navbar from "../components/Navbar";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";
const Detail = (props) => {
  const history = useHistory();
  console.log(props.location.state);
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar page={props.location.pathname} />
      <div className="w-11/12 md:w-1/2 bg-red-100 rounded-2xl mt-20 mb-4 shadow-md px-8 py-4 flex flex-col items-center">
        <div className="flex flex-row  justify-center w-full">
          <ChevronLeftIcon
            className="w-8 cursor-pointer hover:text-gray-500 text-gray-700"
            onClick={() =>
              history.push("/dashboard", {
                _id: props.location.state.creatorId,
              })
            }
          />
          <h2 className="text-2xl text-gray-700 flex-1 flex justify-center">
            Patient Name:{" "}
            <span className="text-gray-500">
              {props.location.state.patientName}
            </span>
          </h2>
        </div>
        <h2 className="text-2xl text-gray-700">
          Age: <span className="text-gray-500">{props.location.state.age}</span>
        </h2>
        <h2 className="text-2xl text-gray-700">
          Email:{" "}
          <span className="text-gray-500">{props.location.state.email}</span>
        </h2>

        <img
          src="https://picsum.photos/300/200"
          alt="Uploaded"
          className="mt-8"
        />
      </div>
    </div>
  );
};

export default Detail;
