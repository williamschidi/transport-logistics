import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";

const pointA = { lat: 6.5244, lng: 3.3792 };

const pointB = { lat: 6.4527, lng: 7.5103 };

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
      { lat: 7.1608, lng: 3.3481 },
      { lat: 7.2526, lng: 5.1931 },
      { lat: 6.3382, lng: 5.6258 },
      { lat: 6.2019, lng: 6.7319 },
      { lat: 6.21, lng: 7.0741 },
      pointB,
    ];

    let index = 1;

    const interval = setInterval(() => {
      if (index < route.length) {
        setPosition(route[index]);
        setPath((cur) => {
          const updatedpath = [...cur, route[index]];
          console.log("polyline", updatedpath);
          return updatedpath;
        });

        index++;
      } else {
        clearInterval(interval);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={10}
        options={{ styles: customMapStyle }}
      >
        <Marker
          position={pointA}
          label={{
            text: "A",
            color: "red",
            fontSize: "14px",
            fontWeight: "bold",
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
            color: "red",
            fontSize: "14px",
            fontWeight: "bold",
          }}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          }}
        />
        <Polyline
          path={path}
          options={{
            strokeColor: "#fff",
            strokeOpacity: 0.9,
            strokeWeight: 5,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
