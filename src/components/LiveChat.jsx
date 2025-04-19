import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../Utils/Helper";

const LiveChat = () => {
    const [liveMessage,setLiveMessage]=useState("")
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
    //   console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Hello " + makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className=" w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {" "}
          {ChatMessages.map((c, index) => (
            <ChatMessage key={c.index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Sai",
            message:liveMessage
        }))
        setLiveMessage("")
      }}>
        <input type="text" className="w-94 px-2" value={liveMessage} onChange={(e)=>{
            setLiveMessage(e.target.value)
        }}/>
        <button className="px-2 mx-2 bg-green-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
