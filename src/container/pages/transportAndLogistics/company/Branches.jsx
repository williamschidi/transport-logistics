const data = [
  {
    branch: "Singanallur",
    terminal: "Jibowu Terminal",
    address: "1A/Krihnarajapuram, 3 rd street sulur",
    unit: "Coimbatore - 6313403",
    telephone: "044- 653578",
  },
  {
    branch: "Slur Branch",
    terminal: "Jibowu Terminal",
    address: "54 Ramani colony, 3 rd street sulur",
    unit: "Coimbatore - 6313403",
    telephone: "044- 653763",
  },
  {
    branch: "Gaandipuram Branch",
    terminal: "Jibowu Terminal",
    address: "32/ Venkatasamy layout, 3 rd street sulur",
    unit: "Coimbatore - 6313403",
    telephone: "044- 653578",
  },
];

function Branches() {
  return (
    <section className="flex-1 space-y-6 max-h-[20rem] overflow-y-auto custom-scrollbar">
      {data.map((x) => (
        <main className="w-[98%] flex ">
          <div className="flex-1 flex justify-center items-center bg-[#363A3D] rounded-tl-md rounded-bl-md">
            <p className="font-bold">{x.branch}</p>
          </div>
          <div className="flex-[3] flex justify-between items-start px-4 py-3 border-t border-b border-r border-gray-500 rounded-tr-md rounded-br-md">
            <div className="flex flex-col justify-start items-start gap-2">
              <span className="text-sm text-[#1366D9] font-bold">
                {x.terminal}
              </span>
              <span className="text-sm">{x.address}</span>
              <span className="text-sm">{x.unit}</span>
              <span className="text-sm">{x.telephone}</span>
            </div>

            <button className="border border-gray-400 rounded-md px-6 py-1 text-sm text-[#1366D9]">
              Edit
            </button>
          </div>
        </main>
      ))}
    </section>
  );
}
export default Branches;
