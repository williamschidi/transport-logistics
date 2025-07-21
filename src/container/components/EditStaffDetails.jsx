function EditStaffDetails() {
  return (
    <main className="px-10 py-3 w-[50rem] m-auto space-y-6 bg-[#16151C] border border-[#16151C] z-10 rounded-lg  relative">
      <header className="text-center text-xl font-semibold pb-2">
        Staff Details
      </header>
      <div className="flex justify-between items-center w-[100%]">
        <section aria-label="driver data" className=" w-[45%]">
          <div className="flex justify-start items-center gap-3">
            <span className="flex justify-center items-center bg-[#fff] w-[2.2rem] h-[2.2rem] rounded-full ">
              <span className="block w-[1.8rem] h-[1.8rem] rounded-full bg-gray-900"></span>
            </span>
            <dl>
              <dt className="text-sm font-semibold">Davidson Blocks Olaf</dt>
              <dd className="text-xs font-light">Account</dd>
            </dl>
          </div>
          <dl className="flex justify-between items-center gap-6 py-6 text-xs">
            <div className="space-y-3">
              <dt>User ID</dt>
              <dd>#11232</dd>
            </div>
            <div className="space-y-3">
              <dt>Designation</dt>
              <dd>Accounting</dd>
            </div>
            <div className="space-y-3">
              <dt>Log ID</dt>
              <dd>12ksd3z4E5Rv678</dd>
            </div>
          </dl>
          <dl className="space-y-2">
            <div className="flex justify-between items-center bg-[#363A3D] rounded-md py-1 px-3">
              <dt>
                <Icon
                  icon="typcn:home"
                  width="20"
                  height="20"
                  className="text-[#0D99FF]"
                />
              </dt>
              <dd className="text-xs">3rd Ave road, Ikot Ansa</dd>
            </div>
            <div className="flex justify-between items-center bg-[#363A3D] rounded-md py-1 px-3">
              <dt className="w-[1.2rem] h-[1.2rem] flex justify-center items-center rounded-full bg-[#0D99FF]">
                <Icon
                  icon="fluent:call-24-filled"
                  width="12"
                  height="12"
                  className="text-[#fff]"
                />
              </dt>
              <dd className="text-xs">+234-81-6685-2329</dd>
            </div>
            <div className="flex justify-between items-center bg-[#363A3D] rounded-md py-1 px-3">
              <dt className="flex justify-start items-center gap-2">
                <Icon
                  icon="typcn:home"
                  width="20"
                  height="20"
                  className="text-[#0D99FF]"
                />
                <span className="text-xs">company</span>
              </dt>
              <dd className="text-xs">None</dd>
            </div>
          </dl>
        </section>
        <section arial-label="payment-details" className="w-[45%] space-y-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs">Earning</span>
              <span className="py-[1px] px-3 rounded-full bg-[#F2F1F1] border border-[#0D99FF] text-[#414EAB] text-xs font-semibold">
                Edit
              </span>
            </div>
            <h2 className="flex justify-between items-center px-1">
              <span className="text-xs font-semibold">Total Accrued</span>
              <span className="text-xs font-semibold">#30,000.00</span>
            </h2>
            <dl className="space-y-2 text-[.6rem] ">
              <div className="flex justify-between items-center">
                <dt>Earning Percentage</dt>
                <dd>80%</dd>
              </div>
              <div className="flex justify-between items-center border-t border-b border-gray-400 py-3">
                <dt>Position</dt>
                <dd>Starter</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt>Payment Method</dt>
                <dd>Wallet Withdrawal</dd>
              </div>
            </dl>
          </div>
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center py-[6px] px-2 bg-[#F5F4F8] rounded-md text-xs">
              <Icon
                icon="proicons:bank"
                width="16"
                height="16"
                className="text-[#0D99FF]"
              />

              <span className="text-[#242628]">GT Bank</span>
              <span className="text-[#242628]">3445654385</span>
            </div>
            <div className="flex flex-col w-[100%] space-y-1 relative">
              <label className="text-xs">Change Vehicle</label>
              <select className="rounded-md bg-[#363A3D]  appearance-none border border-gray-500 hover:border-gray-300 focus:outline-none">
                <option></option>
              </select>
              <span>
                <Icon
                  icon="gridicons:dropdown"
                  width="20"
                  height="20"
                  className="absolute top-6 right-3 text-[#0D99FF]"
                />
              </span>
            </div>
            <div className="flex flex-col w-[100%] space-y-1">
              <label className="text-xs">Report Note</label>
              <textarea className="px-2 rounded-md border border-gray-500 w-full h-18 overflow-y-auto custom-scrollbar focus:bg-[#363A3D] focus:outline-none focus:text-gray-100 text-gray-900 " />
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center gap-4 py-2">
        <Button bg="#7152F3" paddingTop="4px" paddingBottom="4px">
          Work History
        </Button>
        <Button bg="#7152F3" paddingTop="4px" paddingBottom="4px">
          Revoke Access
        </Button>
        <Button bg="#7152F3" paddingTop="4px" paddingBottom="4px">
          Suspended
        </Button>
        <Button bg="#7152F3" paddingTop="4px" paddingBottom="4px">
          Sack
        </Button>
      </div>

      <button
        onClick={handleClosePopUp}
        className="bg-gray-100 h-[1.8rem] w-[1.8rem] rounded-full flex justify-center items-center absolute top-[-2.4rem] right-[-.5rem]"
      >
        <Icon
          icon="iconamoon:close-bold"
          width="24"
          height="24"
          className="text-red-400 "
        />
      </button>
    </main>
  );
}
export default EditStaffDetails;
