import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

function JusioSearchSection() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between items-center w-[100%] px-6">
      <Icon icon="icon-park-outline:voice" width="20" height="20" />
      <input
        type="text"
        placeholder="You can ask me anything, I am here to help."
        name="search"
        values={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[85%] text-gray-800 px-4 py-2 border border-gray-800 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-xs"
      />
      <Icon icon="mdi:paperclip" />
      <span className="h-[1.8rem] w-[1.8rem] rounded-lg bg-gray-800 inline-flex justify-center items-center">
        <Icon icon="tabler:send" width="14" height="14" />
      </span>
    </div>
  );
}

export default JusioSearchSection;
