// import { useLocation } from "react-router-dom";
// import axios from "axios";
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
import data from "../data/conversations.json";
import { useState } from "react";
import DeletePage from "./DeletePage";
// import { useEffect, useState } from "react";

const AgentDashboard = () => {
  // const location = useLocation();
  // const response = location.state;
  // const [pageId, setPageId] = useState("");
  // const [conversationId, setConversationId] = useState("");
  // const [conversation, setConversation] = useState(null);
  // const [pageAccessToken, setPageAccessToken] = useState("");
  // const [userAccessToken, setUserAccessToken] = useState("");

  // // let pageID, pageAccessToken;
  // // let meAccounts,conversations;

  // const myAcc = async () => {
  //   const meAccounts = await axios
  //     .get(
  //       "https://graph.facebook.com/v11.0/me/accounts?access_token=" +
  //         response.data.accessToken
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data.data[0].id);
  //       console.log(res.data.data[0].access_token);
  //       setPageId(res.data.data[0].id);
  //       setPageAccessToken(res.data.data[0].access_token);
  //       setUserAccessToken(response.data.accessToken);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // //me/accounts we get the list of details regarding all the pages. which will be having the page id which should be given to the me/conversations.
  // // let conversationid;
  // const convList = async () => {
  //   const conversations = await axios
  //     .get(
  //       "https://graph.facebook.com/v11.0/me/conversations?access_token="+
  //         pageAccessToken
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data.data[0].id);
  //       console.log(res.data.data)
  //       setConversationId(res.data.data[0].id);
  //       setConversation(res.data.data[0]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(()=>{
  //   myAcc();
  //   convList();
  // },[conversationId])
  // if(conversation===null) return <div> loading</div>

  const conversations = data.data;
  console.log(conversations);
  const [conversationId, setConversationId] = useState(null);
  const [nameH, setName] = useState('');
  const [emailP, setEmail] = useState('');
  return (
    <div className="grid-container w-[100%] h-screen">
      <div className="item1 ">
        <div className="flex flex-col space-y-[380px] items-center">
          {/* section 1 sidebar */}
          <div className="">
            <img className=" rounded-md w-10 m-3" src={Logo} alt="1" />
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
          {conversations.map((conversation) => (
            <div
              className="p-2 hover:bg-[#edeef0]"
              onClick={() => {setConversationId(conversation.id);
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
              <p className="text-md mx-2">Available in store?</p>
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
        <h1 className="text-xl font-bold bg-white px-4 py-2">{nameH===''? 'Helpdesk':nameH}</h1>
        {/* chat feature */}
        <Messages conversationId={conversationId} />
        <div className="flex justify-center items-center">
          {/* useState for the chat exchange */}
          <input
            type="text"
            className="absolute bottom-4 left-[30.5%] right-[23%] p-2 mx-2 bg-white rounded-md outline outline-blue-600"
            placeholder={`Message ${nameH}`}
          />
        </div>
      </div>
      {/* profile section */}
      <div className="item4 bg-[#eff2f7]">
        <div className="h-1/3 bg-white">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[124px]" src={Pro} alt="profile" />
            <span className="font-bold">{nameH===''? 'Helpdesk':nameH}</span>
            <p className="text-sm mb-2 text-gray-500/50">• Offline</p>
          </div>
          <div className="flex justify-center">
            <div className=" flex justify-center items-center rounded-md px-2 mr-2 bg-[#fefefe] border-2 border-gray-400">
              <img className="w-8 h-8" src={Call} alt="" />
              <p className="">Call</p>
            </div>
            <div className="flex justify-center items-center rounded-md px-2 ml-2 bg-[#fefefe] border-2 border-gray-400">
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
        <DeletePage />
      </div>
    </div>
  );
};

export default AgentDashboard;
