import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const Map = (props) => {
  const mapView = () => {
    const viewer = new window.ROS2D.Viewer({
      divID: "map",
      width: 540,
      height: 380,
    });
    let navigationClient = new window.NAV2D.OccupancyGridClientNav({
      ros: props.ros,
      rootObject: viewer.scene,
      viewer: viewer,
      serverName: "/move_base",
      withOrientation: true,
    });

    // Scale the canvas to fit to the map
    //   navigationClient.on("change", () => {
    //     viewer.scaleToDimensions(
    //       navigationClient.currentGrid.width,
    //       navigationClient.currentGrid.height
    //     );
    //   });
  };

  useEffect(() => {
    mapView();
  }, []);

  return (
    <div>
      <h3>Map</h3>
      <div id="map"></div>
    </div>
  );
};

export default Map;
