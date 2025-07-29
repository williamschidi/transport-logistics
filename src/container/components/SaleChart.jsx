import DataChart from "./DataChart";

function SaleChart() {
  return (
    <div className="col-start-1  col-span-7 row-start-1 row-span-1 flex justify-between gap-2 items-start border border-gray-600 rounded-md">
      <div className=" pl-1 flex justify-between lg:gap-2 gap-1 items-center w-[12rem] border rounded-md border-gray-600 ">
        <div className="">
          <p className="lg:text-[.6rem] text-[.5rem]">Todays sales</p>
          <p className="lg:text-[.7rem] text-[.6rem] font-bold">#8.4k</p>
          <p className="lg:text-[.6rem] text-[.5rem]">
            We have delivered X sales
          </p>
        </div>
        <div className="lg:w-[3rem] lg:h-[3rem] w-[2.8rem] h-[2.8rem] pb-2">
          <DataChart />
        </div>
      </div>

      <div className="flex justify-between gap-2 items-center px-1 w-[12rem] border rounded-md border-gray-600 ">
        <div className="">
          <p className="lg:text-[.6rem] text-[.5rem]">Todays Revenue</p>
          <p className="lg:text-[.7rem] text-[.6rem] font-bold">#20.4k</p>
          <p className="lg:text-[.6rem] text-[.5rem]">Available to payout</p>
        </div>
        <div className="lg:w-[3rem] lg:h-[3rem] w-[2.8rem] h-[2.8rem] pb-2">
          <DataChart color={["#fff", "#475BE8"]} values={[20, 80]} />
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center px-1 w-[12rem] border rounded-md border-gray-600 ">
        <div className=" ">
          <p className="lg:text-[.6rem] text-[.5rem]">Todays sales</p>
          <p className="lg:text-[.7rem] text-[.6rem] font-bold">#28.2</p>
          <p className="lg:text-[.6rem] text-[.5rem]">
            We have delivered X sales
          </p>
        </div>
        <div className="lg:w-[3rem] lg:h-[3rem] w-[2.8rem] h-[2.8rem] pb-2">
          <DataChart color={["#fff", "#f5c842"]} values={[35, 65]} />
        </div>
      </div>
    </div>
  );
}

export default SaleChart;
