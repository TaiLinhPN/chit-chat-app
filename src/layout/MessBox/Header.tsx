import { IoIosCall } from "react-icons/io";
import MyButton from "../../components/MyButton";
import UserIcon from "../../components/UserIcon";
import { BsPersonVideo } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

const Header = () => {
  return (
   
    <div className=" h-20 flex justify-between items-center px-5 border-b border-gray-100">
      <div className="flex space-x-3">
        <UserIcon size={"h-10 w-10"} status="disable" />
        <div>
          <p className="font-bold text-gray-900">Steve Williams</p>
          <p className="text-xs text-gray-500">
            Status . details of status
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <MyButton theme="primary" label={<IoIosCall size={"1.5em"} />} />
        <MyButton theme="primary" label={<BsPersonVideo size={"1.5em"} />} />
        <MyButton theme="primary" label={<BsThreeDots size={"1.5em"} />} />
      </div>
    </div>
  );
};

export default Header;
