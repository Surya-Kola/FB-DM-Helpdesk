import { useLocation, useNavigate } from "react-router-dom";
import "./AgentDashboard.css";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Conv from "../assets/conversation.png";
import Analytics from "../assets/graph.png";
import Menu from "../assets/menu.png";
import Reload from "../assets/reload.png";
import Call from "../assets/call.png";
import Profile1 from "../assets/profile1.png";
import Messages from "./Messages";
import Pro from "../assets/pro.png";
import { useEffect, useState } from "react";
import axios from "axios";

const AgentDashboard = () => {
  const location = useLocation();
  const userAccessToken = location.state;
  const [conversationList, setConversationList] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const navigate = useNavigate();

  const handleDeletePage = () => {
    navigate("/delete-page",{state:userAccessToken});
  };


  const [nameH, setName] = useState("");
  const [emailP, setEmail] = useState("");
  
  useEffect(() => {
    const getConversationsList = async () => {
      console.log("called controller");
    
      console.log(userAccessToken);
      let pageID = "";
      let pageAccessToken;
    
      try {
        const response = await axios
          .get(
            "https://graph.facebook.com/v11.0/me/accounts?access_token=" +
              userAccessToken
          )
          
            // console.log(res);
            // console.log(res.data.data[0].id);
            // console.log(
            //   "this is from the controller ",
            //   response.data.data[0].access_token
            // );
            pageID = response.data.data[0].id;
            pageAccessToken = response.data.data[0].access_token;

        const { data } = await axios.get(
          `https://graph.facebook.com/v17.0/me/conversations?fields=id,participants&access_token=${pageAccessToken}`
        );
        // console.log(data.data);
         setConversationList(data.data);      
        
      } catch (error) {
        console.log(error);
      }
    }
    getConversationsList();
  }, []);
  // if (!conversationId) return <div>loading...</div>
  return (
    <div className="grid-container w-[100%] h-screen">
      <div className="item1 ">
        <div className="flex flex-col space-y-[380px] items-center">
          {/* section 1 sidebar */}
          <div className="">
            <a href="/">
              <img className=" rounded-md w-10 m-3" src={Logo} alt="1" />
            </a>
            <img className="w-16" src={Conv} alt="" />
            <img className="w-16" src={User} alt="" />
            <img className="w-16" src={Analytics} alt="" />
          </div>
          <img className="w-16" src={Pro} alt="" />
        </div>
      </div>
      <div className="item2 bg-white">
        <div className="flex justify-between">
          <div className="flex">
            <img className="w-8 m-2" src={Menu} alt="" />
            <h2 className="mr-4 my-2 text-lg font-bold">Conversations</h2>
          </div>
          <img className="w-8 m-2" src={Reload} alt="R" />
        </div>
        {/* conversation sidebar */}
        <div>
          {conversationList.map((conversation,ind) => (
            <div
            key={ind}
              className="p-2 hover:bg-[#edeef0]"
              onClick={() => {
                setConversationId(conversation.id);
                setName(conversation.participants.data[0].name);
                setEmail(conversation.participants.data[0].email);
              }}
            >
              <div className="flex justify-between">
                <div className="flex">
                  <input className="mx-2" type="checkbox" />
                  <div className="flex flex-col">
                    <h1 className="font-bold">
                      {conversation.participants.data[0].name}
                    </h1>
                    <p className="text-sm text-gray-500/50">Facebook DM</p>
                  </div>
                </div>
                <span className="mr-2">10m</span>
                {/*code to show recently received messege time */}
              </div>
              <p className="text-sm mx-2">Available in store?</p>
              <p className="text-gray-500/50 text-sm mx-2">
                Lorem ipsum dolor sit,{" "}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* chat section */}
      <div className="item3 bg-[#f6f6f6]">
        {/* heading */}
        <h1 className="text-xl font-bold bg-white px-4 py-2">
          {nameH === "" ? "Helpdesk" : nameH}
        </h1>
        {/* chat feature */}
        <Messages conversationId={conversationId} userAccessToken={userAccessToken} />
        <div className="flex justify-center items-center">
          {/* useState for the chat exchange */}
          <input
            type="text"
            className="absolute bottom-4 left-[30.5%] right-[20%] p-2 mx-2 bg-white rounded-md outline outline-blue-600"
            placeholder={`Message ${nameH}`}
          />
        </div>
      </div>
      {/* profile section */}
      <div className="item4 bg-[#eff2f7]">
        <div className="h-1/3 bg-white">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[124px]" src={Pro} alt="profile" />
            <span className="font-bold">
              {nameH === "" ? "Helpdesk" : nameH}
            </span>
            <p className="text-sm mb-2 text-gray-500/50">• Offline</p>
          </div>
          <div className="flex justify-center">
            <div className=" flex justify-center items-center rounded-md px-2 mr-2 bg-[#fefefe] border-2 border-gray-400 hover:bg-[#a0c8d7]">
              <img className="w-8 h-8" src={Call} alt="" />
              <p className="">Call</p>
            </div>
            <div className="flex justify-center items-center rounded-md px-2 ml-2 bg-[#fefefe] border-2 border-gray-400 hover:bg-[#a0c8d7]">
              <img className="w-8" src={Profile1} alt="" />
              <p>Profile</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-md m-3 p-3">
            <h1 className="font-bold">Customer Details</h1>
            <div className="flex justify-between">
              <p className="text-gray-500/50">Email</p>
              <p className="font-semibold">amitrg@gmail.com</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500/50">First Name</p>
              <p className="font-semibold">Amit</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500/50">Last Name</p>
              <p className="font-semibold">RG</p>
            </div>
            <a href="#" className="font-semibold text-blue-500">
              View more details
            </a>
          </div>
        </div>
        <div className="text-center">
          <button className="my-[20%] p-2 border-black border-2 rounded-md bg-white hover:bg-[#a0c8d7] " onClick={handleDeletePage}>Delete Page Integration</button>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
