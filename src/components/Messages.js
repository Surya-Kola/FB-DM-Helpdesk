import React, { useEffect, useState } from "react";
import Pro from "../assets/pro.png";
import axios from "axios";

const Messages = (props) => {
  const conversationId = props.conversationId;

  const userAccessToken = props.userAccessToken;
  // console.log(conversationId,"conversation Id");
  const [messages_data, setMessages_data] = useState([]);
  useEffect(() => {
    const getMessagesList = async () => {
      // console.log("called controller");

      console.log(userAccessToken);
      let pageID = "";
      let pageAccessToken;

      try {
        const response = await axios.get(
          "https://graph.facebook.com/v11.0/me/accounts?access_token=" +
            userAccessToken
        );

        // console.log(res);
        // console.log(res.data.data[0].id);
        // console.log(
        //   "this is from the controller ",
        //   response.data.data[0].access_token
        // );
        pageID = response.data.data[0].id;
        pageAccessToken = response.data.data[0].access_token;

        // console.log(pageID,pageAccessToken);

        const { data } = await axios.get(
          `https://graph.facebook.com/v17.0/${conversationId}?fields=messages{from,to,message,created_time,id}&access_token=${pageAccessToken}`
        );
        // console.log(data);
        setMessages_data(data.messages.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessagesList();
  }, [conversationId]);

  // Sort messages by 'created_time'
  function formatDate(inputDate) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const date = new Date(inputDate);

    return date.toLocaleDateString("en-US", options);
  }
  messages_data?.sort((a, b) => {
    return new Date(a.created_time) - new Date(b.created_time);
  });

  return messages_data?.map((chat, i) => {
    const isFromHelpdesk = chat.from.name === "FB DM Helpdesk";

    return (
      <div
        key={i}
        className={`flex ${
          isFromHelpdesk ? "flex-row-reverse" : "flex-col"
        } items-start my-4 overflow-hidden`}
      >
        <div>
          {isFromHelpdesk ? (
            <div className="flex">
              <div
                className={`${
                  isFromHelpdesk
                    ? "bg-white ml-2 px-2 py-1 rounded-md"
                    : "bg-white mr-2 px-2 py-1 rounded-md"
                }`}
              >
                {chat.message}
              </div>
              <img className="w-10 h-10 mr-2 rounded-full" src={Pro} alt="" />
            </div>
          ) : (
            <div className="flex">
              <img className="w-10 h-10 mr-2 rounded-full" src={Pro} alt="" />

              <div
                className={`${
                  isFromHelpdesk
                    ? "bg-white ml-2 px-2 py-1 rounded-md"
                    : "bg-white mr-2 px-2 py-1 rounded-md"
                }`}
              >
                {chat.message}
              </div>
            </div>
          )}

          <span
            className={`text-[12px] font-semibold ${
              isFromHelpdesk ? "" : "ml-10"
            }`}
          >
            {formatDate(chat.created_time)}
          </span>
        </div>
      </div>
    );
  });
};

export default Messages;
