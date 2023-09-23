import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Head = () => {
  const dispatch = useDispatch();

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
        <div className="col-span-8 text-center">
          <input
            className="w-1/2 border border-gray-500 rounded-l-full p-2 "
            placeholder="Search"
            type="text"
          />
          <button className="border border-gray-500 rounded-r-full px-5 py-2 bg-gray-100">
            🔍
          </button>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>

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
