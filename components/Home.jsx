import React, { useEffect } from "react";
import HomeNews from "./HomeNews";
import CameraModel from "./CameraModel";

const Home = () => {
 // Scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CameraModel/>
      <HomeNews />
    </>
    
    
  );
};

export default Home;
