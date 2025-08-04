import { Outlet } from "react-router-dom";
import JusioHeader from "../../utils/JusioHeader";

function JusioMlm() {
  return (
    <div className="py-4 px-2 w-screen h-screen overflow-y-auto custom-scrollbar">
      <JusioHeader>
        <div className="space-y-1">
          <p className="text-xl font-semibold">Jusio</p>
          <p className="text-xs font-light tracking-wide">
            MultiLevel Management System
          </p>
        </div>
      </JusioHeader>
      <Outlet />
    </div>
  );
}
export default JusioMlm;
