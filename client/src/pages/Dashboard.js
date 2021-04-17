import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { PlusIcon, ChevronDownIcon } from "@heroicons/react/outline";

const Dashboard = (props) => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    const lc = JSON.parse(localStorage.token);
    axios
      .get(`http://localhost:5000/patients/fetchAll/${lc._id}`)
      .then((res) => setRecords(res.data.reverse()))
      .catch((e) => console.log(e));
  }, []);
  const history = useHistory();
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar page={props.location.pathname} />
      <div className="my-20 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex flex-row w-full px-4 mb-1">
            <span className="flex flex-1 flex-row justify-start text-gray-700">
              <div className="inline-flex flex-row hover:text-gray-400 cursor-pointer">
                <p onClick={() => history.push("/create")}>Add New</p>
                <PlusIcon className="w-4" />
              </div>
            </span>
            <span className="flex flex-1 flex-row justify-end text-gray-700">
              <div className="inline-flex flex-row hover:text-gray-400 cursor-pointer">
                <p>Result</p>
                <ChevronDownIcon className="w-4" />
              </div>
            </span>
          </div>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date Created
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View</span>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {records.length > 0 ? (
                  records.map((record) => (
                    <tr key={record._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {record.patientName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {record.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {record.age}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {record.dateUploaded.split("T")[0]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => history.push("/detail", record)}
                        >
                          View
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="w-full">
                    <td></td>
                    <td></td>
                    <td className="text-sm text-gray-500">No Records Found</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
