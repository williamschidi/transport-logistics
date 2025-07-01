import logo from "./../images/logo.svg";

function Aside({ children }) {
  return (
    <aside className="overflow-y-auto  custom-scrollbar flex flex-col space-y-4 bg-gray-800 max-h-screen text-sm  w-[16rem] px-2 py-4 m-2">
      <header href="#" className="flex items-center justify-start">
        <img src={logo} alt="logo" className="w-6 h-6" />
        <span className="text-xl font-semibold">HRMS</span>
      </header>

      <nav className="space-y-5 py-4">{children}</nav>
    </aside>
  );
}

export default Aside;
