import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import PageNavigation from "./PageNAvigation";

const data = [
  {
    Sales: "Bicycle",
    Driver: "Liam Risher",
    Progress: 50,
    Status: "Active",
    lastSeen: "06 sept 2021",
  },
  {
    Sales: "Motor Bike",
    Driver: "Oliver Noah",
    Progress: 30,
    Status: "Idle",
    lastSeen: "08 Aug 2021",
  },
  {
    Sales: "Bus",
    Driver: "Donald Benjamin",
    Progress: 30,
    Status: "Idle",
    lastSeen: "16 sept 2021",
  },
  {
    Sales: "Truck",
    Driver: "Isaiah Isaac",
    Progress: 40,
    Status: "Online",
    lastSeen: "20 sept 2021",
  },
  {
    Sales: "Truck",
    Driver: "Elija James",
    Progress: 70,
    Status: "Active",
    lastSeen: "25 Oct 2021",
  },
];

function DeriversDetail() {
  return (
    <div className="w-[50%] border border-gray-600 rounded-md">
      <div className="flex justify-between items-center text-xs px-2 py-4">
        <p>Active Drivers</p>
        <p>Export Report</p>
      </div>

      <div className="bg-lime-800 text-stone-50 font-semibold text-xs text-left flex justify-around items-center w-full">
        <div className="py-2 px-2">Sale Type</div>
        <div className="py-2">Drivers</div>
        <div className="py-2">Progress</div>
        <div className="py-2">Status</div>
        <div className="py-2">Last Seen</div>
      </div>

      {data.map((d, i) => (
        <div
          key={i}
          className=" flex justify-start items-center  text-[.7rem] font-normal pl-2 w-full gap-4 my-2 hover:bg-gray-800 hover:cursor-pointer"
        >
          <div className="w-[10rem] mb-2 py-2">{d.Sales}</div>
          <div className="w-[10rem] mb-2 py-2">{d.Driver}</div>
          <div className="w-[12rem] mb-2 py-2 flex items-center gap-2">
            <div className="bg-[#4D6A3F] h-1.5 w-[4rem] rounded-md">
              <div
                className={`h-1.5 rounded-md ${
                  d.Status === "Idle"
                    ? "bg-[#FF5E5E] "
                    : d.Status === "Active"
                    ? "bg-[#0D99FF] "
                    : "bg-[#3AC977]"
                }`}
                style={{ width: `${d.Progress}%` }}
              ></div>
            </div>
            {d.Progress}%
          </div>
          <div
            className={`w-[6rem] rounded-md py-2 text-center ${
              d.Status === "Idle"
                ? "bg-[#FF5E5E]/15 text-[#FF5E5E] "
                : d.Status === "Active"
                ? "bg-[#4D6A3F] text-[#0D99FF]"
                : "bg-[#3AC9771A] text-[#3AC977]"
            }`}
          >
            {d.Status}
          </div>
          <div className="w-[10rem] mb-2 py-2">{d.lastSeen}</div>
        </div>
      ))}

      <div className="flex justify-between pl-4 py-2 text-xs items-center">
        <p>Sowing 1 to 5 of 10 entries</p>
        <PageNavigation />
      </div>
    </div>
  );
}

export default DeriversDetail;
