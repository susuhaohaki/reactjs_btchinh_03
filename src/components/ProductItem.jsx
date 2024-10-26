import React from "react";

const ProductItem = (props) => {
  const { item, setStateModal } = props;

  return (
    <>
      <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg w-full h-[403px]" src={item.image} alt="product image" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.shortDescription}</p>
          {/* Modal toggle */}
          <button
            data-modal-target="static-modal"
            data-modal-toggle="static-modal"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setStateModal(item)}
          >
            see details
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
