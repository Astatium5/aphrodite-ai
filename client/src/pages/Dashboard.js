import { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { PlusIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";

const handleDeletion = async (_id) => {
  const data = await axios.delete(
    `http://localhost:5000/patients/delete/${_id}`
  );

  console.log(data);
};

const Dashboard = (props) => {
  const [records, setRecords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedId, setClickedId] = useState("");

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
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog
          open={isOpen}
          static
          onClose={() => setIsOpen(false)}
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0" />

            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Are you sure you want to delete this record?
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Deleting this record is irreversible!
                </p>
              </div>

              <div className="mt-4 space-x-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={() => {
                    setIsOpen(false);
                    handleDeletion(clickedId);
                    setRecords(records.filter((rec) => rec._id !== clickedId));
                  }}
                >
                  Yes, Delete
                </button>

                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  No, Keep
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="my-20 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex flex-row w-full px-4 mb-1">
            <span className="flex flex-1 flex-row justify-start text-gray-700">
              <div
                className="inline-flex flex-row hover:text-gray-400 cursor-pointer"
                onClick={() => history.push("/create")}
              >
                <p>Add New</p>
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
                            <div className="text-sm font-medium text-gray-700">
                              {record.patientName}
                            </div>
                            <div className="text-sm text-gray-700">
                              {record.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-700">
                          {record.age}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-700">
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
                          onClick={() => {
                            setIsOpen(true);
                            setClickedId(record._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="w-full">
                    <td></td>
                    <td className="text-sm text-gray-700">No Records Found</td>
                    <td></td>
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
