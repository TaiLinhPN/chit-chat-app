import ResizableSidebar from "../components/ResizableSidebar/ResizableSidebar";
import ContactList from "../layout/ContactList";
import MessBox from "../layout/MessBox";
import Nav from "../layout/Nav";
import Profile from "../layout/Profile";

function MainPage() {
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

export default MainPage;
