import { Icon } from "@iconify/react/dist/iconify.js";
import img1 from "./../images/photo1.png";
import img2 from "./../images/photo2.png";
import img3 from "./../images/photo3.png";
import img4 from "./../images/photo4.png";
import { NavLink } from "react-router-dom";

function JusioHeader({ children }) {
  return (
    <div className="px-4 py-2 space-y-4 bg-gradient-to-r from-gray-800 to-gray-950 shadow-xl rounded-xl">
      <div className="flex justify-between items-center ">
        <div>{children}</div>
        <div className="flex justify-between items-center gap-4 w-[18rem]">
          <div className=" flex items-center">
            <span className="inline-block w-[2rem] h-[2rem] ">
              <img
                src={img1}
                alt="pic1"
                className="w-[100%] rounded-full border-[3px] border-gray-900 "
              />
            </span>
            <span className="inline-block w-[2rem] h-[2rem]">
              <img
                src={img2}
                alt="pic2"
                className="w-[100%] rounded-full ml-[-12px] border-[3px] border-gray-900"
              />
            </span>
            <span className="inline-block w-[2rem] h-[2rem] ">
              <img
                src={img3}
                alt="pic3"
                className="w-[100%] rounded-full  ml-[-24px] border-[3px] border-gray-900"
              />
            </span>
            <span className="inline-block w-[2rem] h-[2rem] ">
              <img
                src={img4}
                alt="pic4"
                className="w-[100%] rounded-full ml-[-36px]  border-[3px] border-gray-900"
              />
            </span>
            <span className="inline-flex items-center justify-center w-[1.8rem] h-[1.8rem] rounded-full ml-[-48px] bg-gray-800 text-xs font-light">
              +4
            </span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <Icon
              icon="ic:outline-share"
              width="24"
              height="24"
              className="w-[1rem] h-[1rem]"
            />
            <span className="text-xs">Share</span>
          </div>
          <div className="h-[1.6rem] w-[1.6rem] bg-gray-800  rounded-md inline-flex justify-center items-center">
            <Icon
              icon="iconamoon:edit-thin"
              width="24"
              height="24"
              className="w-[1.2rem] h-[1.2rem]"
            />
          </div>
        </div>
      </div>
      <hr className="border-gray-800" />
      <ul className="flex justify-start items-center gap-8 py-3">
        <li>
          <NavLink
            to="block"
            className={({ isActive }) =>
              `inline-flex justify-between items-center gap-2 pb-2 ${
                isActive ? "border-b-[#B6F09C]" : ""
              }`
            }
          >
            <Icon icon="lucide-lab:triangle-stripes" width="12" height="12" />
            <span className="text-xs">Blocks</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="chat"
            className={({ isActive }) =>
              `inline-flex justify-between items-center gap-2 pb-2 ${
                isActive ? "border-b-[#B6F09C]" : ""
              }`
            }
          >
            <Icon icon="ep:chat-round" width="12" height="12" />
            <span className="text-xs">Chat</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="library"
            className={({ isActive }) =>
              `inline-flex justify-between items-center gap-2 pb-2 ${
                isActive ? "border-b-[#B6F09C]" : ""
              }`
            }
          >
            <Icon
              icon="carbon:ibm-software-watsonx-document-library"
              width="12"
              height="12"
            />
            <span className="text-xs">Library</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default JusioHeader;
