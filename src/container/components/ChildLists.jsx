import React from "react";

function ChildLists({ items, setDisplayTab }) {
  function handleDisplayTab(x) {
    setDisplayTab(x);
  }
  return (
    <>
      {items.map((item, i) => (
        <li
          key={i}
          className="rounded-md text-stone-100 text-sm p-2 hover:bg-gray-600"
          onClick={() => handleDisplayTab(item)}
        >
          {item}
        </li>
      ))}
    </>
  );
}

export default React.memo(ChildLists);
