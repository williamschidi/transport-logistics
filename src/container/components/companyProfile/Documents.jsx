import { Icon } from "@iconify/react/dist/iconify.js";

function Documents() {
  return (
    <>
      <div className="flex justify-between items-center gap-6 w-[100%] py-1">
        <button className=" w-[50%] border border-gray-600 py-2 px-4 rounded-md flex justify-between items-center">
          <span className="text-xs font-light">Approval Letter.pdf</span>
          <span className="flex justify-center items-center gap-2">
            <Icon icon="mynaui:eye" width="16" height="16" />
            <Icon icon="hugeicons:download-01" width="16" height="16" />
          </span>
        </button>
        <button className=" w-[50%] border border-gray-600 py-2 px-4 rounded-md flex justify-between items-center">
          <span className="text-xs font-light">CAC-Registration.pdf</span>
          <span className="flex justify-center items-center gap-2">
            <Icon icon="mynaui:eye" width="16" height="16" />
            <Icon icon="hugeicons:download-01" width="16" height="16" />
          </span>
        </button>
      </div>

      <div className="flex justify-between items-center gap-6 w-[100%] py-1">
        <button className=" w-[50%] border border-gray-600 py-2 px-4 rounded-md flex justify-between items-center">
          <span className="text-xs font-light">Payment Slip_May.pdf</span>
          <span className="flex justify-center items-center gap-2">
            <Icon icon="mynaui:eye" width="16" height="16" />
            <Icon icon="hugeicons:download-01" width="16" height="16" />
          </span>
        </button>
        <button className=" w-[50%] border border-gray-600 py-2 px-4 rounded-md flex justify-between items-center">
          <span className="text-xs font-light">VIs and FRSC_May.pdf</span>
          <span className="flex justify-center items-center gap-2">
            <Icon icon="mynaui:eye" width="16" height="16" />
            <Icon icon="hugeicons:download-01" width="16" height="16" />
          </span>
        </button>
      </div>

      <div className="flex justify-between items-center gap-6 w-[100%] py-1">
        <button className=" w-[50%] border border-gray-600 py-2 px-4 rounded-md flex justify-between items-center">
          <span className="text-xs font-light">Reliefing Letter.pdf</span>
          <span className="flex justify-center items-center gap-2">
            <Icon icon="mynaui:eye" width="16" height="16" />
            <Icon icon="hugeicons:download-01" width="16" height="16" />
          </span>
        </button>
        <button className="w-[50%] border border-gray-600 py-2 px-4 rounded-md flex justify-between items-center">
          <span className="text-xs font-light">CAC-Memorandom.pdf</span>
          <span className="flex justify-center items-center gap-2">
            <Icon icon="mynaui:eye" width="16" height="16" />
            <Icon icon="hugeicons:download-01" width="16" height="16" />
          </span>
        </button>
      </div>
    </>
  );
}

export default Documents;
