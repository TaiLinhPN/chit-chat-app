import Message from "./Message";

const BoxChat = () => {
  return (
    <div className="flex flex-col justify-end h-full p-4 ">
      <Message
        id="1"
        text="helooo ooooooooo oooo ooooooooo  oooooo ooooooo oooo oo oooooo oo oooo ooooooo oooooo oooooo oooo ooo oooooo oo oo ooooo ooo oooo ooo ooooo ooo oooo oooooo ooooooo oooooo oooo ooooo oooo ooo oooo ooooo oooo oooo ooooo"
        time="123 1312 12312"
      />
      <Message id="2" text="qw qwe" time="123 1312 12312" />
      <Message id="1" text="rwewrewrwerwer" time="123 1312 12312" />
      <Message
        id="1"
        text="helooo ooooooooo oooo ooooooooo ooooooo oooooo"
        time="123 1312 12312"
      />

      <Message
        id="1"
        text="he"
        time="123 1312 12312"
      />
      <Message
        id="2"
        text="helooo ooooooooo oooo ooooooooo oooooo ooooooo"
        time="123 1312 12312"
      />
      <Message
        id="2"
        text="helooo ooooooooo oooo ooooooooo oooooo ooooooo"
        time="123 1312 12312"
      />
      {/* <Message
        id="2"
        text="helooo ooooooooo oooo ooooooooo ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo ooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
        time="123 1312 12312"
      /> */}
    </div>
  );
};

export default BoxChat;
