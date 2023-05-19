import ContactCard from "./ContactCard";
import SearchBar from "./SearchBar";

const ContactList = () => {
  return (
    <div className=" items-center  border-r border-gray-100 bg-gray-50">
      <SearchBar />
      <div
        className=" w-full space-y-2  overflow-y-scroll  p-4 "
        style={{ maxHeight: "calc(100vh - 80px)" }}
      >
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
        <ContactCard mess="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. " />
      </div>
    </div>
  );
};

export default ContactList;
