import React, { useState } from "react";

function List({
  children,
  icon,
  title,
  dataSet,
  setCurrentTab,
  currentTab,
  setDisplayTab,
}) {
  const [show, setShow] = useState(false);

  function handleClick(e, tab) {
    if (
      currentTab === e.target.closest("[data-tab]")?.getAttribute("data-tab")
    ) {
      setCurrentTab("");
      setDisplayTab(tab);
      setShow(false);
    } else {
      setCurrentTab(tab);

      setShow(true);
    }
  }

  return (
    <div className="group flex flex-col items-start justify-center  cursor-pointer border-l-gray-800 border-l-2">
      <button
        data-tab={dataSet}
        onClick={(e) => handleClick(e, dataSet)}
        className={`
 hover:rounded-r-md border-l-2 border-l-gray-800 transition-all duration-200 lg:px-2 md:px-1 pl-[2px]  pr-0 py-2 flex items-center justify-start lg:gap-3 md:gap-2 gap-[4px] hover:bg-gray-700 lg:w-[13rem] w-[11.8rem] ${
   currentTab === dataSet
     ? "text-purple-500 border-l-2 border-l-purple-500 bg-gray-700 rounded-sm rounded-r-md"
     : ""
 }`}
      >
        {icon} {title}
      </button>
      {show && currentTab === dataSet ? (
        <ul
          className={`w-[8rem] md:ml-[5rem] ml-[3rem] mt-[2px] transform transition-all duration-200 origin-top text-sm font-normal hover:${
            currentTab === dataSet
              ? "scale-y-100 opacity-100 "
              : "scale-y-0 opacity-0"
          } `}
        >
          {children}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
export default React.memo(List);
