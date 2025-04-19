import React, { useEffect, useState } from "react";
import { toggleMenu } from "../Utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache=useSelector((store)=>store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log("Search",json)
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }))
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAABLS0vPz8+Wlpb39/ehoaHu7u6NjY3n5+eCgoKsrKy+vr7IyMjv7+8vLy9ycnJbW1t4eHgYGBg5OTnb29tiYmIxMTEJCQlQUFCRkZEfHx+4uLg/Pz8QEBA4ODiTPnadAAACe0lEQVR4nO3dCW7CMBCF4bQQlpawltK9979lRSOEKqqxwZZGb/J/J3ijxCF2BrtpAAAAAAAAAAAAAAAAACC+djHb3OvYzBbtVfXNt3d6tvP8AmfeYW80y71BV95Jb7bKulXbnXfOArtlRoXf3imLPKULfPDOWOghVeDeO2GxfaLCZ++AxZ7tAqfe+SqYmhU+eser4NGscO0dr4K1WaHuj/3ZwazwxTteBS9mhd7pqjArVH5jO9mZFb56x6vg1azwzTteBW9mhSPveBWMzAqbd+98xd7tApuJd8Bik0SF8hcxdQn1R2JiFB5pv3zbr90BhmJyEPYW3jlvtsgrsGmWmpOodc5C28l8rDaPWo2vWPLutfuRjv11Xy0AAAAAAAAAAICUaTcZ65h0ds/lpQ+91qH7jyvq69Q+rfVWXW6Bus3syTb23sY7Z4FNToGaX7hP7AbhX9rNJhntJvrN+ql2Bd2nzEniadN656vAblrQbRY6s9uG9G/S1G366R2vgk+zwi/veBV8mRV6p6ti4Ncw/jiM/yyN/3sY/50mwG2amgUvvQMWS7ZCh58fDmCOr/2X/Kx1GuWnTeZa2wDWS5v4a95H0b9bAAAAAAAAAAAAIcH3iYq+11f4/dp024Yy99wLv2+idrtJRrNJ/P1Lw+9BqzwIe6mhqH4JkxdRfRQe2SMx/p7seo1Cl+x99eOfjeCdrgqzwvhnlKjNmf5jnzOjOW36y24T1n7t7tkv3/p/A06d2SXd5N1LnLs2gLPzhNvYexnN7E/eGYtknGEpfg5p3lGrB++cNzvkLgxHPw+4GcCZzsdbtRM7l7vjhAsAAAAAAAAAAAAAAAAAQ/ADAnZUjrcBInYAAAAASUVORK5CYII="
          alt="Menu"
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-8 mx-3"
          alt="Youtube-logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={(e) => setShowSuggestions(true)}
          onBlur={(e) => setShowSuggestions(false)}
          className=" px-5 w-1/2 border border-gray-400 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full px-3  bg-gray-100">
          🔍
        </button>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-[34rem] border border-gray-50 shadow-lg rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="User-icon"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Header;
