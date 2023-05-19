import { useEffect, useRef } from "react";
import Message from "./Message";
import MyButton from "../../components/MyButton";
import { MdOutlineMic, MdOutlinePermMedia } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import MyInput from "../../components/MyInput";

const BoxChat = () => {
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.scrollTo(0, myRef.current.scrollHeight);
    }
  }, []);

  const log = () => {
    console.log("hello world");
  };
  return (
    <div className="  flex flex-col justify-end ">
      <div
        ref={myRef}
        className="overflow-y-scroll px-4"
        style={{ maxHeight: "calc(100vh - 160px)" }}
      >
        <Message
          id="1"
          text="helooo ooooooooo ooooo ooooo ooo oooo oooooo ooooooo oooooo oooo ooooo oooo ooo oooo ooooo oooo oooo ooooo"
          time="123 1312 12312"
        />
        <Message id="2" text="qw qwe" time="123 1312 12312" />
        <Message
          id="2"
          text="helooo ooooooooo oooo ooooooooo oooooo ooooooo"
          time="123 1312 12312"
        />
        <Message
          id="1"
          text="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. These individuals work tirelessly to complete all of their responsibilities, often juggling multiple projects and deadlines simultaneously. Whether they are teachers, doctors, engineers, or any other type of professional, these hardworking individuals understand the importance of staying focused and organized in order to meet the demands of their job. Despite the challenges they face, people who complete 300 or more tasks each day demonstrate a remarkable level of dedication and commitment to their work, and their efforts help to drive progress and innovation in a variety of industries."
          time="123 1312 12312"
        />
        <Message
          id="2"
          text="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. These individuals work tirelessly to complete all of their responsibilities, often juggling multiple projects and deadlines simultaneously. Whether they are teachers, doctors, engineers, or any other type of professional, these hardworking individuals understand the importance of staying focused and organized in order to meet the demands of their job. Despite the challenges they face, people who complete 300 or more tasks each day demonstrate a remarkable level of dedication and commitment to their work, and their efforts help to drive progress and innovation in a variety of industries."
          time="123 1312 12312"
        />
        <Message
          id="2"
          text="There are many people in the world who have jobs that require them to perform 300 or more tasks every day"
          time="123 1312 12312"
        />
        <Message
          id="1"
          text="There are many people in the world who have jobs that require them to perform 300 or more tasks every day. These individuals work tirelessly to complete all of their responsibilities, often juggling multiple projects and deadlines simultaneously. Whether they are teachers, doctors, engineers, or any other type of professional, these hardworking individuals understand the importance of staying focused and organized in order to meet the demands of their job. Despite the challenges they face, people who complete 300 or more tasks each day demonstrate a remarkable level of dedication and commitment to their work, and their efforts help to drive progress and innovation in a variety of industries."
          time="123 1312 12312"
        />
          <Message
          id="1"
          text="."
          time="123 1312 12312"
        />
      </div>
      <div className="border-t border-gray-100 h-20 flex  items-center space-x-8 px-8">
        <div className="space-x-8 flex">
          <MyButton
            theme="primary"
            label={<MdOutlinePermMedia size={"1.5em"} />}
          />
          <MyButton theme="primary" label={<MdOutlineMic size={"1.5em"} />} />
        </div>
        <MyInput
          button={{
            label: <FaTelegramPlane size={"1.5em"} />,
            theme: "primary",
            func: log,
          }}
          space="py-2"
          placeholder={"Send something..."}
        />
      </div>
    </div>
  );
};

export default BoxChat;
