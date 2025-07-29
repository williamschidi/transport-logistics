import { Icon } from "@iconify/react/dist/iconify.js";
import PagesHeader from "../../utils/PagesHeader";
// import SearchBar from "../../utils/SearchBar";
import FooterNavigation from "../../utils/FooterNavigation";
import Map from "../../components/Map";
import SearchBar1 from "../../utils/SearchBar1";

const data = [
  {
    id: 1,
    shipment: "EV-2017002346",
    category: "Food Materials",
    from: "2972 Westheimer",
    to: "8502 Preston",
    client: "Darrell Steward",
    company: "Marinee, LTD",
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    shipment: "EV-2017003323",
    category: "Food Materials",
    from: "2972 Westheimer",
    to: "8502 Preston",
    client: "Jenny Wilson",
    company: "Food State, LTD",
    avatar: "/avatar2.jpg",
  },
  {
    id: 2,
    shipment: "EV-2017003323",
    category: "Food Materials",
    from: "2972 Westheimer",
    to: "8502 Preston",
    client: "Jenny Wilson",
    company: "Food State, LTD",
    avatar: "/avatar2.jpg",
  },
  {
    id: 2,
    shipment: "EV-2017003323",
    category: "Food Materials",
    from: "2972 Westheimer",
    to: "8502 Preston",
    client: "Jenny Wilson",
    company: "Food State, LTD",
    avatar: "/avatar2.jpg",
  },
];

function DriverPage() {
  return (
    <section className="flex-1  px-3 py-2 ">
      <PagesHeader>
        <h3 className="text-sm font-semibold">GIG Drivers and Trips</h3>
        <p className="text-[.6rem] font-light">GIG trips informations</p>
      </PagesHeader>
      <main>
        <div className="flex justify-between items-stretch border border-gray-600 rounded-md">
          <div className="py-2 px-6 lg:w-[20rem] md:w-[18rem] w-[17rem] space-y-3 ">
            <SearchBar1 iconSize="md" size="lg" />
            <div className="space-y-1 max-h-[25rem]  overflow-y-auto custom-scrollbar">
              <p className="text-xs font-semibold">Ongoing Delivery</p>
              {data.map((x, i) => (
                <div
                  className="border border-gray-600 rounded-md px-3 py-2 w-[98%]"
                  key={i}
                >
                  <div className="flex justify-between items-start pb-2">
                    <div className="flex flex-col justify-start items-start ">
                      <span className="md:text-[.7rem] text-[.6rem]">
                        Shipment number
                      </span>
                      <span className="md:text-sm text-xs font-bold py-1">
                        {x.shipment}
                      </span>
                      <span className="md:text-[.7rem] text-[.6rem] font-light text-gray-500">
                        {x.category}
                      </span>
                    </div>
                    <div className="flex justify-start items-end">
                      <Icon
                        icon="openmoji:articulated-lorry"
                        width="60"
                        height="60"
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="space-y-3 py-2 ">
                    <div className="flex justify-start items-center gap-2 ">
                      <div className="w-[1rem] h-[1rem] border rounded-full bg-white flex justify-center items-center">
                        <div className="w-[.4rem] h-[.4rem] rounded-full bg-[#0EBC93]"></div>
                      </div>
                      <div className="flex flex-col">
                        <span className="md:text-[.8rem] text-[.7rem] font-semibold">
                          {x.from}
                        </span>
                        <span className="md:text-[.65rem] text-[.6rem] font-light">
                          Rd. Santa Ana, Illinois 85486
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <div className="w-[1rem] h-[1rem] border rounded-full bg-white flex justify-center items-center">
                        <Icon
                          icon="tdesign:location-filled"
                          width="10"
                          height="10"
                          className="text-[#0EBC93]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="md:text-[.8rem] text-[.7rem] font-semibold">
                          {x.to}
                        </span>
                        <span className="md:text-[.65rem] text-[.6rem] font-light">
                          Rd. Santa Ana, Illinois 85486
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="space-y-3 py-2 flex justify-between items-center">
                    <div className="">
                      <div></div>
                      <div className="flex flex-col justify-center items-start">
                        <span className="md:text-[.65rem] text-[.6rem]">
                          Client
                        </span>
                        <span className="md:text-[.8rem] text-[.7rem] font-semibold pt-1">
                          {x.client}
                        </span>
                        <span className="md:text-[.65rem] text-[.6rem] font-light text-gray-500">
                          {x.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="w-[1.5rem] h-[1.5rem] bg-white rounded-md flex justify-center items-center">
                        <Icon
                          icon="fluent:call-24-regular"
                          width="20"
                          height="20"
                          className="text-gray-800"
                        />
                      </span>
                      <span className="w-[1.5rem] h-[1.5rem] bg-white rounded-md flex justify-center items-center">
                        <Icon
                          icon="carbon:chat"
                          width="16"
                          height="16"
                          className="text-gray-800"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Map />
        </div>
        <FooterNavigation
          num={4}
          color="#f5f5f4"
          bg="transparent"
          activeColor="#7152F3"
          activeBg="transparent"
          borderColor="#7152F3"
        />
      </main>
    </section>
  );
}

export default DriverPage;
