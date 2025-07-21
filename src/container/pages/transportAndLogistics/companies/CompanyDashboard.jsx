import { Icon } from "@iconify/react/dist/iconify.js";
import PagesHeader from "../../../utils/PagesHeader";
import image from "../../../images/chidi.jpg";
import Button from "../../../utils/Button";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
// import OwnershipDetails from "../../../components/companyProfile/OwnerShipDetail";

// const data = [
//   {
//     title: "Ownership Information",
//     details: {
//       firstName: "Brooklyn",
//       lastName: "Simmon",
//       mobileNumber: "0706883789",
//       email: "brooklyn@gmail.com",
//       dateOfBirth: "July 14 1995",
//       nIN: "2334409876",
//       gender: "Male",
//       nationality: "Nigeria",
//       address: "442 Golf Estate",
//       city: "Enugu",
//       state: "Enugu State",
//       zipCode: "436101",
//     },
//   },
//   {
//     title: "Company Information",
//     details: {
//       companyID: "2341908",
//       companyName: "God Is Good Motors",
//       companyType: "Logistics",
//       email: "GIG.tis.example@gmail.com",
//       registration: "TRC-12345",
//       designation: "Terminal",
//       workingDays: "5 days",
//       joiningDate: "july 22,2022",
//       officeLocation: "234 Mainland Trans-Ekulu Enugu",
//     },
//   },
//   { title: "Documents", details: {} },
//   {
//     title: "Account Details",
//     details: {
//       ownership: "Brooklyn James",
//       bankName: "GTB",
//       accountName: "GIG Logistics LTD",
//       accountNumber: "21500567902",
//       currency: "USDT",
//       accountAddress: "x0hjj7klsd2pdjnd2kj37doidmk08sdu",
//     },
//   },
// ];

function CompanyDashboard() {
  const { customerID } = useParams();
  // use this customerID to fetch customer data from DB
  const navigate = useNavigate();

  function navigateToEmployeeDetailPage() {
    navigate(`/companies/${customerID}/employees`);
  }

  return (
    <div className="flex-1 px-3 py-2">
      <PagesHeader>
        <p className="text-[.6rem] text-[#3AC977]">Verified</p>
        <p className="text-sm font-semibold">GIG Motors</p>
        <span className="text-[.6rem] font-normal flex justify-start items-center gap-2 text-gray-300">
          Company
          <Icon icon="fa6-solid:greater-than" width="6" height="6" />
          GIG Motors
        </span>
      </PagesHeader>

      <div className="border border-gray-700 rounded-md  py-2 px-2">
        <div className="flex justify-between items-end">
          <div className="flex justify-start items-center gap-3">
            <img
              src={image}
              alt=""
              className="w-[3.5rem] h-[3.5rem] rounded-md"
            />
            <div className="space-y-1">
              <p className="text-xs font-bold">God Is Good Motors</p>
              <p className="flex items-center justify-start gap-2">
                <span>
                  <Icon icon="tabler:briefcase" width="16" height="16" />
                </span>
                <span className="text-xs">Transport & Logistics</span>
              </p>
              <p className="flex items-center justify-start gap-2">
                <span>
                  <Icon icon="proicons:mail" width="16" height="16" />
                </span>
                <span className="text-xs">gig.mts@transport.com</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button
              bg="#7152F3"
              color="#fff"
              width="7rem"
              click={navigateToEmployeeDetailPage}
            >
              <Icon icon="gridicons:user" width="16" height="16" />
              <span>Employee</span>
            </Button>
            <Button bg="#7152F3" color="#fff" width="7rem">
              <Icon icon="lsicon:edit-outline" width="16" height="16" />{" "}
              <span>Edit</span>
              Profile
            </Button>
            <Button bg="#7152F3" color="#fff">
              Suspended
            </Button>
          </div>
        </div>
        <div className="flex justify-start items-start px-2 mt-10 gap-6">
          <aside>
            <ul className="border border-gray-700 rounded-md w-[12rem]">
              <li className="text-xs">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#7152F3] flex items-center justify-start gap-2 py-3 px-2"
                      : "flex items-center justitify-start gap-2 py-3 px-2"
                  }
                  to="profile"
                >
                  <Icon icon="gridicons:user" width="18" height="18" />
                  <span>Profile</span>
                </NavLink>
              </li>
              <li className="text-xs">
                <NavLink
                  to="order"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#7152F3] flex items-center justitify-start gap-2 py-3 px-2"
                      : "flex items-center justitify-start gap-2 py-3 px-2"
                  }
                >
                  <Icon
                    icon="mdi:calendar-tick-outline"
                    width="18"
                    height="18"
                  />
                  <span>Orders</span>
                </NavLink>
              </li>
              <li className="text-xs">
                <NavLink
                  to="rating"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#7152F3] flex items-center justitify-start gap-2 py-3 px-2"
                      : "flex items-center justitify-start gap-2 py-3 px-2"
                  }
                >
                  <Icon
                    icon="material-symbols-light:star-rounded"
                    width="24"
                    height="24"
                  />
                  <span>Rating</span>
                </NavLink>
              </li>
              <li className=" text-xs">
                <NavLink
                  to="sellHistory"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#7152F3] flex items-center justitify-start gap-2 py-3 px-2 "
                      : "flex items-center justitify-start gap-2 py-3 px-2"
                  }
                >
                  <Icon icon="uil:clipboard-notes" width="18" height="18" />
                  <span>Sell History</span>
                </NavLink>
              </li>
              <li className="text-xs">
                <NavLink
                  to="ticket"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#7152F3] flex items-center justitify-start gap-2 py-3 px-2"
                      : "flex items-center justitify-start gap-2 py-3 px-2"
                  }
                >
                  <Icon
                    icon="fluent:notepad-12-regular"
                    width="18"
                    height="18"
                  />
                  <span>Ticket</span>
                </NavLink>
              </li>
              <li className="text-xs">
                <NavLink
                  to="earning"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#7152F3] flex items-center justitify-start gap-2 py-3 px-2"
                      : "flex items-center justitify-start gap-2 py-3 px-2"
                  }
                >
                  <Icon icon="mdi:naira" width="18" height="18" />
                  <span>Earning</span>
                </NavLink>
              </li>
              <li className="text-xs">
                <NavLink
                  to="vehicle"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#7152F3] flex items-center justitify-start gap-2 py-3 px-2"
                      : "flex items-center justitify-start gap-2 py-3 px-2"
                  }
                >
                  <Icon
                    icon="fluent:vehicle-cab-16-regular"
                    width="18"
                    height="18"
                  />
                  <span>Vehicle</span>
                </NavLink>
              </li>
              <li className="text-xs">
                <NavLink
                  to="branch"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#7152F3] flex items-center justitify-start gap-2 py-3 px-2"
                      : "flex items-center justitify-start gap-2 py-3 px-2"
                  }
                >
                  <Icon
                    icon="teenyicons:house-outline"
                    width="16"
                    height="16"
                  />
                  <span>Branches</span>
                </NavLink>
              </li>
            </ul>
          </aside>
          <main className="flex-1 ">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
