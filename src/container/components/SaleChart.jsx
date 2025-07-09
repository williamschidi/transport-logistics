import DataChart from "./DataChart";

function SaleChart() {
  return (
    <div className="col-start-1  col-span-7 row-start-1 row-span-1 flex justify-between gap-2 items-start border border-gray-600 rounded-md">
      <div className=" px-1 flex justify-between gap-2 items-center border rounded-md border-gray-600 ">
        <div className="text-[.7rem] ">
          <p className="text-[.6rem]">Todays sales</p>
          <p className="font-bold">#8.4k</p>
          <p className="text-[.6rem]">We have delivered X sales</p>
        </div>
        <div className="w-[3rem] h-[3rem] pb-2">
          <DataChart />
        </div>
      </div>

      <div className="flex justify-between gap-2 items-center px-1 w-[12rem] border rounded-md border-gray-600 ">
        <div className="text-[.7rem] ">
          <p className="text-[.6rem]">Todays Revenue</p>
          <p className="font-bold">#20.4k</p>
          <p className="text-[.6rem]">Available to payout</p>
        </div>
        <div className="w-[3rem] h-[3rem] pb-2">
          <DataChart color={["#fff", "#475BE8"]} values={[20, 80]} />
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center px-1 w-[12rem] border rounded-md border-gray-600 ">
        <div className="text-[.7rem] ">
          <p className="text-[.6rem]">Todays sales</p>
          <p className="font-bold">#28.2</p>
          <p className="text-[.6rem]">We have delivered X sales</p>
        </div>
        <div className="w-[3rem] h-[3rem] pb-2">
          <DataChart color={["#fff", "#f5c842"]} values={[35, 65]} />
        </div>
      </div>
    </div>
  );
}

export default SaleChart;
