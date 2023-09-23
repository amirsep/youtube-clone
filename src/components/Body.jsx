import MainContainer from "./MainContainer";
import Sidebar from "./sidebar";

const Body = () => {
  return (
    <>
      <div className="grid grid-flow-col">
        <Sidebar />
        <MainContainer />
      </div>
    </>
  );
};

export default Body;
