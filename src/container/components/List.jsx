import { useState } from "react";

function List({ children, icon, title, dataSet }) {
  const [activeTab, setActiveTab] = useState("");
  const [show, setShow] = useState(false);

  function handleClick(e, tab) {
    if (
      activeTab === e.target.closest("[data-tab]")?.getAttribute("data-tab")
    ) {
      setActiveTab("");
      setShow(false);
    } else {
      setActiveTab(tab);
      setShow(true);
    }
  }

  return (
    <li className="group flex flex-col items-start justify-center  cursor-pointer border-l-gray-800 border-l-2">
      <div
        data-tab={dataSet}
        onClick={(e) => handleClick(e, dataSet)}
        className={
          "border-l-2 border-l-gray-800 transition-all duration-100 p-2 flex items-center justify-start gap-4 hover:bg-gray-700 w-[13rem] hover:text-purple-500 hover:border-l-2 hover:border-l-purple-500"
        }
      >
        {icon} {title}
      </div>
      {show ? (
        <ul
          className={`w-[8rem] ml-[5rem] bg-gray-700 transform transition-all duration-200 origin-top text-sm font-normal ${
            activeTab === dataSet
              ? "scale-y-100 opacity-100 "
              : "scale-y-0 opacity-0"
          } `}
        >
          {children}
        </ul>
      ) : (
        ""
      )}
    </li>
  );
}
export default List;
