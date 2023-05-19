import UserIcon from "../../components/UserIcon";
import Media from "./Media";
import UserInfo from "./UserInfo";

const Profile = () => {
  return (
    <section className="flex flex-col h-full items-center py-10 px-5 border-l border-gray-100 bg-gray-50">
      <UserIcon size={"h-44 w-44"} status="busy" />
      <UserInfo />
      <Media/>
    </section>
  );
};

export default Profile;
