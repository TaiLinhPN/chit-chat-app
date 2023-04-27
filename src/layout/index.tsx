import ContactList from "./ContactList";
import MessBox from "./MessBox";
import Nav from "./Nav";
import Profile from "./Profile";

function Layout() {
  return (
    <div className="w-full grid grid-cols-[auto_2fr_5.5fr_2.5fr] h-screen">
      <Nav />
      <ContactList />
      <MessBox />
      <Profile />
    </div>
  );
}

export default Layout;
