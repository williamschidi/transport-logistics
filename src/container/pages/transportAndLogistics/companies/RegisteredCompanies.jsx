import { Icon } from "@iconify/react/dist/iconify.js";
import PagesHeader from "../../../utils/PagesHeader";
import Button from "../../../utils/Button";
import Action from "../../../components/Action";
import image from "../../../images/chidi.jpg";
import { NavLink } from "react-router-dom";
import FooterNavigation from "../../../utils/FooterNavigation";
import SearchBar1 from "../../../utils/SearchBar1";

const orders = [
  {
    companyName: "GIG Logistics",
    companyID: "11232",
    serviceType: "Move light",
    contactEmail: "gig@gmail.com",
    HQ: "Abuja",
    status: "Delivered",
    image: image,
  },
  {
    companyName: "NeighbGIG Logistics",
    companyID: "11232",
    serviceType: "Move light",
    contactEmail: "gig@gmail.com",
    HQ: "Abuja",
    status: "Pending",
    image: image,
  },
  {
    companyName: "GIG Logistics",
    companyID: "11232",
    serviceType: "Logistics",
    contactEmail: "gig@gmail.com",
    HQ: "Abuja",
    status: "Canceled",
    image: image,
  },
  {
    companyName: "GIG Logistics",
    companyID: "11232",
    serviceType: "Logistics",
    contactEmail: "gig@gmail.com",
    HQ: "Abuja",
    status: "Delivered",
    image: image,
  },
  {
    companyName: "GIG Logistics",
    companyID: "11232",
    serviceType: "Logistics",
    contactEmail: "gig@gmail.com",
    HQ: "Abuja",
    status: "Delivered",
    image: image,
  },
  {
    companyName: "GIG Logistics",
    companyID: "11232",
    serviceType: "Logistics",
    contactEmail: "gig@gmail.com",
    HQ: "Abuja",
    status: "Delivered",
    image: image,
  },
  {
    companyName: "GIG Logistics",
    companyID: "11232",
    serviceType: "Move light",
    contactEmail: "gig@gmail.com",
    HQ: "Abuja",
    status: "Delivered",
    image: image,
  },
  {
    companyName: "GIG Logistics",
    companyID: "11232",
    serviceType: "Move light",
    contactEmail: "wilson@gmail.com",
    HQ: "Lagos",
    status: "Delivered",
    image: image,
  },
  {
    companyName: "GIG Logistics",
    companyID: "11232",
    serviceType: "Move light",
    contactEmail: "gig@gmail.com",
    HQ: "Abuja",
    status: "Delivered",
    image: image,
  },
  {
    companyName: "GIG Logistics",
    companyID: "11232",
    serviceType: "Logistics",
    contactEmail: "gig@gmail.com",
    HQ: "Abuja",
    status: "Delivered",
    image: image,
  },
];

function RegisteredCompanies() {
  return (
    <div className="flex-1 px-3 py-2">
      <PagesHeader>
        <h3 className="text-sm font-semibold">All Company</h3>
        <p className="text-[.6rem] font-light">All Company Information</p>
      </PagesHeader>
      <div className="border border-gray-700 rounded-md max-h-[31rem] overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center px-2 py-2 ">
          <SearchBar1 />
          <div className="flex justify-between items-center gap-4">
            <Button color="#0d99ff" border="none">
              <Icon icon="la:file-excel-solid" width="12" height="12" />
              Export Report
            </Button>
            <Button btnSize="lg" bg="#7152F3">
              <Icon icon="formkit:add" width="12" height="12" />
              Add new company
            </Button>
            <Button>
              <Icon icon="mage:filter" width="12" height="12" /> Filter
            </Button>
          </div>
        </div>
        <div>
          <header className="flex justify-between items-center font-semibold pt-4 border-b-[1px] border-b-gray-800 text-[#f5f5f4] px-4 py-2 text-xs rounded-md">
            <span className="flex-[1.5]">Company Name</span>
            <span className="flex-1">Company ID</span>
            <span className="flex-1">Service Type</span>
            <span className="flex-1">Contact Email</span>
            <span className="flex-1">H/Q</span>
            <span className="flex-1">Status</span>
            <span className="flex-1">Action</span>
          </header>

          <div>
            {orders.map((order, i) => (
              <NavLink
                to={`${order.companyID}`}
                key={i}
                className="flex justify-between items-center text-[.6rem] py-2 px-2 hover:bg-gray-800 border-b-[1px] border-b-gray-800 hover:cursor-pointer"
              >
                <span className="flex-[1.5] flex items-center justify-start gap-2">
                  <img
                    src={order.image}
                    alt="image"
                    className="w-[1.2rem] h-[1.2rem] rounded-full"
                  />
                  {order.companyName}
                </span>
                <span className="flex-1">{order.companyID}</span>
                <span className="flex-1">{order.serviceType}</span>
                <span className="flex-1">{order.contactEmail}</span>
                <span className="flex-1">{order.HQ}</span>
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

                <span className="flex-1">
                  <Action />
                </span>
              </NavLink>
            ))}
          </div>
        </div>

        <FooterNavigation
          num={4}
          color="#f5f5f4"
          bg="transparent"
          activeColor="#7152F3"
          activeBg="transparent"
          borderColor="#7152F3"
        />
      </div>
    </div>
  );
}

export default RegisteredCompanies;
