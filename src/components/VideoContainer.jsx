import axios from "axios";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  console.log(videos);

  const getVideos = async () => {
    const { data } = await axios.get(YOUTUBE_VIDEO_API);
    // console.log(data.items);
    setVideos(data.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <>
      <div>
        <VideoCard info={videos[0]} />
      </div>
    </>
  );
};

export default VideoContainer;
