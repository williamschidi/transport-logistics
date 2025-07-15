function AccountAccess() {
  return (
    <>
      <div className="flex justify-between items-center gap-6 w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Name</span>
          <span className="text-xs font-semibold w-[10rem]">
            Brooklin james
          </span>
        </div>

        <div className="flex flex-col gap-1 w-[10rem]">
          <span className="text-xs font-light">Bank</span>
          <span className="text-xs font-semibold w-[10rem]">GTB</span>
        </div>
      </div>
      <hr className="border-gray-600" />

      <div className="flex justify-between items-center gap-6  w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Account Name</span>
          <span className="text-xs font-semibold w-[10rem]">
            GIG Logistics LTD
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Account Number</span>
          <span className="text-xs font-semibold w-[10rem]">2175545908</span>
        </div>
      </div>
      <hr className="border-gray-600" />
      <div className="flex justify-between items-center gap-6 w-[80%] py-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Currency</span>
          <span className="text-xs font-semibold w-[10rem]">USDT</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-light w-[10rem]">Account Address</span>
          <span className="text-xs font-semibold w-[10rem]">
            x0hjj7klsd2pdjnd2kj37doidmk08sdu
          </span>
        </div>
      </div>
      <hr className="border-gray-600" />
    </>
  );
}
export default AccountAccess;
