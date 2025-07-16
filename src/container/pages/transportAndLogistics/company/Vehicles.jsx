import { Icon } from "@iconify/react/dist/iconify.js";
import Action from "../../../components/Action";

const data = [
  {
    id: "AE234839",
    serviceType: "Reguler Bus",
    model: "Ford Transit 2002",
    plateNumber: "IKJ234LA",
  },
  {
    id: "AE234839",
    serviceType: "Reguler Bus",
    model: "Ford Transit 2002",
    plateNumber: "IKJ234LA",
  },
  {
    id: "AE234839",
    serviceType: "Reguler Bus",
    model: "Ford Transit 2002",
    plateNumber: "IKJ234LA",
  },
  {
    id: "AE234839",
    serviceType: "Reguler Bus",
    model: "Ford Transit 2002",
    plateNumber: "IKJ234LA",
  },
  {
    id: "AE234839",
    serviceType: "Reguler Bus",
    model: "Ford Transit 2002",
    plateNumber: "IKJ234LA",
  },
  {
    id: "AE234839",
    serviceType: "Reguler Bus",
    model: "Ford Transit 2002",
    plateNumber: "IKJ234LA",
  },
];

function Vehicles() {
  return (
    <section className=" space-y-3 mb-3">
      <header className="flex justify-between items-center text-xs font-bold bg-[#4D6A3F] py-2">
        <span className="flex-1 text-center">Vehicles</span>
        <span className="flex-1 text-center">ID</span>
        <span className="flex-1 text-center">Service Type</span>
        <span className="flex-1 text-center">Model</span>
        <span className="flex-1 text-center">Plate Number</span>
        <span className="flex-1 text-center">Actions</span>
      </header>
      <main className="custom-scrollbar max-h-[20rem] overflow-y-auto px-2">
        {data.map((x) => (
          <div className="flex justify-between items-center text-xs">
            <span className="flex-1 flex justify-center items-center">
              <Icon icon="openmoji:articulated-lorry" width="50" height="50" />
            </span>
            <span className="flex-1 text-center">{x.id}</span>
            <span className="flex-1 text-center">{x.model}</span>
            <span className="flex-1 text-center">{x.serviceType}</span>
            <span className="flex-1 text-center">{x.plateNumber}</span>
            <span className="flex-1 flex justify-center items-center">
              <Action />
            </span>
          </div>
        ))}
      </main>
    </section>
  );
}
export default Vehicles;
