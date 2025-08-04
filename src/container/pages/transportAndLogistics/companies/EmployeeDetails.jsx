import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../../utils/Button";
import FooterNavigation from "../../../utils/FooterNavigation";
import image from "../../../images/chidi.jpg";
import PagesHeader from "../../../utils/PagesHeader";
import Action from "../../../components/Action";
import Edit from "../../../components/EditDriverDetails";
import SearchBar1 from "../../../utils/SearchBar1";
import { useParams } from "react-router-dom";

const data = [
  {
    employeeName: "Darlene Robertson",
    employeeID: "345321231",
    designation: "Driver",
    department: "Bus",
    type: "Remote",
    status: "probation",
  },
  {
    employeeName: "Cody Fisher",
    employeeID: "987890345",
    designation: "Driver",
    department: "Car",
    type: "Remote",
    status: "permanent",
  },
  {
    employeeName: "Cody Fisher",
    employeeID: "453367122",
    designation: "Rider",
    department: "Bike",
    type: "Remote",
    status: "probation",
  },
  {
    employeeName: "Dianne Russell",
    employeeID: "345321231",
    designation: "Driver",
    department: "Truck",
    type: "Remote",
    status: "permanent",
  },
  {
    employeeName: "Savannah Nguyen",
    employeeID: "345321231",
    designation: "Driver",
    department: "Suv",
    type: "Remote",
    status: "permanent",
  },
  {
    employeeName: "Darlene Robertson",
    employeeID: "345321231",
    designation: "Driver",
    department: "Bus",
    type: "Remote",
    status: "probation",
  },
  {
    employeeName: "Darlene Robertson",
    employeeID: "345321231",
    designation: "Driver",
    department: "Bus",
    type: "Remote",
    status: "probation",
  },
  {
    employeeName: "Darlene Robertson",
    employeeID: "345321231",
    designation: "Driver",
    department: "Bus",
    type: "Remote",
    status: "probation",
  },
  {
    employeeName: "Darlene Robertson",
    employeeID: "345321231",
    designation: "Driver",
    department: "Bus",
    type: "Remote",
    status: "probation",
  },
  {
    employeeName: "Darlene Robertson",
    employeeID: "345321231",
    designation: "Driver",
    department: "Bus",
    type: "Remote",
    status: "probation",
  },
  {
    employeeName: "Darlene Robertson",
    employeeID: "345321231",
    designation: "Driver",
    department: "Bus",
    type: "Remote",
    status: "probation",
  },
  {
    employeeName: "Darlene Robertson",
    employeeID: "345321231",
    designation: "Driver",
    department: "Bus",
    type: "Remote",
    status: "probation",
  },
  {
    employeeName: "Darlene Robertson",
    employeeID: "345321231",
    designation: "Driver",
    department: "Bus",
    type: "Remote",
    status: "probation",
  },
  {
    employeeName: "Darlene Robertson",
    employeeID: "345321231",
    designation: "Driver",
    department: "Bus",
    type: "Remote",
    status: "probation",
  },
  {
    employeeName: "Darlene Robertson",
    employeeID: "345321231",
    designation: "Driver",
    department: "Bus",
    type: "Remote",
    status: "probation",
  },
];

function EmployeeDetails() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const { companyID } = useParams();
  console.log(companyID);

  function handleOpenPopUp(x) {
    setShowPopUp(true);
    setSelectedEmployee(x);
  }

  function handleClosePopUp() {
    setSelectedEmployee(null);
    setShowPopUp(false);
  }

  return (
    <section className="flex-1 px-3 py-2 relative">
      <PagesHeader>
        <h3 className="text-sm font-semibold">GIG Employee</h3>
        <p className="text-[.6rem] font-light">GIG Employee Information</p>
      </PagesHeader>
      <section className="border border-gray-700 rounded-md max-h-[31rem] overflow-y-auto custom-scrollbar">
        <header className="flex justify-between items-center px-2 py-2 ">
          <SearchBar1 size="md" iconSize="md" />

          <div className="flex justify-between items-center gap-4">
            <Button btnSize="lg" bg="#7152F3">
              <Icon icon="ei:plus" width="20" height="20" />
              <span>Add new Employee</span>
            </Button>
            <Button>
              <Icon icon="mage:filter" width="14" height="14" />
              <span>Filter</span>
            </Button>
          </div>
        </header>
        <main>
          <header className="flex justify-between items-center font-semibold pt-4 border-b-[1px] border-b-gray-800 text-[#f5f5f4] px-4 py-2 text-xs rounded-md">
            <span className="flex-[1.5]">Employee Name</span>
            <span className="flex-1 text-center">Employee ID</span>
            <span className="flex-1 text-center">Designation</span>
            <span className="flex-1 text-center">Department</span>
            <span className="flex-1 text-center">Type</span>
            <span className="flex-1 text-center">Status</span>
            <span className="flex-1 text-end">Action</span>
          </header>
          {data.map((x, i) => (
            <div
              onClick={() => handleOpenPopUp(x)}
              key={i}
              className="flex justify-between items-center text-[.6rem] py-2 px-2 hover:bg-gray-800 border-b-[1px] border-b-gray-800 hover:cursor-pointer"
            >
              <span className="flex-[1.5] flex items-center justify-start gap-2">
                <img
                  src={image}
                  alt="image"
                  className="w-[1.2rem] h-[1.2rem] rounded-full"
                />
                {x.employeeName}
              </span>

              <span className="flex-1 text-center">{x.employeeID}</span>
              <span className="flex-1 text-center">{x.designation}</span>
              <span className="flex-1 text-center">{x.department}</span>
              <span className="flex-1 text-center">{x.type}</span>
              <span
                className={`py-1 flex-1 text-center rounded-md text-[#7152F3] bg-[#7152F31A]`}
              >
                {x.status}
              </span>

              <span className="flex-1 flex items-center justify-end ">
                <Action />
              </span>
            </div>
          ))}
        </main>
        <FooterNavigation
          num={4}
          color="#f5f5f4"
          bg="transparent"
          activeColor="#7152F3"
          activeBg="transparent"
          borderColor="#7152F3"
        />
      </section>
      {showPopUp && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
          <Edit
            handleClosePopUp={handleClosePopUp}
            selectedEmployee={selectedEmployee}
          />
        </div>
      )}
    </section>
  );
}
export default EmployeeDetails;
