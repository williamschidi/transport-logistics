import { Icon } from "@iconify/react/dist/iconify.js";
import { HiChevronDown } from "react-icons/hi";
import image1 from "../container/images/chidi.jpg";

function HrProfileAndNotification() {
  return (
    <div className="flex justify-start items-center gap-3">
      <div className="w-[2rem] h-[2rem] flex justify-center items-center bg-gray-700 rounded-md">
        <Icon icon="basil:notification-outline" width="24" height="24" />
      </div>
      <div className="flex justify-between items-center gap-2 border border-gray-600 rounded-md p-1">
        <img
          src={image1}
          alt="profile-pics"
          className="w-[1.7rem] h-[1.7rem] rounded-md"
        />

        <div className="">
          <p className="text-[.6rem] font-semibold">William Mike</p>
          <p className="text-[.5rem]">HR Manager</p>
        </div>
        <HiChevronDown />
      </div>
    </div>
  );
}
export default HrProfileAndNotification;
