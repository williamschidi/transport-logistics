import EarningChart from "../../components//EarningChart";
import RevenueChart from "../../components/RevenueChart";
import SaleChart from "../../components/SaleChart";
import DeriversDetail from "../../components/DriversDetail";
import ChatSection from "../../components/ChatSection";
import OrderSection from "../../components/OrderSection";
import ActiveOffices from "../../components/ActiveOffices";
import SalesTrack from "../../components/SalesTrack";
import EmployeesData from "../../components/EmployeesData";

import HrProfileAndNotification from "../../utils/HrProfileAndNotification";
import SearchBar1 from "../../utils/SearchBar1";

function TransportAndLogisticsHomePage() {
  return (
    <section className="flex-1 h-screen flex flex-col overflow-y-auto ">
      <header className="flex justify-between items-center py-2 pl-2 pr-4">
        <SearchBar1 size="md" iconSize="md" />
        <HrProfileAndNotification />
      </header>
      <main className=" flex-1 overflow-y-auto px-2 pb-2 max-h-screen custom-scrollbar">
        <div className="h-[21rem] grid grid-cols-10 grid-rows-6 gap-2">
          <SaleChart />
          <EarningChart />
          <RevenueChart />
        </div>

        <div className="flex justify-start items-center w-[100%]">
          <DeriversDetail />
          <ActiveOffices />
        </div>
        <div className="flex justify-start items-start gap-4 mt-6">
          <ChatSection />
          <OrderSection />
        </div>
        <div className="pt-4 pb-2 flex justify-start items-start gap-2 w-[100%]">
          <SalesTrack />
          <EmployeesData />
        </div>
      </main>
      {/* <Spinner /> */}
    </section>
  );
}
export default TransportAndLogisticsHomePage;
