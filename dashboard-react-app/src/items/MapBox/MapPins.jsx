import React, { memo } from "react";
import { Marker } from "react-map-gl";
import LOCATIONS from "./locations.json";

const styles = {
  popupMarker: {
    position: "absolute",
    top: "20px",
    left: "50%",
    width: "300px",
    backgroundColor: "#fff",
    borderRadius: "2px",
    padding: "12px",
    textAlign: "left",
  },
  popupMarkerTitle: {
    borderBottom: "1px solid lightgrey",
    margin: 0,
  },
  popupMarkerContent: {
    margin: 0,
  },
};

function MapPins({ location, handleMarkerClick }) {
  return LOCATIONS.map((eachLoc, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={eachLoc.longitude}
      latitude={eachLoc.latitude}
      anchor="bottom"
      onClick={() => handleMarkerClick(eachLoc)}
    >
      <section>
        <svg
          height="20"
          viewBox="0 0 24 24"
          style={{
            cursor: "pointer",
            fill: "#d00",
            stroke: "none",
          }}
        >
          <path
            d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`}
          />
        </svg>
        {location?.locationName === eachLoc.locationName && (
          <aside style={styles.popupMarker}>
            <h1 style={styles.popupMarkerTitle}>{eachLoc.locationName}</h1>
            <p style={styles.popupMarkerContent}>
              Message body.Optional property, if help documentation is
              available, consider adding a link to learn more at the bottom.
            </p>
          </aside>
        )}
      </section>
    </Marker>
  ));
}

export default memo(MapPins);
