import React from "react";

const Modal = (props) => {
  const { content } = props;
  return (
    <>
      {/* Main modal */}
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-6xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Product Detail</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4 lg:flex gap-8 lg:items-center">
              <div className="w-full md:w-1/3">
                <img src={content.image} alt="img-detail" className="w-full" />
              </div>
              <div className="w-full md:w-2/3">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-300">
                    <tr className="border-b border-gray-500">
                      <th className="px-6 py-4 text-left">information</th>
                      <th className="px-6 py-4 text-left">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-500">
                      <td className="px-6 py-4">ID</td>
                      <td className="px-6 py-4">{content.id}</td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="px-6 py-4">Name</td>
                      <td className="px-6 py-4">{content.name}</td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="px-6 py-4">Price</td>
                      <td className="px-6 py-4">{content.price}</td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="px-6 py-4">Description</td>
                      <td className="px-6 py-4">{content.description}</td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="px-6 py-4">Quantity</td>
                      <td className="px-6 py-4">{content.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="static-modal"
                type="button"
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-auto"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
