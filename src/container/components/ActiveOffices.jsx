import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useSearchParams } from "react-router-dom";

const data = [
  { countryName: "Ngeria", pos: { lat: 9.082, lng: 8.6753 }, areaCover: "60" },
  { countryName: "Ghana", pos: { lat: 7.9465, lng: -1.0232 }, areaCover: "30" },
  { countryName: "Niger", pos: { lat: 17.6078, lng: 8.0817 }, areaCover: "20" },
  {
    countryName: "Ivory Coast",
    pos: { lat: 7.54, lng: -5.5471 },
    areaCover: "35",
  },
  {
    countryName: "Togo",
    pos: { lat: "8.6195", lng: "0.8248" },
    areaCover: "40",
  },
  {
    countryName: "Benin",
    pos: { lat: "9.3077", lng: "2.3158" },
    areaCover: "25",
  },
  {
    countryName: "Zambia",
    pos: { lat: "-13.1339", lng: "27.8493" },
    areaCover: "45",
  },
];

function FlyToLocation({ targetPosition }) {
  const map = useMap();

  useEffect(() => {
    if (targetPosition) {
      map.flyTo(targetPosition, map.getZoom());
    }
  }, [targetPosition, map]);
  return null;
}

function ActiveOffices() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  function handleLocation(lat, lng) {
    setSearchParams({ lat: lat, lng: lng });
  }

  return (
    <div className="flex-1 flex justify-start items-center pl-2">
      <div className="h-[23rem] w-[60%] rounded-md">
        <MapContainer
          center={mapPosition}
          zoom={6}
          scrollWheelZoom={true}
          className="rounded-md"
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"

            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/"></a>'
          />

          <FlyToLocation
            targetPosition={
              lat && lng ? { lat: parseFloat(lat), lng: parseFloat(lng) } : null
            }
          />

          {/* <Marker position={mapPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </MapContainer>
      </div>
      <div className="w-[15rem] border border-gray-700 rounded-md py-3">
        {data.map((x, i) => (
          <div
            className="w-[100%] py-2 pl-6 pr-3 space-y-2 text-sm border-b border-b-gray-700 hover:cursor-pointer"
            key={i}
            onClick={() => handleLocation(x.pos.lat, x.pos.lng)}
          >
            <div className="flex justify-between items-center ">
              <span>{x.countryName}</span>
              <span>{x.areaCover}%</span>
            </div>
            <div className="h-1 w-[full] bg-gray-700">
              <span
                style={{ width: `${x.areaCover}%`, backgroundColor: "#0D99FF" }}
                className="h-1 block rounded-md"
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveOffices;
