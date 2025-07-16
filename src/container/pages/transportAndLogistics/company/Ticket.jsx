import { Link } from "react-router-dom";

const data = [
  {
    ticketID: "Ticket# 2023-CS123",
    time: "12:45 AM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    owner: "John Snow",
  },
  {
    ticketID: "Ticket# 2023-CS123",
    time: "12:45 AM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    owner: "John Snow",
  },
  {
    ticketID: "Ticket# 2023-CS123",
    time: "12:45 AM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    owner: "John Snow",
  },
  {
    ticketID: "Ticket# 2023-CS123",
    time: "12:45 AM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    owner: "John Snow",
  },
];

function Ticket() {
  return (
    <section className="flex-1 space-y-10 h-[22rem] pb-2 overflow-y-auto custom-scrollbar">
      {data.map((x) => (
        <main className="space-y-3 py-3 px-3 border border-gray-500 rounded-md w-[98%]">
          <div className="flex justify-between items-center text-xs">
            <span>{x.ticketID}</span>
            <span className="flex flex-col gap-[2px] text-[.6rem]">
              <span>posted at</span> <span>{x.time}</span>
            </span>
          </div>
          <div className="w-[60%] text-[0.6rem]">{x.description}</div>
          <hr className="border-gray-400 border-t" />
          <div className="flex justify-between items-center text-xs px-4">
            <span>{x.owner}</span>
            <Link to="" className="text-[#7F56D8] underline">
              Open Ticket
            </Link>
          </div>
        </main>
      ))}
    </section>
  );
}
export default Ticket;
