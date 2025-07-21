const data = [
  {
    staffID: 1001,
    driverName: "Ricky Antony",
    tripsToday: 14,
    vehicleID: "#DE36852329",
    completedTrips: 14544,
    canceledTrip: 44,
    status: "Active",
  },
  {
    staffID: 1001,
    driverName: "Ricky Antony",
    tripsToday: 14,
    vehicleID: "#DE36852329",
    completedTrips: 14544,
    canceledTrip: 44,
    status: "Active",
  },
  {
    staffID: 1001,
    driverName: "Ricky Antony",
    tripsToday: 14,
    vehicleID: "#DE36852329",
    completedTrips: 14544,
    canceledTrip: 44,
    status: "Active",
  },
  {
    staffID: 1001,
    driverName: "Ricky Antony",
    tripsToday: 14,
    vehicleID: "#DE36852329",
    completedTrips: 14544,
    canceledTrip: 44,
    status: "Active",
  },
  {
    staffID: 1001,
    driverName: "Ricky Antony",
    tripsToday: 14,
    vehicleID: "#DE36852329",
    completedTrips: 14544,
    canceledTrip: 44,
    status: "Active",
  },
  {
    staffID: 1001,
    driverName: "Ricky Antony",
    tripsToday: 14,
    vehicleID: "#DE36852329",
    completedTrips: 14544,
    canceledTrip: 44,
    status: "Inactive",
  },
  {
    staffID: 1001,
    driverName: "Ricky Antony",
    tripsToday: 14,
    vehicleID: "#DE36852329",
    completedTrips: 14544,
    canceledTrip: 44,
    status: "Inctive",
  },
  {
    staffID: 1001,
    driverName: "Ricky Antony",
    tripsToday: 14,
    vehicleID: "#DE36852329",
    completedTrips: 14544,
    canceledTrip: 44,
    status: "Active",
  },
  {
    staffID: 1001,
    driverName: "Ricky Antony",
    tripsToday: 14,
    vehicleID: "#DE36852329",
    completedTrips: 14544,
    canceledTrip: 44,
    status: "Active",
  },
];

function SalesHistory() {
  return (
    <section className="flex-1">
      <header className="flex justify-between items-center bg-[#4D6A3F] text-xs font-semibold  py-2 mb-2">
        <span className="flex-1 text-center">Staff ID</span>
        <span className="flex-1 text-center">Drivers Name</span>
        <span className="flex-1 text-center">Trips Today</span>
        <span className="flex-1 text-center">Vehicle ID</span>
        <span className="flex-1 text-center">Completed Trips</span>
        <span className="flex-1 text-center">Canceled Trips</span>
        <span className="flex-1 text-center">Status</span>
      </header>
      <main className="flex-1 py-4 max-h-[20rem] overflow-y-auto custom-scrollbar">
        {data.map((x) => (
          <div className="w-[100%] flex justify-between items-center px-2 py-2 text-xs">
            <span className="flex-1 text-center border-b border-gray-400 pb-2 mr-3">
              {x.staffID}
            </span>
            <span className="flex-1 text-center border-b border-gray-400 pb-2 mr-3">
              {x.driverName}
            </span>
            <span className="flex-1 text-center border-b border-gray-400 pb-2 mr-3">
              {x.tripsToday}
            </span>
            <span className="flex-1 text-center border-b border-gray-400 pb-2 mr-3">
              {x.vehicleID}
            </span>
            <span className="flex-1 text-center border-b border-gray-400 pb-2 mr-3">
              {x.completedTrips}
            </span>
            <span className="flex-1 text-center border-b border-gray-400 pb-2 mr-3">
              {x.canceledTrip}
            </span>
            <span
              className={`flex-1 text-center border-b border-gray-400 pb-2 mr-3 `}
            >
              <span
                className={`py-1 px-3 rounded-md ${
                  x.status === "Active"
                    ? "text-[#3AC977] bg-[#3AC9771A]"
                    : "bg-[#FF5E5E26] text-[#FF5E5E]"
                }`}
              >
                {x.status}
              </span>
            </span>
          </div>
        ))}
      </main>
    </section>
  );
}

export default SalesHistory;
