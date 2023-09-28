import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = ({ data }) => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <div className="px-10">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <CommentsContainer />
      </div>
    </>
  );
};

export default WatchPage;
