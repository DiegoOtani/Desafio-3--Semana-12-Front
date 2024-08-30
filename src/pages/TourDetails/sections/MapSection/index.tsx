import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapSectionProps } from './types';

const MapSection = ({ coordinates, city, country }: MapSectionProps) => {
  return <section id='map-section'>
    <h3 className='text-secondary font-extrabold text-h5 font-title pb-6'>Map</h3>
    <MapContainer center={coordinates} zoom={11} style={{ height: '500px', width: '100%' }}>
      <TileLayer 
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coordinates}>
        <Popup>
          {city}, {country}: {coordinates[0]}, {coordinates[1]}
        </Popup>
      </Marker>
    </MapContainer>
  </section>
  
}

export default MapSection;