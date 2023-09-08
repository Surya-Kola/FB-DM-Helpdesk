import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DeletePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userAccessToken = location.state;
    const handleReplyMsg = () => {
        navigate("/agent",{state:userAccessToken});
      };
      const handleDelete = () => {
        navigate("/connect-fb");

      };
  return (
  
    <div className=" flex items-center justify-center h-screen">
      <div className="bg-white py-10 px-10 rounded-xl ">
        <h2 className="mt-1 mb-3 pb-3 px-16 text-2xl text-center">
          Facebook Page Integration
        </h2>
        <div className="flex">
          <h2 className=" mt-1 mb-3 pb-3 mx-2 text-2xl ">
            Integrated Page:
          </h2>
          <h2 className="mt-1 mb-3 pb-3 text-2xl font-bold">Amazon Business</h2>
        </div>
        <button
          className="text-white rounded-md w-full p-2 my-2 text-xl bg-[#df543c]"
          onClick={handleDelete}
        >
          Delete Integration
        </button>
        <button
          className="text-white rounded-md w-full p-2 text-xl bg-[#1e4d91]"
          onClick={handleReplyMsg}
        >
          Reply Messages
        </button>
      </div>
    </div>
  );
};

export default DeletePage;
