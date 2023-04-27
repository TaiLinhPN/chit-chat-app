import UserIcon from "../../components/UserIcon";

const Profile = () => {
  return (
    <section className="flex flex-col items-center py-10 border-l border-gray-100 bg-gray-50">
      Profile
      <UserIcon size={"h-44 w-44"} status="busy" />
    </section>
  );
};

export default Profile;
