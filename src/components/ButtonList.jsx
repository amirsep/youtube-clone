import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Trailers",
    "Gaming",
    "Movies",
    "News",
    "Javascript",
    "React",
    "Java",
    "Live",
    "Cricket",
    "Cooking",
    "Python",
    "Songs",
  ];
  return (
    <>
      <div className="flex">
        {list.map((name, index) => (
          <Button name={name} key={index} />
        ))}
      </div>
    </>
  );
};

export default ButtonList;
