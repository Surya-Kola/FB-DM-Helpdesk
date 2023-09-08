import React, { useState } from "react";
import Pro from "../assets/pro.png";
import data from "../data/messages.json"

const Messages = (props) => {
  const messages_data = data.messages.data;
  console.log(messages_data);
  const [messages, setMesseges] = useState(messages_data);

  function formatDate(inputDate) {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    const date = new Date(inputDate);

    return date.toLocaleDateString('en-US', options);
  }
  return messages.map((chat, i) => {
    return chat.from.name !== "FB DM Helpdesk" ? (
      <div className="flex flex-col">
        <div className="flex">
          <img className="w-10 my-2" src={Pro} alt="" />
          <div className="bg-white my-2 mr-2 px-2 py-1 rounded-md ">
            {chat.message}
          </div>
        </div>
        <p className="text-[12px] font-semibold ml-12">{formatDate(chat.created_time)}</p>
      </div>
    ) : (
      <div className="flex flex-row-reverse">
        <div className="flex flex-col">
          <div className="flex">
            <div className="bg-white my-2 mr-2 px-2 py-1 rounded-md ">
              {chat.message}
            </div>
            <img className="w-10 my-2" src={Pro} alt="" />
          </div>
          <span className="text-[12px] font-semibold ">{formatDate(chat.created_time)}</span>
        </div>
      </div>
    );
  });
};

export default Messages;


// const Messages = (props) => {
//   //me/conversations we get the list of conversations which will be having the list of msgids which should be given to the me/messages.
//   let msgidarray = [];
//   const listMsgs = async () => {
//     const listofmsgids = await axios
//       .get(
//         "https://graph.facebook.com/v11.0/" +
//           conversationid +
//           "?fields=messages&access_token=" +
//           pageAccessToken
//       )
//       .then((res) => {
//         console.log(res);
//         console.log(res.data.messages.data[0].id);
//         console.log(res.data.messages.data);
//         msgidarray = res.data.messages.data;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
  
//   const msgdetails = await axios
//     .get(
//       "https://graph.facebook.com/v11.0/" +
//         msgidarray[0].id +
//         "?fields=id,to,from,message&access_token=" +
//         p
//     )
//     .then((res) => {
//       console.log(res);
//       console.log(res.data.message);
//     })
//     .catch((err) => {
//       console.log(err);
//       });

// return messages.map((chat, i) => {
//   return chat.from.name !== "FB DM Helpdesk" ? (
//     <div className="flex flex-col">
//       <div className="flex">
//         <img className="w-10 my-2" src={Profile} alt="" />
//         <div className="bg-white my-2 mr-2 px-2 py-1 rounded-md ">
//           {chat.message}
//         </div>
//       </div>
//       <p className="text-[12px] font-semibold ml-12">{formatDate(chat.created_time)}</p>
//     </div>
//   ) : (
//     <div className="flex flex-row-reverse">
//       <div className="flex flex-col">
//         <div className="flex">
//           <div className="bg-white my-2 mr-2 px-2 py-1 rounded-md ">
//             {chat.message}
//           </div>
//           <img className="w-10 my-2" src={Profile} alt="" />
//         </div>
//         <span className="text-[12px] font-semibold ">{formatDate(chat.created_time)}</span>
//       </div>
//     </div>
//   );
// });
// };

// export default Messages;
