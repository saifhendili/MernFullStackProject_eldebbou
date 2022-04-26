import axios from "axios";
import React, { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
console.log(friendId)
    const getUser = async () => {
      try {
        const res = await axios.get(`api/users/myprofile/${friendId}`);
        setUser(res.data);
console.log(res.data)

      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="//www.gravatar.com/avatar/ec7369a6cc4c90a468f9f1d39cf2aff5?s=200&r=pg&d=mm"
        alt=""
      />
      <span className="conversationName">{user?.firstname}{user?.lastname}</span>
    </div>
  );
}
