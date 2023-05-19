import { useState } from "react";

interface MessageProps {
  id: string;
  text: string;
  time: string;
}
const Message = ({ id, text, time }: MessageProps) => {
  const iuUserId = id == "1";
  const [openTime, SetOpenTime] = useState<boolean>(false)


  return (
    <div
      className={` fade flex w-full relative  mb-6 ${
        iuUserId && "justify-end"
      }`}
    >
      <div>
        <div className={`flex ${iuUserId && "justify-end"}`}>
          <p
            onClick={() => SetOpenTime(!openTime)}
            className={`max-w-x border-2 py-2 px-4 rounded-t-2xl shadow-lg whitespace-pre-wrap  break-words
             ${
               iuUserId
                 ? "rounded-bl-2xl "
                 : "rounded-br-2xl bg-blue-500 text-white "
             }`}
          >
            {text}
          </p>
        </div>

        {/* <CSSTransition
          in={openTime}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div className={`flex  ${iuUserId && "justify-end  "}`}>
            <p className="text-gray-500 text-xs ">{time}</p>
          </div>
        </CSSTransition> */}
        {openTime && (
          <div className={`flex   ${iuUserId && "justify-end "}`}>
            <p className="text-gray-500 text-xs">{time}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
