import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";
import axios from "axios";
import chart from "../assets/chart.png";
import placeholder from "../assets/placeholder.jpg";
const Detail = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/patients/fetchOne/${props.location.state._id}`
      )
      .then((res) => {
        setData(res.data);
      });
  }, [props.location.state._id]);

  const history = useHistory();
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar page={props.location.pathname} />
      <div className="w-11/12 md:w-1/2 bg-purple rounded-2xl mt-20 mb-4 shadow-md px-8 py-4 flex flex-col items-center">
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
              {data ? data.patientName : null}
            </span>
          </h2>
        </div>
        <div className="flex flex-row space-x-8">
          <h2 className="text-2xl text-gray-700">
            Age:{" "}
            <span className="text-gray-500"> {data ? data.age : null}</span>
          </h2>
          <h2 className="text-2xl text-gray-700">
            Result:{" "}
            <span className="text-gray-500"> {data ? data.result : null}</span>
          </h2>
        </div>
        <h2 className="text-2xl text-gray-700">
          Email:{" "}
          <span className="text-gray-500"> {data ? data.email : null}</span>
        </h2>

        <img
          src={
            data && data.photo
              ? `data:image/png;base64,${btoa(
                  String.fromCharCode(...new Uint8Array(data.photo.data))
                )}`
              : null
          }
          alt="Uploaded"
          className="mt-8 w-96"
        />
        <img
          src={chart}
          alt="Chart"
          className={
            "mt-8  w-96 " + (data && data.photo ? "visible" : "hidden")
          }
        />
      </div>
    </div>
  );
};

export default Detail;
