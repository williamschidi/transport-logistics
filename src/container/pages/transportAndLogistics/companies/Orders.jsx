const data = [
  {
    order: "Order 311",
    distance: "2.5km",
    status: "Delivered",
    address: "3rd Ave road, Ikot Ansa",
    address2: "13th SDAT Cricket Ground",
    time: "12:30 PM",
    date: "9th June 2022",
  },
  {
    order: "Order 351",
    distance: "2.7km",
    status: "Delivered",
    address: "7th avenue, Ashok Nagar road",
    address2: "24th Highway road, Old nice palace",
    time: "12:30 PM",
    date: "9th June 2022",
  },
  {
    order: "Order 321",
    distance: "2.9km",
    status: "Delivered",
    address: "7th street, SDAT Cricket Ground",
    address2: "15th Highway road, Old nice palace",
    time: "12:30 PM",
    date: "9th June 2022",
  },
  {
    order: "Order 342",
    distance: "3.2km",
    status: "Canceled",
    address: "Apples eatery, marian road",
    address2: "525system, Marian road",
    time: "12:30 PM",
    date: "9th June 2022",
  },
  {
    order: "Order 369",
    distance: "3.2km",
    status: "Canceled",
    address: "2nd avenue, School gate road",
    address2: "525system, Marian road",
    time: "12:30 PM",
    date: "9th June 2022",
  },
  {
    order: "Order 311",
    distance: "2.5km",
    status: "Pending",
    address: "3rd Ave road, Ikot Ansa",
    address2: "24th Highway road, Old nice palace",
    time: "12:30 PM",
    date: "9th June 2022",
  },
  {
    order: "Order 311",
    distance: "2.5km",
    status: "Active",
    address: "3rd Ave road, Ikot Ansa",
    address2: "24th Highway road, Old nice palace",
    time: "12:30 PM",
    date: "9th June 2022",
  },
  {
    order: "Order 311",
    distance: "2.5km",
    status: "Active",
    address: "3rd Ave road, Ikot Ansa",
    address2: "24th Highway road, Old nice palace",
    time: "12:30 PM",
    date: "9th June 2022",
  },
  {
    order: "Order 311",
    distance: "2.5km",
    status: "Active",
    address: "3rd Ave road, Ikot Ansa",
    address2: "24th Highway road, Old nice palace",
    time: "12:30 PM",
    date: "9th June 2022",
  },
  {
    order: "Order 311",
    distance: "2.5km",
    status: "Active",
    address: "3rd Ave road, Ikot Ansa",
    address2: "24th Highway road, Old nice palace",
    time: "12:30 PM",
    date: "9th June 2022",
  },
];

let data1 = [];
let data2 = [];

data.map((d) =>
  d.status === "Delivered" || d.status === "Canceled"
    ? data1.push(d)
    : data2.push(d)
);

function Orders() {
  return (
    <>
      <div className="flex-1 flex justify-between items-center px-2 py-2 bg-[#4D6A3F] text-sm font-semibold mb-2">
        <div className="px-2 w-[45%] flex justify-between items-center">
          <span>Completed</span>
          <span>Status</span>
        </div>
        <div className="px-2 w-[45%] flex justify-between items-center">
          <span>Active</span>
          <span>Status</span>
        </div>
      </div>
      <div className="flex-1 flex justify-between items-start px-2 py-2 overflow-y-auto custom-scrollbar max-h-[20rem]">
        <div className="w-[45%] ">
          {data1.map((d) => (
            <div className="flex justify-between items-start last:pt-2 last:pb-0 last:border-b-0 py-3 border-b border-b-stone-300">
              <div className="space-y-1 w-2/3">
                <div className="flex justify-start items-start gap-1">
                  <span className="text-xs w-[4rem]">{d.order}</span>
                  <span className="flex items-center justify-center text-[.6rem] text-[#0D99FF] bg-blue-900 w-[2.8rem] h-[1.3rem] rounded-md">
                    {d.distance}
                  </span>
                </div>
                <div className="text-xs flex items-center justify-start gap-1">
                  <span className="w-3 h-3 rounded-full bg-green-500 flex justify-center items-center">
                    <span className="block w-[6px] h-[6px] rounded-full bg-gray-800"></span>
                  </span>
                  <span>{d.address}</span>
                </div>
              </div>
              <div className="px-2 space-y-1 w-1/3">
                <div className="text-xs flex items-center justify-end gap-1">
                  <span
                    className={`block w-2 h-2 rounded-full ${
                      d.status === "Delivered" ? "bg-green-600" : "bg-red-800"
                    }`}
                  ></span>
                  <span>{d.status}</span>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="text-xs">{d.time}</span>
                  <span className="text-xs">{d.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[45%]">
          {data2.map((d) => (
            <div className="flex justify-between items-start last:pt-2 last:pb-0 last:border-b-0 py-3 border-b border-b-stone-300">
              <div className="space-y-1 w-2/3">
                <div className="flex justify-start items-start gap-1">
                  <span className="text-xs w-[4rem]">{d.order}</span>
                  <span className="flex items-center justify-center text-[.6rem] text-[#0D99FF] bg-blue-900 w-[2.8rem] h-[1.3rem] rounded-md">
                    {d.distance}
                  </span>
                </div>
                <div className="text-xs flex items-center justify-start gap-1">
                  <span className="w-3 h-3 rounded-full bg-green-500 flex justify-center items-center">
                    <span className="block w-[6px] h-[6px] rounded-full bg-gray-800"></span>
                  </span>
                  {d.address}
                </div>
              </div>
              <div className="px-2 space-y-1 w-1/3">
                <div className="text-xs flex items-center justify-end gap-1">
                  <span
                    className={`block w-2 h-2 rounded-full ${
                      d.status === "Active" ? "bg-green-600" : "bg-orange-500"
                    }`}
                  ></span>
                  <span>{d.status}</span>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="text-xs">{d.time}</span>
                  <span className="text-xs">{d.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Orders;
