import BoxChat from "./BoxChat";
import Header from "./Header";

const MessBox = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <BoxChat />
    </div>
  );
};

export default MessBox;
