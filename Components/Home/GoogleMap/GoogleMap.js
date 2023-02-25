 
 
 import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';
 
 const GoogleMaps = () => {
    

const containerStyle = {
  width: '600px',
  height: '400px'
};

const center = {
  lat: 22.37042735729469, 
  lng: 91.84334138993381,
};
    return (
        <div>
            <LoadScript
      googleMapsApiKey={process.env.NEXT_GOOGLE_MAP_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
       <Marker position={center}></Marker>
      </GoogleMap>
    </LoadScript>
        </div>
    );
 };
 
 export default GoogleMaps;