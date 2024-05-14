import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps: React.FC = () => {
  const { latitude, longitude } = {
    latitude: 22.4433357,
    longitude: 88.984635,
  };

  function MapView() {
    const map = useMap();
    map.setView([latitude, longitude], map.getZoom());
    return null;
  }

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={10}
      scrollWheelZoom={true}
      className="w-full"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
        contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[latitude, longitude]}>
        <Popup>
          Our office is located here! <br /> Come visit us!
        </Popup>
      </Marker>
      <MapView />
    </MapContainer>
  );
};

export default Maps;
