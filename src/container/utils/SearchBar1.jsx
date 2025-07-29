import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const SIZE_CLASS = {
  sm: "lg:w-[12rem] md:w-[8rem] w-[7rem]  lg:py-[4px] md:py-[4px] py-[3px] ",
  md: "lg:w-[13rem] md:w-[9rem] w-[7rem] lg:py-[7px] md:py-[5px] py-[4px] ",
  lg: "lg:w-[16rem] md:w-[14rem] w-[13rem] lg:py-[8px] md:py-[6px] py-[5px] ",
};

const ICON_SIZE = {
  sm: "lg:w-[14px] lg:h-[14px] md:w-[13px] md:h-[13px] h-[12px] w-[12px] ",
  md: "lg:w-[20px] lg:h-[20px] md:w-[18px] md:h-[18px] h-[14px] w-[14px]",
  lg: "lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] h-[18px] w-[18px] ",
};

function SearchBar1({
  size = "md",
  iconSize = "md",
  bg = "transparent",
  color = "#f5f5f4",
  left = "4px",
}) {
  const [inputValue, setInputValue] = useState("");
  function handleInputValue(e) {
    setInputValue(e.target.value);
  }
  return (
    <div className="relative">
      <input
        type="text"
        name="text"
        placeholder="search"
        value={inputValue}
        className={`${SIZE_CLASS[size]} border border-gray-700 rounded-md text-xs pl-[28px]`}
        style={{
          backgroundColor: bg,
          color,
        }}
        onChange={handleInputValue}
      />
      <Icon
        icon="mynaui:search"
        style={{ color, position: "absolute" }}
        className={`lg:top-2 top-[7px]  lg:left-1 md:left-[6px] left-[6px] ${ICON_SIZE[iconSize]}`}
      />
    </div>
  );
}

export default SearchBar1;
