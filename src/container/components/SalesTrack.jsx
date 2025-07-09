import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import DataChart from "./DataChart";

function SalesTrack() {
  const [selected, setSelected] = useState("Today");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Today", "Yesterday", "Last Week", "Last Month"];

  function toggleDisplay() {
    setIsOpen((open) => !open);
    // setIsOpen(false);
  }

  function handleSelect(opt) {
    setSelected(opt);
  }
  return (
    <div className="relative w-[30%] border border-gray-600 rounded-md px-2 py-3">
      <div className="flex justify-start items-end flex-col pb-4 gap-1">
        <button
          className=" w-[6rem] px-2 py-1 flex justify-center items-center gap-1 bg-stone-100 text-[#0D99FF] text-[.7rem] rounded-sm"
          onClick={toggleDisplay}
        >
          {selected} {isOpen ? <HiChevronUp /> : <HiChevronDown />}
        </button>

        {isOpen && (
          <div className=" w-[6rem] bg-stone-100  text-[#0D99FF] border rounded-sm">
            {options.map((option, i) => (
              <button
                key={i}
                className="text-center text-[.7rem] border border-b-gray-600 py-1 last:border-b-0 w-[100%]"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="relative">
        <div className="relative">
          <DataChart
            values={[30, 40, 20, 10]}
            color={["#FF9F00", "#0D99FF", "#3AC977", "#FF5E5E"]}
            borderCo="#111827"
            borderWidth={2}
            cutout="90%"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-gray-400">100</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center py-2">
            <div className="flex justify-center items-center gap-2">
              <span className="inline-block w-[.4rem] h-[.4rem] bg-[#0D99FF] rounded-sm"></span>
              <span className="text-xs">Completed Sales</span>
            </div>
            <div className="flex justify-center items-center gap-2 pr-4">
              <span className="text-xs">125</span>
              <span className="text-xs">Sales</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div className="flex justify-center items-center gap-2">
              <span className="inline-block w-[.4rem] h-[.4rem] bg-[#3AC977] rounded-sm"></span>
              <span className="text-xs">Completed Sales</span>
            </div>
            <div className="flex justify-center items-center gap-2 pr-4">
              <span className="text-xs">125</span>
              <span className="text-xs">Sales</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div className="flex justify-center items-center gap-2">
              <span className="inline-block w-[.4rem] h-[.4rem] bg-[#FF5E5E] rounded-sm"></span>
              <span className="text-xs">Completed Sales</span>
            </div>
            <div className="flex justify-center items-center gap-2 pr-4">
              <span className="text-xs">125</span>
              <span className="text-xs">Sales</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesTrack;
