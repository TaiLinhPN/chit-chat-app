import ResizableSidebar from "../components/ResizableSidebar/ResizableSidebar";
import ContactList from "./ContactList";
import MessBox from "./MessBox";
import Nav from "./Nav";
import Profile from "./Profile";

function Layout() {
  return (
    <div className="content">
      <Nav />
      <ResizableSidebar
        minSidebarWidth={270}
        maxSidebarWidth={500}
        initWidth={{ width: "300px" }}
        directionX={1}
      >
        <ContactList />
      </ResizableSidebar>
      <MessBox />
      <ResizableSidebar
        minSidebarWidth={180}
        maxSidebarWidth={400}
        initWidth={{ width: "250px" }}
        directionX={-1}
        sidebarClassName="sidebar2"
        resizerClassName="resizer2"
      >
        <Profile />
      </ResizableSidebar>
    </div>
  );
}

export default Layout;
