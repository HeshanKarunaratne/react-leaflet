import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { useState } from 'react';

function App() {

  const locations = [
    { id: 1, name: 'Location 1', lat: 47.7749, lng: -122.4194 },
    { id: 2, name: 'Location 2', lat: 24.0522, lng: -118.2437 },

  ];

  const [mapCenter, setMapCenter] = useState([35.7749, -120.4194]);
  const [mapZoom, setMapZoom] = useState(5);

  const handleMarkerClick = async (lat, lng) => {
    console.log("clicked in ", lat, lng)
    await setMapCenter([lat, lng]);
    await setMapZoom(13);
  };

  return (
    <>
      <div>
        <h2>Locations</h2>
        <ul>
          {locations.map((location) => (
            <li key={location.id} onClick={() => handleMarkerClick(location.lat, location.lng)}>
              {location.name}
            </li>
          ))}
        </ul>
      </div>
      <MapContainer center={mapCenter} zoom={mapZoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}

      </MapContainer>
    </>

  );
}

export default App;
