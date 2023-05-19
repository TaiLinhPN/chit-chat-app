import { BsThreeDots } from "react-icons/bs";
import MyButton from "../../components/MyButton";
import UserIcon from "../../components/UserIcon";

interface ContactCardProps {
  mess: string;
}

const ContactCard = ({ mess }: ContactCardProps) => {
  console.log("eqweqwe");

  return (
    <div className="relative  flex flex-col px-4 py-3  bg-white rounded shadow-lg space-y-2">
      <div className="flex space-x-3">
        <div className="w-1/6 mt-1">
          <UserIcon size={"h-10 w-10"} status="disable" />
        </div>

        <div className="w-5/6">
          <p className="font-bold text-gray-900">Steve Williams</p>
          <p className="text-xs text-gray-500 truncate ">{"2.42 pm."}</p>
          <p className=" text-gray-500  truncate pr-4">{mess}</p>
        </div>
      </div>

      <MyButton
        className="absolute right-1"
        theme="primary"
        label={<BsThreeDots size={"1em"} />}
      />
      <div className="absolute flex justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full bottom-1 right-1">
        2
      </div>
    </div>
  );
};

export default ContactCard;
