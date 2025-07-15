import React from "react";
import { NavLink } from "react-router-dom";

function ChildLists({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <li className="rounded-md text-stone-100 text-sm" key={i}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "block bg-gradient-to-r from-gray-600 to-gray-800 py-2 px-2 rounded-md"
                : "block py-2 px-2"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default React.memo(ChildLists);
