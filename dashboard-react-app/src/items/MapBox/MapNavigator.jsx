import React from "react";
import LOCATIONS from "./locations.json";

export default function MapNavigator({ onClickHandle }) {
  return (
    <></>
    // <aside
    //   style={{
    //     position: "fixed",
    //     right: "50px",
    //     top: "50px",
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "12px",
    //   }}
    // >
    //   {LOCATIONS.map((eachLoc, index) => (
    //     <button
    //       key={`navigator-${index}`}
    //       style={{
    //         padding: "14px",
    //         backgroundColor: "cornflowerblue",
    //         border: "none",
    //         color: "#fff",
    //         borderRadius: "2px",
    //         cursor: "pointer"
    //       }}
    //       onClick={() => onClickHandle(eachLoc)}
    //     >
    //       Go to {eachLoc.locationName}
    //     </button>
    //   ))}
    // </aside>
  );
}
