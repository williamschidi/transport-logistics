import { useState } from "react";
import { StackChart } from "./BarChart";

function EarningChart() {
  const [period, setPeriod] = useState("day");
  return (
    <div className="col-start-8 col-span-3 border rounded-md border-gray-600 self-start">
      <p className="py-3 px-4 text-xs">Total Earning</p>
      <div>
        <p className="text-center font-bold text-2xl pt-2 pb-3">#6743.00</p>
        <div className="flex justify-center items-center gap-6 text-xs">
          <button
            onClick={() => setPeriod("day")}
            className={`pb-1 w-[2.4rem] ${
              period === "day"
                ? "border-b-4 border-b-blue-600"
                : "border-b-4 border-gray-900"
            }`}
          >
            Day
          </button>
          <button
            onClick={() => setPeriod("week")}
            className={`pb-1 w-[2.4rem] ${
              period === "week"
                ? "border-b-4 border-b-blue-600"
                : "border-b-4 border-gray-900"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setPeriod("month")}
            className={`pb-1 w-[2.4rem] ${
              period === "month"
                ? "border-b-4 border-b-blue-600"
                : "border-b-4 border-gray-900"
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setPeriod("year")}
            className={`pb-1 w-[2.4rem] ${
              period === "year"
                ? "border-b-4 border-b-blue-600"
                : "border-b-4 border-gray-900"
            }`}
          >
            Year
          </button>
        </div>
        <div className="py-4 px-2">
          <div className="flex justify-end items-center gap-4 pr-6 pb-3">
            <div className="flex  items-center justify-end gap-2">
              <div className="w-[.6rem] h-[.6rem] rounded-full bg-green-600"></div>
              <span className="text-[0.7rem]">Earning</span>
            </div>
            <div className="flex  items-center justify-end gap-2">
              <div className="w-[.6rem] h-[.6rem] rounded-full bg-yellow-600"></div>
              <span className="text-[0.7rem]">Spent</span>
            </div>
          </div>
          <div>
            <StackChart
              profitTab={period}
              stacked={true}
              color1={"#ca8a04"}
              color2={"#16a34a"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarningChart;
