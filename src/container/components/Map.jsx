import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";

const pointA = { lat: 6.5244, lng: 3.3792 };

const pointB = { lat: 6.5381, lng: 7.5863 };

const containerStyle = {
  width: "100%",
};

const customMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
];
function Map() {
  const [position, setPosition] = useState(pointA);
  const [path, setPath] = useState([pointA]);

  useEffect(() => {
    const route = [
      pointA,
      { lat: 6.76, lng: 3.26 },
      { lat: 6.9, lng: 3.02 },
      { lat: 7.15, lng: 4.8 },
      { lat: 7.256, lng: 5.193 },
      { lat: 7.35, lng: 5.55 },
      { lat: 6.332, lng: 5.6039 },
      { lat: 6.45, lng: 5.62 },
      { lat: 6.52, lng: 5.77 },
      { lat: 6.75, lng: 5.88 },
      { lat: 6.93, lng: 6.125 },
      { lat: 6.22, lng: 6.6 },
      { lat: 6.15, lng: 6.79 },
      { lat: 6.2, lng: 7.02 },
      { lat: 6.1748, lng: 7.0228 },
      { lat: 6.45, lng: 7.51 },
      { lat: 6.522, lng: 7.57 },
      { lat: 6.5326, lng: 7.5838 },

      pointB,
    ];

    let index = 1;

    const interval = setInterval(() => {
      if (index < route.length) {
        setPosition(route[index]);
        setPath((cur) => {
          const updatedpath = [...cur, route[index]];

          return updatedpath;
        });

        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={7}
        options={{ styles: customMapStyle }}
      >
        <Marker
          position={pointA}
          label={{
            text: "A",
            color: "	#047857",
            fontSize: "10px",
            fontWeight: "normal",
          }}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          }}
        />

        {/* <Marker
          position={position}
          icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        /> */}
        <Marker
          position={pointB}
          label={{
            text: "B",
            color: "	#047857",
            fontSize: "10px",
            fontWeight: "bold",
          }}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          }}
        />
        <Polyline
          path={path}
          options={{
            strokeColor: "#EF4444",
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
