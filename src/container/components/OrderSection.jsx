const orders = [
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    driver: "William",
    status: "Delivered",
    amount: 400,
    action: "....",
  },
  {
    service: "Neighbourhood Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    driver: "William",
    status: "Pending",
    amount: 600,
    action: "....",
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    driver: "William",
    status: "Canceled",
    amount: 500,
    action: "....",
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    driver: "William",
    status: "Delivered",
    amount: 100,
    action: "....",
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    driver: "William",
    status: "Delivered",
    amount: 300,
    action: "....",
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    driver: "William",
    status: "Delivered",
    amount: 600,
    action: "....",
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    driver: "William",
    status: "Delivered",
    amount: 800,
    action: "....",
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    driver: "William",
    status: "Delivered",
    amount: 50,
    action: "....",
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    driver: "William",
    status: "Delivered",
    amount: 200,
    action: "....",
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    driver: "William",
    status: "Delivered",
    amount: 350,
    action: "....",
  },
];

function OrderSection() {
  return (
    <div className="w-[60%] ">
      <p className="text-xs py-2">Latest Orders</p>
      <div className="border border-gray-600 rounded-md">
        <div className="flex justify-between items-center py-2 px-4 text-xs bg-[#4D6A3F] rounded-tl-md rounded-tr-md">
          <span className="flex-[1.5]">Service</span>
          <span className="flex-1">Order ID</span>
          <span className="flex-1">Date</span>
          <span className="flex-1">Driver</span>
          <span className="flex-1">Status</span>
          <span className="flex-1">Amount</span>
          <span className="flex-[.5]">Action</span>
        </div>
        <div>
          {orders.map((order, i) => (
            <div
              key={i}
              className="flex justify-between items-center text-[.6rem] py-2 px-2 hover:bg-gray-800 hover:cursor-pointer"
            >
              <span className="flex-[1.5]">{order.service}</span>
              <span className="flex-1">{order.orderId}</span>
              <span className="flex-1">{order.date}</span>
              <span className="flex-1">{order.driver}</span>
              <span className="flex-1 flex justify-start items-center gap-1">
                <span
                  className={`inline-flex w-[.3rem] h-[.3rem] rounded-full ${
                    order.status === "Canceled"
                      ? "bg-[#EF0606]"
                      : order.status === "Pending"
                      ? "bg-[#F29A2E]"
                      : "bg-[#4CE13F]"
                  }`}
                ></span>
                {order.status}
              </span>
              <span className="flex-1">${order.amount}.00</span>
              <span className="flex-[.5] space-x-1 ">
                <span className="inline-flex w-[.2rem] h-[.2rem] bg-stone-50 rounded-full"></span>
                <span className="inline-flex w-[.2rem] h-[.2rem] bg-stone-50 rounded-full"></span>
                <span className="inline-flex w-[.2rem] h-[.2rem] bg-stone-50 rounded-full"></span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderSection;
