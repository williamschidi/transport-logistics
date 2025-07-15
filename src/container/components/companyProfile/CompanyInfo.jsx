function CompanyInfo() {
  return (
    <>
      <div className="flex justify-between items-center gap-6 w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Company Id</span>
          <span className="text-xs font-semibold w-[10rem]">12349876</span>
        </div>

        <div className="flex flex-col gap-1 w-[10rem]">
          <span className="text-xs font-light">Company Name</span>
          <span className="text-xs font-semibold w-[10rem]">
            God Is Good Motors
          </span>
        </div>
      </div>
      <hr className="border-gray-600" />

      <div className="flex justify-between items-center gap-6  w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Company Type</span>
          <span className="text-xs font-semibold w-[10rem]">Logistics</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Email Address</span>
          <span className="text-xs font-semibold w-[10rem]">
            GIG.tis@example.com
          </span>
        </div>
      </div>
      <hr className="border-gray-600" />
      <div className="flex justify-between items-center gap-6 w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Registration </span>
          <span className="text-xs font-semibold w-[10rem]">RC 12349876</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Destination</span>
          <span className="text-xs font-semibold w-[10rem]">Terminal</span>
        </div>
      </div>
      <hr className="border-gray-600" />
      <div className="flex justify-between items-center gap-6  w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Working Days</span>
          <span className="text-xs font-semibold w-[10rem]">5 Days</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Joining Date</span>
          <span className="text-xs font-semibold w-[10rem]">July 10 2020</span>
        </div>
      </div>
      <hr className="border-gray-600" />
      <div className="flex justify-between items-center gap-6  w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light">Office Location</span>
          <span className="text-xs font-semibold">
            234 Mainland Trans-Ekulu Enugu
          </span>
        </div>
      </div>
      <hr className="border-gray-600" />
    </>
  );
}

export default CompanyInfo;
