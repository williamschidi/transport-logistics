import { Icon } from "@iconify/react";
import logo from "./../images/logo.svg";
import DashboardIcon from "./../images/apps.svg?react";
import List from "../components/List";
import ChildLists from "../components/ChildLists";

function Layout() {
  const listTextStyle = "text-sm font-normal ";
  const iconSize = "w-[22px] h-[22px] group-hover:text-purple-500";

  return (
    <main className="bg-gray-900 h-screen flex items-center justify-start text-stone-100 ">
      <aside className="flex flex-col space-y-4 bg-gray-800 max-h-screen text-sm overflow-y-scroll w-[16rem] px-2 py-4 m-2">
        <header href="#" className="flex items-center justify-start">
          <img src={logo} alt="logo" className="w-6 h-6" />
          <span className="text-xl font-semibold">HRMS</span>
        </header>

        <nav>
          <ul className="space-y-5 py-4">
            <List
              onHandleClick={(e) => handleClick(e, "tab-1")}
              dataSet="tab-1"
              icon={<DashboardIcon className={iconSize} />}
              title={<p className={listTextStyle}>Dashboard</p>}
            >
              <ChildLists items={[]} />
            </List>
            <List
              onHandleClick={(e) => handleClick(e, "tab-2")}
              dataSet="tab-2"
              icon={
                <Icon
                  icon="ci:users-group"
                  width="24"
                  height="24"
                  className={iconSize}
                />
              }
              title={<p className={listTextStyle}>All Employees</p>}
            >
              <ChildLists items={[]} />
            </List>
            <List
              onHandleClick={(e) => handleClick(e, "tab-3")}
              dataSet="tab-3"
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
              onHandleClick={(e) => handleClick(e, "tab-4")}
              dataSet="tab-4"
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
              onHandleClick={(e) => handleClick(e, "tab-5")}
              dataSet="tab-5"
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
              dataSet="tab-6"
              onHandleClick={(e) => handleClick(e, "tab-6")}
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
              dataSet="tab-7"
              onHandleClick={(e) => handleClick(e, "tab-7")}
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
              onHandleClick={(e) => handleClick(e, "tab-8")}
              dataSet="tab-8"
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
              onHandleClick={(e) => handleClick(e, "tab-9")}
              dataSet="tab-9"
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
              onHandleClick={(e) => handleClick(e, "tab-10")}
              dataSet="tab-10"
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
              onHandleClick={(e) => handleClick(e, "tab-11")}
              dataSet="tab-11"
              icon={<Icon icon="uil:clipboard-notes" width="24" height="24" />}
              title={<p className={listTextStyle}>Leaves</p>}
            >
              <ChildLists items={[]} />
            </List>

            <List
              onHandleClick={(e) => handleClick(e, "tab-12")}
              dataSet="tab-12"
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
              onHandleClick={(e) => handleClick(e, "tab-13")}
              dataSet="tab-13"
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
              onHandleClick={(e) => handleClick(e, "tab-14")}
              dataSet="tab-14"
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
              onHandleClick={(e) => handleClick(e, "tab-15")}
              dataSet="tab-15"
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
              onHandleClick={(e) => handleClick(e, "tab-16")}
              dataSet="tab-16"
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
              onHandleClick={(e) => handleClick(e, "tab-17")}
              dataSet="tab-17"
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
              onHandleClick={(e) => handleClick(e, "tab-18")}
              dataSet="tab-18"
              icon={
                <Icon
                  icon="gg:box"
                  width="24"
                  height="24"
                  className={iconSize}
                />
              }
              title={<p className={listTextStyle}>Billing</p>}
            >
              <ChildLists items={[]} />
            </List>

            <List
              onHandleClick={(e) => handleClick(e, "tab-19")}
              dataSet="tab-19"
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
              onHandleClick={(e) => handleClick(e, "tab-20")}
              dataSet="tab-20"
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
              onHandleClick={(e) => handleClick(e, "tab-11")}
              dataSet="tab-21"
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
          </ul>
        </nav>
      </aside>
      <section></section>
    </main>
  );
}

export default Layout;
