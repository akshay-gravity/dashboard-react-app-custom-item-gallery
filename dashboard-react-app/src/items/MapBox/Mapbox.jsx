import React from "react";
import { useCallback } from "react";
import { useState,useEffect } from "react";
import { useRef } from "react";
import Map from "react-map-gl";
import MapNavigator from "./MapNavigator";
import MapPins from "./MapPins";
import socketIOClient from "socket.io-client";

const ACCESS_TOKEN =
  "pk.eyJ1IjoicmFtcHJha2FzaHJhbSIsImEiOiJjbGE5YjZ4NDAwN2pqM3ZsZGl6cTc4YXpuIn0.bOcJL5grdm7IHzm2eP_xfA";

const initialViewState = {
  latitude: 0,
  longitude: 0,
  zoom: 0,
  bearing: 0, // rotation of the map
  pitch: 0, // tilt of the map - range is 0 to 85
};

const ENDPOINT = "http://localhost:2000/";

const socket = socketIOClient(ENDPOINT);
  socket.on("connect", () => {
    socket.emit("source", "browser");
  });
export default function Mapbox() {
  const mapRef = useRef();
  const [currentLocation, setCurrentLocation] = useState();
  // useEffect(() => {
       
  //       socket.off("locateMap").on("locateMap", props => {
  //         const { latitude, longitude, zoom } = props;
  //        let mapdata= mapRef.current?.flyTo({
  //           center: [longitude, latitude],
  //           duration: 2000,
  //           zoom,
  //           pitch: 50
  //         });
  //         setCurrentLocation(props);
  //       });
        
  //     }, []);
  const onClickHandle = useCallback((props) => {
    const { latitude, longitude, zoom } = props;
     mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 2000,
      zoom,
      pitch: 50
    });
    setCurrentLocation(props);
  }, []);

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={ACCESS_TOKEN}
      >
        <MapPins location={currentLocation} handleMarkerClick={onClickHandle} />
      </Map>
      <MapNavigator onClickHandle={onClickHandle} />
    </>
  );
}
