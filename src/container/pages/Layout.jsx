import { Icon } from "@iconify/react";
import logo from "./../images/logo.svg";
import DashboardIcon from "./../images/apps.svg?react";
import List from "../components/List";
import ChildLists from "../components/ChildLists";
import { useState } from "react";

function Layout() {
  const listTextStyle = "text-sm font-normal ";
  const iconSize = "w-[22px] h-[22px] group-hover:text-purple-500";
  const [currentTab, setCurrentTab] = useState("home");
  console.log(currentTab);
  return (
    <main className="bg-gray-900 h-screen flex items-center justify-start text-stone-100 ">
      <aside className="flex flex-col space-y-4 bg-gray-800 max-h-screen text-sm overflow-y-scroll w-[16rem] px-2 py-4 m-2">
        <header href="#" className="flex items-center justify-start">
          <img src={logo} alt="logo" className="w-6 h-6" />
          <span className="text-xl font-semibold">HRMS</span>
        </header>

        <nav className="space-y-5 py-4">
          <List
            dataSet="home"
            icon={<DashboardIcon className={iconSize} />}
            title={<span className={listTextStyle}>Dashboard</span>}
            setCurrentTab={setCurrentTab}
          >
            <ChildLists items={[]} />
          </List>
          <List
            icon={
              <Icon
                icon="ci:users-group"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>All Employees</p>}
            setCurrentTab={setCurrentTab}
            dataSet="allEmployees"
          >
            <ChildLists items={[]} />
          </List>
          <List
            setCurrentTab={setCurrentTab}
            dataSet="allDepartment"
            icon={
              <Icon
                icon="streamline-flex:user-collaborate-group"
                width="14"
                height="14"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>All Department</p>}
          >
            <ChildLists items={[]} />
          </List>
          <List
            dataSet="attendants"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon
                icon="mdi:calendar-tick-outline"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Attendants</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            dataSet="payroll"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon
                icon="mage:dollar"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Payroll</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            dataSet="transportAndLogistics"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon
                icon="fluent:vehicle-truck-bag-24-regular"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={
              <span className={listTextStyle}>Transport And Logistics</span>
            }
          >
            <ChildLists items={["User", "Driver", "Order"]} />
          </List>

          <List
            setCurrentTab={setCurrentTab}
            dataSet="eCommerce"
            icon={
              <Icon
                icon="ri:money-pound-circle-line"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={<span className={listTextStyle}>E-Commerce</span>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            setCurrentTab={setCurrentTab}
            dataSet="jusioMlm"
            icon={
              <Icon
                icon="mage:dollar"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Jusio MLM</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            setCurrentTab={setCurrentTab}
            dataSet="brainBlock"
            icon={
              <Icon
                icon="stash:user-clock"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Brain Block</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            dataSet="candidates"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon
                icon="mage:users"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Candidates</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            setCurrentTab={setCurrentTab}
            dataSet="leaves"
            icon={<Icon icon="uil:clipboard-notes" width="24" height="24" />}
            title={<p className={listTextStyle}>Leaves</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            dataSet="holiday"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon
                icon="iconoir:journal-page"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Holiday</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            dataSet="operations"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon
                icon="lineicons:gears-3"
                width="24"
                height="25"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Operation</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            dataSet="officeBudget"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon
                icon="streamline:bag-dollar"
                width="14"
                height="14"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Office Budget</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            dataSet="stock&Inventory"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon
                icon="fluent:notepad-edit-16-regular"
                width="16"
                height="16"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Stock & Inventory</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            dataSet="ticket"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon
                icon="fluent:notepad-12-regular"
                width="12"
                height="12"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Ticket</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            dataSet="maintenance"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon
                icon="lineicons:gears-3"
                width="24"
                height="25"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Maintenance</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            dataSet="billing"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon icon="gg:box" width="24" height="24" className={iconSize} />
            }
            title={<p className={listTextStyle}>Billing</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            setCurrentTab={setCurrentTab}
            dataSet="setting"
            icon={
              <Icon
                icon="uil:setting"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Setting</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            setCurrentTab={setCurrentTab}
            dataSet="payment&Transactions"
            icon={
              <Icon
                icon="stash:wallet"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Payment & Transactions</p>}
          >
            <ChildLists items={[]} />
          </List>

          <List
            dataSet="messages"
            setCurrentTab={setCurrentTab}
            icon={
              <Icon
                icon="mage:message-conversation"
                width="24"
                height="24"
                className={iconSize}
              />
            }
            title={<p className={listTextStyle}>Messages</p>}
          >
            <ChildLists items={[]} />
          </List>
        </nav>
      </aside>
      <section></section>
    </main>
  );
}

export default Layout;
