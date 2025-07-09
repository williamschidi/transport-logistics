import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function PageNavigation({
  num = 2,
  bg = "#f5f5f4",
  color = "#0D99FF",
  activeBg = "#0D99FF",
  activeColor = "#fafaf9",
  borderColor = "transparent",
}) {
  const [curData, setCurData] = useState(1);

  function handlePageData(x) {
    setCurData(x);
  }

  function handleNext() {
    if (curData >= num) {
      setCurData(1);
    } else {
      setCurData((cur) => cur + 1);
    }
  }

  function handlePrev() {
    if (curData === 1) {
      setCurData(num);
    } else {
      setCurData((cur) => cur - 1);
    }
  }

  return (
    <div
      style={{ backgroundColor: bg, color }}
      className="flex justify-between items-center gap-4 py-1 px-2 rounded-2xl"
    >
      <HiChevronLeft onClick={handlePrev} />

      {Array.from({ length: num }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageData(i + 1)}
          style={
            curData === i + 1
              ? {
                  backgroundColor: activeBg,
                  color: activeColor,
                  border: `1px solid ${borderColor}`,
                }
              : undefined
          }
          className={
            "w-[1.2rem] h-[1.2rem] rounded-md flex items-center justify-center text-xs"
          }
        >
          {i + 1}
        </button>
      ))}

      <HiChevronRight onClick={handleNext} />
    </div>
  );
}
export default PageNavigation;
