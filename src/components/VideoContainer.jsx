import axios from "axios";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const { data } = await axios.get(YOUTUBE_VIDEO_API);

    setVideos(data.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <>
      <div className="flex flex-wrap">
        {/* high order component */}
        {videos[0] && <AdVideoCard info={videos[0]} />}

        {videos.map((video) => (
          <Link to={"/watch/?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
