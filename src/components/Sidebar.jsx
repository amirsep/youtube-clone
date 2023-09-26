import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // early  return pattern
  if (!isMenuOpen) return null;

  return (
    <>
      <div className="p-5 shadow-md col-span-1">
        <ul className="pb-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
        <hr />

        <ul className="pt-5 pb-5">
          <li>Library</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch later</li>
          <li>Liked Videos</li>
        </ul>

        <hr />
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul className="pb-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <hr />

        <h1 className="font-bold pt-5">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Learning</li>
          <li>Fashion & Beauty</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
