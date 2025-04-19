import React from "react";
import Button from "./Button";
const list=["All","Live","Gaming","Cricket","Songs","Socer","Cooking","News","Politics","Viral","Breaking"]

const ButtonList = () => {
  return (
    <div className="flex">
     {list.map((name)=><Button  key={name}name={name}/>)}
    </div>
  );
};

export default ButtonList;
