import { useState } from "react";
import Action from "../../components/Action";
import Button from "../../components/Button";
import HrProfileAndNotification from "../../components/HrProfileAndNotification";
import PageNavigation from "../../components/PageNAvigation";
import SearchBar from "../../components/SearchBar";
import Spinner from "../../components/Spinner";

const orders = [
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    pickUpTime: "6:40 Am",
    driver: "William",
    status: "Delivered",
    endTime: "7:40 Am",
    amount: 400,
    action: <Action />,
  },
  {
    service: "Neighbourhood Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    pickUpTime: "6:40 Am",
    driver: "William",
    status: "Pending",
    endTime: "7:40 Am",
    amount: 600,
    action: <Action />,
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    pickUpTime: "6:40 Am",
    driver: "William",
    status: "Canceled",
    endTime: "7:40 Am",
    amount: 500,
    action: <Action />,
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    pickUpTime: "6:40 Am",
    driver: "William",
    status: "Delivered",
    endTime: "7:40 Am",
    amount: 100,
    action: <Action />,
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    pickUpTime: "6:40 Am",
    driver: "William",
    status: "Delivered",
    endTime: "7:40 Am",
    amount: 300,
    action: <Action />,
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    pickUpTime: "6:40 Am",
    driver: "William",
    status: "Delivered",
    endTime: "7:40 Am",
    amount: 600,
    action: <Action />,
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    pickUpTime: "6:40 Am",
    driver: "William",
    status: "Delivered",
    endTime: "7:40 Am",
    amount: 800,
    action: <Action />,
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    pickUpTime: "6:40 Am",
    driver: "William",
    status: "Delivered",
    endTime: "7:40 Am",
    amount: 50,
    action: <Action />,
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    pickUpTime: "6:40 Am",
    driver: "William",
    status: "Delivered",
    endTime: "7:40 Am",
    amount: 200,
    action: <Action />,
  },
  {
    service: "Regular Delivery",
    orderId: "#11232",
    date: "Jun 29, 2022",
    pickUpTime: "6:40 Am",
    driver: "William",
    status: "Delivered",
    endTime: "7:40 Am",
    amount: 350,
    action: <Action />,
  },
];

function OrderPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("schedule");

  function handleClick(x) {
    setActiveTab(x);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <section className="flex-1 h-screen flex flex-col overflow-y-auto ">
      <header className="flex justify-between items-center py-4 px-4">
        <div className=" space-y-1">
          <h3 className="text-sm font-semibold">GIG Orders</h3>
          <p className="text-[.6rem] font-light">GIG Orders Information</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <SearchBar inputWidth="13rem" py="8px" pl="32px" />
          <HrProfileAndNotification />
        </div>
      </header>
      <main className="relative px-4 py-4 border border-gray-600 rounded-md">
        <div className="flex justify-end items-center gap-4 pb-4">
          <Button
            bg={activeTab === "schedule" ? "#7152F3" : "#6B7280"}
            width="7rem"
            click={() => handleClick("schedule")}
          >
            Sheduled Order
          </Button>

          <Button
            bg={activeTab === "live" ? "#7152F3" : "#6B7280"}
            width="5rem"
            click={() => handleClick("live")}
          >
            Live Order
          </Button>
        </div>

        <div
          className={`transition-all duration-300 ${
            isLoading ? "blur-sm pointer-events-none" : ""
          }`}
        >
          <div>
            <header className="flex justify-between items-center bg-[#4D6A3F] text-[#f5f5f4] px-4 py-2 text-xs rounded-md">
              <span className="flex-[1.5]">Service</span>
              <span className="flex-1">Order ID</span>
              <span className="flex-1">Date</span>
              <span className="flex-1">PickUp Time</span>
              <span className="flex-1">Driver</span>
              <span className="flex-1">Status</span>
              <span className="flex-1">End Time</span>
              <span className="flex-1">Amount</span>
              <span className="flex-1">Action</span>
            </header>

            <div>
              {orders.map((order, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-[.6rem] py-2 px-2 hover:bg-gray-800 hover:cursor-pointer"
                >
                  <span className="flex-[1.5]">{order.service}</span>
                  <span className="flex-1">{order.orderId}</span>
                  <span className="flex-1">{order.date}</span>
                  <span className="flex-1">{order.pickUpTime}</span>
                  <span className="flex-1">{order.driver}</span>
                  <span className="flex-[1] flex justify-start items-center gap-1">
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
                  <span className="flex-1">{order.endTime}</span>
                  <span className="flex-1">${order.amount}.00</span>
                  <span className="flex-1">
                    <Action />
                    {/* <span className="inline-flex w-[.2rem] h-[.2rem] bg-stone-50 rounded-full"></span>
                  <span className="inline-flex w-[.2rem] h-[.2rem] bg-stone-50 rounded-full"></span>
                  <span className="inline-flex w-[.2rem] h-[.2rem] bg-stone-50 rounded-full"></span> */}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center px-4 pt-14">
            <div className="space-x-3">
              <span className="text-xs">Showing</span>
              <select className=" bg-transparent text-stone-700 border border-gray-800 rounded-md text-xs focus:outline-none py-1 px-1">
                {Array.from({ length: 10 }, (_, i) => (
                  <option className="text-xs" key={i}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-xs">Showing 1 of 10 out of 60 records</p>

            <PageNavigation
              num={4}
              color="#f5f5f4"
              bg="transparent"
              activeColor="#7152F3"
              activeBg="transparent"
              borderColor="#7152F3"
            />
          </div>
        </div>
        {isLoading && (
          <div className="absolute inset-0 z-10 flex justify-center items-center bg-black bg-opacity-30">
            <Spinner />
          </div>
        )}
      </main>
    </section>
  );
}

export default OrderPage;
