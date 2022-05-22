import React from 'react';
import { Marker, Popup, MapContainer, TileLayer } from 'react-leaflet';
import './ShowMap.css'

const ShowMap = () => {
    const center = [23.86943270929912, 90.38748051989842];
    return (
        <div>
        <h2 className='text-6xl text-center mt-32 mb-16'>Our Location</h2>
<div className="max-w-[90%] mx-auto h-[600px] rounded-lg overflow-hidden mb-14">
        <MapContainer center={center} zoom={14}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center}>
            <Popup>
            HeadQuarter of Computer Parts 
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      </div>
    );
};

export default ShowMap;