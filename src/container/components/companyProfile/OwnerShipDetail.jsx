function OwnershipDetails() {
  return (
    <>
      <div className="flex justify-between items-center gap-6 w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">First Name</span>
          <span className="text-xs font-semibold w-[10rem]">Brooklin</span>
        </div>

        <div className="flex flex-col gap-1 w-[10rem]">
          <span className="text-xs font-light">Last Name</span>
          <span className="text-xs font-semibold w-[10rem]">Simmon</span>
        </div>
      </div>
      <hr className="border-gray-600 mr-4" />

      <div className="flex justify-between items-center gap-6  w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Mobile Number</span>
          <span className="text-xs font-semibold w-[10rem]">(07033889978)</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Email Address</span>
          <span className="text-xs font-semibold w-[10rem]">
            brooklin@example.com
          </span>
        </div>
      </div>
      <hr className="border-gray-600 mr-4" />
      <div className="flex justify-between items-center gap-6 w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Date of Birth </span>
          <span className="text-xs font-semibold w-[10rem]">July 14, 1995</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">NIN</span>
          <span className="text-xs font-semibold w-[10rem]">233444098878</span>
        </div>
      </div>
      <hr className="border-gray-600 mr-4" />
      <div className="flex justify-between items-center gap-6  w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Gender</span>
          <span className="text-xs font-semibold w-[10rem]">Male</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Nationality</span>
          <span className="text-xs font-semibold w-[10rem]">Nigeria</span>
        </div>
      </div>
      <hr className="border-gray-600 mr-4" />
      <div className="flex justify-between items-center gap-6  w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Address</span>
          <span className="text-xs font-semibold w-[10rem]">
            234 Mainland Trans-Ekulu Enugu
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">City</span>
          <span className="text-xs font-semibold w-[10rem]">Enugu</span>
        </div>
      </div>
      <hr className="border-gray-600 mr-4" />
      <div className="flex justify-between items-center gap-6  w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">State</span>
          <span className="text-xs font-semibold w-[10rem]">Enugu State</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">ZipCode</span>
          <span className="text-xs font-semibold w-[10rem]">401204</span>
        </div>
      </div>
      <hr className="border-gray-600 mr-4" />
    </>
  );
}

export default OwnershipDetails;
