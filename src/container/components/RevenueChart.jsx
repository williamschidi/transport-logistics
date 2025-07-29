import { useState } from "react";
import { BarChart } from "./BarChart";

function RevenueChart() {
  const [tab, setTab] = useState("week");

  function handleSetActive(e, newTab) {
    setTab(newTab);
  }
  return (
    <div className="col-start-1 col-span-7 p-2 border border-gray-600  rounded-md self-start">
      <div className="flex justify-between items-end px-2">
        <p className="text-[0.7rem]">Total Revenue</p>
        <div className="text-[.6rem] space-x-1">
          <button
            className={`px-4 py-1 rounded-sm ${
              tab === "week" ? "bg-blue-500" : "bg-gray-500 "
            }`}
            data-tab="week"
            onClick={(e) => handleSetActive(e, "week")}
          >
            Week
          </button>
          <button
            className={`px-4 py-1  rounded-sm ${
              tab === "month" ? "bg-blue-500" : "bg-gray-500"
            }`}
            data-tab="month"
            onClick={(e) => handleSetActive(e, "month")}
          >
            Month
          </button>
          <button
            className={`px-4 py-1 rounded-sm ${
              tab === "year" ? "bg-blue-500" : " bg-gray-500"
            }`}
            data-tab="year"
            onClick={(e) => handleSetActive(e, "year")}
          >
            Year
          </button>
          <button
            className={`px-2 py-1 rounded-sm ${
              tab === "all" ? "bg-blue-500" : " bg-gray-500"
            }`}
            data-tab="all"
            onClick={(e) => handleSetActive(e, "all")}
          >
            All
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center pt-2 pb-4">
          <div className="space-x-4 pl-6">
            <span className="text-sm font-bold">#50.4k</span>
            <span className="text-[0.7rem]">5% than last month</span>
          </div>
          <div className="flex justify-center items-center gap-6 pr-6">
            <div className="flex  items-center justify-end gap-2">
              <div className="w-[.6rem] h-[.6rem] rounded-full bg-blue-600"></div>
              <span className="text-[0.7rem]">Profit</span>
            </div>
            <div className="flex  items-center justify-end gap-2">
              <div className="w-[.6rem] h-[.6rem] rounded-full bg-yellow-600"></div>
              <span className="text-[0.7rem]">Loss</span>
            </div>
          </div>
        </div>
        <div className="h-[8rem]">
          <BarChart
            tab={tab}
            stacked={false}
            color1={"#2563eb"}
            color2={"#ca8a04"}
          />
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col justify-center items-center lg:text-sm text-xs py-2 border w-[10rem]">
            <span>121721</span>
            <span> Drivers</span>
          </div>
          <div className="flex flex-col justify-center items-center lg:text-sm text-xs py-2 border w-[10rem]">
            <span>#250,253</span>
            <span>Ride Revenue</span>
          </div>
          <div className="flex flex-col justify-center items-center lg:text-sm text-xs py-2 border w-[10rem]">
            <span>12725</span>
            <span>Active Drivers</span>
          </div>
          <div className="flex flex-col justify-center items-center lg:text-sm text-xs py-2 border w-[10rem]">
            <span>#250523</span>
            <span>Revenue</span>
          </div>
          <div className="flex flex-col justify-center items-center  lg:text-sm text-xs py-2 border w-[10rem]">
            <span>12750</span>
            <span>Active Drivers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueChart;
