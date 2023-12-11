import { Icon, divIcon, point } from 'leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

function App() {

  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Popup1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Popup2"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Popup3"
    },
  ]

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [25, 25]
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    })
  }

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {
          markers.map(marker => (
            <Marker position={marker.geocode} icon={customIcon} >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))
        }
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;
