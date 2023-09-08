import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import axios from "axios";

function ConnectFB() {
  const navigate = useNavigate();
  const [conversationList, setConversationList] = useState([]);

  const responseFacebook = async (response) => {
    console.log(response.data);
    let pageID;
    let pageAccessToken;
  };
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="bg-white py-10 px-10 rounded-xl ">
        <h2 className="mt-1 mb-3 pb-3 px-16 text-2xl text-center">
          Facebook Page Integration
        </h2>
        <LoginSocialFacebook
          appId="284632494276916"
          onResolve={(response) => {
            console.log(response);
            responseFacebook(response);
            navigate('/agent',{ state: response.data.accessToken });
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>
    </div>
  );
}

export default ConnectFB;

