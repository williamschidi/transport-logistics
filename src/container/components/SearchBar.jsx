import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

function SearchBar({
  inputWidth = "12rem",
  iconWidth = "16",
  bg = "transparent",
  py = "4px",
  color = "#f5f5f4",
  pl = "24px",
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
        style={{
          backgroundColor: bg,
          paddingTop: py,
          paddingBottom: py,
          paddingLeft: pl,
          width: inputWidth,
          color,
        }}
        className="border border-gray-700 rounded-md text-xs "
        onChange={handleInputValue}
      />
      <Icon
        icon="mynaui:search"
        width={iconWidth}
        height={iconWidth}
        style={{ color, left }}
        className="absolute top-2 "
      />
    </div>
  );
}
export default SearchBar;
