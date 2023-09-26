const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <>
      <div className="p-2 m-2 w-64 shadow-lg">
        <img
          className="rounded-xl"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
        <ul>
          <li className="font-bold">{title}</li>
          <li>{channelTitle}</li>
          <li>{viewCount} views</li>
        </ul>
      </div>
    </>
  );
};

// high order component
export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-600">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
