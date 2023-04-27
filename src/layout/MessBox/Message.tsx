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
      className={`flex  relative  mb-6 ${iuUserId && "justify-end"}`}
      onClick={() => SetOpenTime(!openTime)}
    >
      <div>
        <div className={`flex ${iuUserId && "justify-end"}`}>
          <p
            className={`border-2 py-2 px-4 rounded-t-xl shadow-lg whitespace-pre-wrap
             ${
               iuUserId
                 ? "rounded-bl-xl "
                 : "rounded-br-xl bg-blue-500 text-white "
             }`}
          >
            {text}
          </p>
        </div>
        {openTime && (
          <div className={`flex ${iuUserId && "justify-end"}`}>
            <p className="text-gray-500 text-xs ">{time}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
