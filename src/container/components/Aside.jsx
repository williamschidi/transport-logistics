import React from "react";

import logo from "./../images/logo.svg";

function Aside({ children }) {
  return (
    <aside className="overflow-y-auto max-h-screen custom-scrollbar flex flex-col space-y-4 bg-gray-800  md:text-sm text-[12px] lg:w-[16rem] md:w-[14rem] w-[12rem] lg:px-2 md:px-1 sm:px-[2px] py-2 lg:ml-2 md:ml-1 sm:ml-[2px]">
      <header href="#" className="flex items-center justify-start">
        <img src={logo} alt="logo" className="w-6 h-6" />
        <span className="text-xl font-semibold">HRMS</span>
      </header>

      <nav className="space-y-4 py-4">{children}</nav>
    </aside>
  );
}

export default React.memo(Aside);
