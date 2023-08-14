import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 46.594328,
      lng: 26.909442
    },
    zoom: 17
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '250px', width: '250px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={46.594328}
          lng={26.909442}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}