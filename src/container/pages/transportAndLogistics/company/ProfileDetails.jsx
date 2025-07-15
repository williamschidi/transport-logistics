import { Icon } from "@iconify/react/dist/iconify.js";
import OwnershipDetails from "../../../components/companyProfile/OwnerShipDetail";
import { useState } from "react";
import CompanyInfo from "../../../components/companyProfile/CompanyInfo";
import Documents from "../../../components/companyProfile/Documents";
import AccountAccess from "../../../components/companyProfile/AccountAccess";

function ProfileDetails() {
  const [tab, setTab] = useState("ownerInfo");

  function handleTab(x) {
    setTab(x);
  }

  return (
    <>
      <ul className="flex justify-between items-center pb-2">
        <li
          className={`flex justify-center items-center gap-2 text-xs font-semibold hover:cursor-pointer pb-2 border-b-2 ${
            tab === "ownerInfo"
              ? "text-[#7152F3]  border-b-[#7152F3]"
              : "border-b-gray-900"
          }`}
          onClick={() => handleTab("ownerInfo")}
        >
          <Icon icon="gridicons:user" width="18" height="18" />
          <span>Owner Information</span>
        </li>
        <li
          className={`flex justify-center items-center gap-2 text-xs font-semibold hover:cursor-pointer pb-2 border-b-2 ${
            tab === "companyInfo"
              ? "text-[#7152F3] border-b-[#7152F3]"
              : "border-b-gray-900"
          }`}
          onClick={() => handleTab("companyInfo")}
        >
          <Icon icon="tabler:briefcase" width="16" height="16" />
          <span>Company Information</span>
        </li>
        <li
          className={`flex justify-center items-center gap-2 text-xs font-semibold hover:cursor-pointer pb-2 border-b-2 ${
            tab === "document"
              ? "text-[#7152F3]  border-b-[#7152F3]"
              : "border-b-gray-900"
          }`}
          onClick={() => handleTab("document")}
        >
          <Icon icon="iconoir:journal-page" width="16" height="16" />
          <span>Documents</span>
        </li>
        <li
          className={`flex justify-center items-center gap-2 text-xs font-semibold hover:cursor-pointer pb-2 border-b-2 ${
            tab === "account"
              ? "text-[#7152F3] border-b-[#7152F3]"
              : "border-b-gray-900"
          }`}
          onClick={() => handleTab("account")}
        >
          <Icon icon="streamline:padlock-square-1" width="14" height="14" />
          <span className="text-xs font-semibold">Account Access</span>
        </li>
      </ul>
      <hr className="border-gray-600" />

      <div className="w-[100%] space-y-2 py-4 max-h-[20rem] custom-scrollbar overflow-auto">
        {tab === "ownerInfo" && <OwnershipDetails />}
        {tab === "companyInfo" && <CompanyInfo />}
        {tab === "document" && <Documents />}
        {tab === "account" && <AccountAccess />}
      </div>
    </>
  );
}

export default ProfileDetails;
