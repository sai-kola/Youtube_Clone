import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { Link} from "react-router-dom";

const WatchPage = () => {
  // const params=useParams();
  // console.log("par",params)
  const [searchParams] = useSearchParams();
  console.log("par", searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
     <Link to="/"><button className="border border-black p-2 m-2 w-30 rounded-lg bg-purple-400 cursor-pointer">Home</button></Link> 
    <div className="px-5 flex ">
      <div>
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <div className="w-full">
        <LiveChat/>
      </div>
    </div>
    <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
