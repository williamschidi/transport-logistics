import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Button from "../utils/Button";
import SearchBar from "../utils/SearchBar";

const data = [
  {
    employeeId: 1001,
    employeeName: "Favour",
    emailAddress: "Favy@gmail.com",
    contactNumber: +2347044991143,
    job: "Driver",
    location: "Lagos",
    status: "Active",
  },
  {
    employeeId: 1002,
    employeeName: "Daniel",
    emailAddress: "Danny1@gmail.com",
    contactNumber: +2348090991143,
    job: "Customer",
    location: "Abia",
    status: "Pending",
  },
  {
    employeeId: 1003,
    employeeName: "Emmanuel",
    emailAddress: "Emma2020@gmail.com",
    contactNumber: +2347044001190,
    job: "Driver",
    location: "Enugus",
    status: "Active",
  },
  {
    employeeId: 1004,
    employeeName: "William",
    emailAddress: "William@gmail.com",
    contactNumber: +2347060141143,
    job: "Driver",
    location: "Abuja",
    status: "pending",
  },
  {
    employeeId: 1007,
    employeeName: "Henry",
    emailAddress: "Henry@gmail.com",
    contactNumber: +2347033001143,
    job: "Driver",
    location: "Rivers",
    status: "Active",
  },
  {
    employeeId: 1008,
    employeeName: "Daniel",
    emailAddress: "Daniel@gmail.com",
    contactNumber: +2349123561191,
    job: "Customer",
    location: "Ogun",
    status: "Active",
  },
];

function EmployeesData() {
  const [inputValue, setInputValue] = useState("");
  function handleOnChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div className="flex-1">
      <header className="flex justify-between items-center py-3">
        <p className="text-xs">Employees</p>
        <SearchBar
          color="#6b7280"
          bg="#f5f5f4"
          py="8px"
          pl="32px"
          inputWidth="14rem"
          iconWidth="20"
          left="8px"
        />

        <div className="flex justify-between items-center gap-4">
          <div className="flex justify-center items-center gap-1">
            <Button color="#0d99ff" border="none">
              <Icon icon="la:file-excel-solid" width="12" height="12" />
              Export Report
            </Button>
            <Button color="#111827" bg="#0D99FF">
              <span>&#43;</span> Add Employee
            </Button>
          </div>
          <Button color="#fff" bg="#363A3D">
            <span>&#43;</span> Invite Driver
          </Button>
        </div>
      </header>
      <main className="w-full overflow-x-auto">
        <header className="flex justify-start items-center bg-[#4D6A3F] text-xs py-2 px-2 font-bold">
          <span className="flex-[1.5]">Employee ID</span>
          <span className="flex-[1.5]">Employee Name</span>
          <span className="flex-[2]">Email Address</span>
          <span className="flex-[2]">Contact Number</span>
          <span className="flex-1">Job</span>
          <span className="flex-1">Location</span>
          <span className="flex-1">Status</span>
        </header>
        {data.map((d, i) => (
          <div
            key={i}
            className="flex justify-start items-center text-xs w-[100%] px-2 py-3 hover:bg-gray-800 hover:cursor-pointer"
          >
            <span className="flex-[1.5]">{d.employeeId}</span>
            <span className="flex-[1.5]">{d.employeeName}</span>
            <span className="flex-[2]">{d.emailAddress}</span>
            <span className="flex-[2]">{d.contactNumber}</span>
            <span className="flex-1">{d.job}</span>
            <span className="flex-1">{d.location}</span>
            <span className="flex-1">{d.status}</span>
          </div>
        ))}
      </main>
    </div>
  );
}

export default EmployeesData;
