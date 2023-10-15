import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../redux/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  // api call
  const getSearchSuggestions = async () => {
    const { data } = await axios.get(YOUTUBE_SEARCH_API + searchQuery);
    setSuggestions(data[1]);
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };
  useEffect(() => {
    // debouncing
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    // clear timer
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="grid grid-flow-col p-4 shadow-lg">
        <div className="flex col-span-1">
          <img
            onClick={toggleMenuHandler}
            className="h-8 cursor-pointer"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            alt="menu"
          />

          <img
            className="h-8 mx-1"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
            alt="youtube-logo"
          />
        </div>

        <div className="col-span-2"></div>

        <div className="col-span-8">
          <div>
            <input
              className="w-1/2 border border-gray-500 rounded-l-full p-2"
              placeholder="Search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className="border border-gray-500 rounded-r-full px-5 py-2 bg-gray-100">
              🔍
            </button>
          </div>
          {showSuggestions && (
            <div className=" fixed bg-white py-2 px-2 w-[31%] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col-span-1  flex ">
          <img
            className="h-8 content-end"
            src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
            alt="user-icon"
          />
        </div>
      </div>
    </>
  );
};

export default Head;
