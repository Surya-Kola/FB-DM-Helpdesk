import React from "react";

const DeletePage = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="bg-white py-10 px-10 rounded-xl ">
        <h2 className="mt-1 mb-3 pb-3 px-16 text-2xl text-center">
          Facebook Page Integration
        </h2>
        <h2 className="mt-1 mb-3 pb-3 px-16 text-2xl text-center">
          Integrated Page: Amazon Business
        </h2>
        <button
            className="text-white rounded-md w-full p-2 text-xl bg-[#df543c]"
            type="submit"
          >
            Delete Integration
          </button>
        <button
            className="text-white rounded-md w-full p-2 text-xl bg-[#1e4d91]"
            type="submit"
          >
            Reply Messages
          </button>
      </div>
    </div>
  );
};

export default DeletePage;
