import React, { useEffect } from "react";
import HomeNews from "./HomeNews";
import DemoCam from "./DemoCam";

const Home = () => {
 // Scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <DemoCam/>
      <HomeNews />
    </>
    
    
  );
};

export default Home;
