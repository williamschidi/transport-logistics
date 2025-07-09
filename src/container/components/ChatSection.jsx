import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";

const now = new Date();

const conversation = {
  person1: [
    { text: "Hi mr Mike", time: now.getTime() - 5 * 60 * 1000 },
    { text: "how are you doing", time: now.getTime() - 4 * 60 * 1000 },
    {
      text: "It been long i heard from you",
      time: now.getTime() - 3 * 60 * 1000,
    },
    {
      text: "alright i will create time for u, u are my person, i cant wait to see you after this long time",
      time: now.getTime() - 0.1 * 60 * 1000,
    },
  ],
  person2: [
    { text: "Hello miss Blessing", time: now.getTime() - 4.1 * 60 * 1000 },
    { text: "i'am good", time: now.getTime() - 2 * 60 * 1000 },
    {
      text: "Just that i have been very busy lately",
      time: now.getTime() - 1 * 60 * 1000,
    },

    {
      text: "Thanks for checking up on me",
      time: now.getTime() - 0.8 * 60 * 1000,
    },
    {
      text: "Would you be around tommorrow?",
      time: now.getTime() - 0.5 * 60 * 1000,
    },
    {
      text: "I would want us to have some good time and recreate old memories",
      time: now.getTime() - 0.3 * 60 * 1000,
    },
  ],
};

function ChatSection() {
  const [chatValue, setChatValue] = useState();

  const mergedMsg = [
    conversation.person1.map((msg) => ({ ...msg, from: "left" })),
    conversation.person2.map((msg) => ({ ...msg, from: "right" })),
  ];
  const sortMsgs = mergedMsg.flat().sort((a, b) => a.time - b.time);

  return (
    <div className="w-[40%] border border-stone-600 rounded-md space-y-3 pb-4">
      <header className="flex justify-between items-center px-4 py-2">
        <span className="w-[1.5rem] h-[1.2rem] bg-stone-50 text-[#0D99FF] flex justify-center items-center rounded-sm">
          <HiChevronLeft />
        </span>
        <span className="text-sm text-[#0D99FF] pr-4">chat</span>
      </header>

      <div className="pl-6 pr-4 h-[16rem] overflow-auto custom-scrollbar">
        {sortMsgs.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.from === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <span
              className={`inline-block text-stone-50 px-4 py-1 text-xs mb-1 max-w-[90%] ${
                msg.from === "left"
                  ? "bg-[#3AC977]  rounded-r-md rounded-bl-md"
                  : "bg-[#0D99FF]  rounded-l-md rounded-tr-md "
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="relative px-4 mt-6 ">
        <input
          type="text"
          name="text"
          value={chatValue}
          onChange={(e) => setChatValue(e.target.value)}
          className="py-2 w-full rounded-md"
        />
        <button className="absolute top-[.4rem] right-[1.4rem] flex justify-center items-center w-[3.5rem] h-[1.8rem] rounded-md bg-[#0D99FF] text-stone-50">
          <span className="text-[.7rem]">send</span>
          <Icon icon="tabler:send" width="12" height="12" />
        </button>
      </div>
    </div>
  );
}
export default ChatSection;
