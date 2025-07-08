import Aside from "../components/Aside";
import DashboardIcon from "./../images/apps.svg?react";
import List from "../components/List";
import ChildLists from "../components/ChildLists";
import { useState } from "react";
import { Icon } from "@iconify/react";
import MainArea from "../components/MainArea";

function Layout() {
  const [displayTab, setDisplayTab] = useState("transportAndLogistics");
  const [currentTab, setCurrentTab] = useState("");

  const listTextStyle = "text-sm font-normal ";
  const iconSize = "w-[22px] h-[22px] ";

  console.log(displayTab);

  return (
    <main className="bg-gray-900 h-screen flex justify-start text-stone-100 overflow-y-auto">
      <Aside>
        <List
          dataSet="home"
          icon={<DashboardIcon className={iconSize} />}
          title={<span className={listTextStyle}>Dashboard</span>}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
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
          currentTab={currentTab}
          dataSet="allEmployees"
        >
          <ChildLists items={[]} />
        </List>
        <List
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
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
          currentTab={currentTab}
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
          currentTab={currentTab}
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
          currentTab={currentTab}
          setDisplayTab={setDisplayTab}
          icon={
            <Icon
              icon="fluent:vehicle-truck-bag-24-regular"
              width="24"
              height="24"
              className={iconSize}
            />
          }
          title={<span className={listTextStyle}>Transport And Logistics</span>}
        >
          <ChildLists
            items={["User", "Driver", "Order"]}
            setDisplayTab={setDisplayTab}
          />
        </List>

        <List
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
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
          currentTab={currentTab}
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
          currentTab={currentTab}
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
          currentTab={currentTab}
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
          currentTab={currentTab}
          dataSet="leaves"
          icon={<Icon icon="uil:clipboard-notes" width="24" height="24" />}
          title={<p className={listTextStyle}>Leaves</p>}
        >
          <ChildLists items={[]} />
        </List>

        <List
          dataSet="holiday"
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
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
          currentTab={currentTab}
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
          currentTab={currentTab}
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
          currentTab={currentTab}
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
          currentTab={currentTab}
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
          currentTab={currentTab}
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
          currentTab={currentTab}
          icon={
            <Icon icon="gg:box" width="24" height="24" className={iconSize} />
          }
          title={<p className={listTextStyle}>Billing</p>}
        >
          <ChildLists items={[]} />
        </List>

        <List
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
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
          currentTab={currentTab}
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
          currentTab={currentTab}
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
      </Aside>
      <MainArea displayTab={displayTab} />
    </main>
  );
}

export default Layout;
