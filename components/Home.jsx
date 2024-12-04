import React, { useEffect, useMemo, useRef, useState } from "react";
import throttle from "lodash.throttle";
import HomeNews from "./HomeNews";


const Home = ({ scrollY, setScrollY }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [mobileFrame, setMobileFrame] = useState(0);
  
  const cameraFrames = useMemo(() => [
    "../src/assets/gif/frame_000_delay-0.07s.gif",
    "../src/assets/gif/frame_001_delay-0.07s.gif",
    "../src/assets/gif/frame_002_delay-0.07s.gif",
    "../src/assets/gif/frame_003_delay-0.07s.gif",
    "../src/assets/gif/frame_004_delay-0.07s.gif",
    "../src/assets/gif/frame_005_delay-0.07s.gif",
    "../src/assets/gif/frame_006_delay-0.07s.gif",
    "../src/assets/gif/frame_007_delay-0.07s.gif",
    "../src/assets/gif/frame_008_delay-0.07s.gif",
    "../src/assets/gif/frame_009_delay-0.07s.gif",
    "../src/assets/gif/frame_010_delay-0.07s.gif",
    "../src/assets/gif/frame_011_delay-0.07s.gif",
    "../src/assets/gif/frame_012_delay-0.07s.gif",
    "../src/assets/gif/frame_013_delay-0.07s.gif",
    "../src/assets/gif/frame_014_delay-0.07s.gif",
    "../src/assets/gif/frame_015_delay-0.07s.gif",
    "../src/assets/gif/frame_016_delay-0.07s.gif",
    "../src/assets/gif/frame_017_delay-0.07s.gif",
    "../src/assets/gif/frame_018_delay-0.07s.gif",
    "../src/assets/gif/frame_019_delay-0.07s.gif",
    "../src/assets/gif/frame_020_delay-0.07s.gif",
    "../src/assets/gif/frame_021_delay-0.07s.gif",
    "../src/assets/gif/frame_022_delay-0.07s.gif",
    "../src/assets/gif/frame_023_delay-0.07s.gif",
    "../src/assets/gif/frame_024_delay-0.07s.gif",
    "../src/assets/gif/frame_025_delay-0.07s.gif",
    "../src/assets/gif/frame_026_delay-0.07s.gif",
    "../src/assets/gif/frame_027_delay-0.07s.gif",
    "../src/assets/gif/frame_028_delay-0.07s.gif",
    "../src/assets/gif/frame_029_delay-0.07s.gif",
    "../src/assets/gif/frame_030_delay-0.07s.gif",
    "../src/assets/gif/frame_031_delay-0.07s.gif",
    "../src/assets/gif/frame_032_delay-0.07s.gif",
    "../src/assets/gif/frame_033_delay-0.07s.gif",
    "../src/assets/gif/frame_034_delay-0.07s.gif",
    "../src/assets/gif/frame_035_delay-0.07s.gif",
    "../src/assets/gif/frame_036_delay-0.07s.gif",
    "../src/assets/gif/frame_037_delay-0.07s.gif",
    "../src/assets/gif/frame_038_delay-0.07s.gif",
    "../src/assets/gif/frame_039_delay-0.07s.gif",
    "../src/assets/gif/frame_040_delay-0.07s.gif",
    "../src/assets/gif/frame_041_delay-0.07s.gif",
    "../src/assets/gif/frame_042_delay-0.07s.gif",
    "../src/assets/gif/frame_043_delay-0.07s.gif",
    "../src/assets/gif/frame_044_delay-0.07s.gif",
    "../src/assets/gif/frame_045_delay-0.07s.gif",
    "../src/assets/gif/frame_046_delay-0.07s.gif",
    "../src/assets/gif/frame_047_delay-0.07s.gif",
    "../src/assets/gif/frame_048_delay-0.07s.gif",
    "../src/assets/gif/frame_049_delay-0.07s.gif",
    "../src/assets/gif/frame_050_delay-0.07s.gif",
    "../src/assets/gif/frame_051_delay-0.07s.gif",
    "../src/assets/gif/frame_052_delay-0.07s.gif",
    "../src/assets/gif/frame_053_delay-0.07s.gif",
    "../src/assets/gif/frame_054_delay-0.07s.gif",
    "../src/assets/gif/frame_055_delay-0.07s.gif",
    "../src/assets/gif/frame_056_delay-0.07s.gif",
    "../src/assets/gif/frame_057_delay-0.07s.gif",
    "../src/assets/gif/frame_058_delay-0.07s.gif",
    "../src/assets/gif/frame_059_delay-0.07s.gif",
    "../src/assets/gif/frame_060_delay-0.07s.gif",
    "../src/assets/gif/frame_061_delay-0.07s.gif",
    "../src/assets/gif/frame_062_delay-0.07s.gif",
    "../src/assets/gif/frame_063_delay-0.07s.gif",
    "../src/assets/gif/frame_064_delay-0.07s.gif",
    "../src/assets/gif/frame_065_delay-0.07s.gif",
    "../src/assets/gif/frame_066_delay-0.07s.gif",
    "../src/assets/gif/frame_067_delay-0.07s.gif",
    "../src/assets/gif/frame_068_delay-0.07s.gif",
    "../src/assets/gif/frame_069_delay-0.07s.gif",
    "../src/assets/gif/frame_070_delay-0.07s.gif",
    "../src/assets/gif/frame_071_delay-0.07s.gif",
    "../src/assets/gif/frame_072_delay-0.07s.gif",
    "../src/assets/gif/frame_073_delay-0.07s.gif",
    "../src/assets/gif/frame_074_delay-0.07s.gif",
    "../src/assets/gif/frame_075_delay-0.07s.gif",
    "../src/assets/gif/frame_076_delay-0.07s.gif",
    "../src/assets/gif/frame_077_delay-0.07s.gif",
    "../src/assets/gif/frame_078_delay-0.07s.gif",
    "../src/assets/gif/frame_079_delay-0.07s.gif",
    "../src/assets/gif/frame_080_delay-0.07s.gif",
    "../src/assets/gif/frame_081_delay-0.07s.gif",
    "../src/assets/gif/frame_082_delay-0.07s.gif",
    "../src/assets/gif/frame_083_delay-0.07s.gif",
    "../src/assets/gif/frame_084_delay-0.07s.gif",
    "../src/assets/gif/frame_085_delay-0.07s.gif",
    "../src/assets/gif/frame_086_delay-0.07s.gif",
    "../src/assets/gif/frame_087_delay-0.07s.gif",
    "../src/assets/gif/frame_088_delay-0.07s.gif",
    "../src/assets/gif/frame_089_delay-0.07s.gif",
    "../src/assets/gif/frame_090_delay-0.07s.gif",
    "../src/assets/gif/frame_091_delay-0.07s.gif",
    "../src/assets/gif/frame_092_delay-0.07s.gif",
    "../src/assets/gif/frame_093_delay-0.07s.gif",
    "../src/assets/gif/frame_094_delay-0.07s.gif",
    "../src/assets/gif/frame_095_delay-0.07s.gif",
    "../src/assets/gif/frame_096_delay-0.07s.gif",
    "../src/assets/gif/frame_097_delay-0.07s.gif",
    "../src/assets/gif/frame_098_delay-0.07s.gif",
    "../src/assets/gif/frame_099_delay-0.07s.gif",
    "../src/assets/gif/frame_100_delay-0.07s.gif",
    "../src/assets/gif/frame_101_delay-0.07s.gif","../src/assets/gif/frame_102_delay-0.07s.gif","../src/assets/gif/frame_103_delay-0.07s.gif","../src/assets/gif/frame_104_delay-0.07s.gif","../src/assets/gif/frame_105_delay-0.07s.gif","../src/assets/gif/frame_106_delay-0.07s.gif","../src/assets/gif/frame_107_delay-0.07s.gif",
  ],[])
  const mobileFrames = useMemo(() =>[
    "../src/assets/mobileGif/frame_00_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_01_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_02_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_03_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_04_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_05_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_06_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_07_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_08_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_09_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_10_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_11_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_12_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_13_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_14_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_15_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_16_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_17_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_18_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_19_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_20_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_21_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_22_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_23_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_24_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_25_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_26_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_27_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_28_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_29_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_30_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_31_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_32_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_33_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_34_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_35_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_36_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_37_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_38_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_39_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_40_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_41_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_42_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_43_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_44_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_45_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_46_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_47_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_48_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_49_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_50_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_51_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_52_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_53_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_54_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_55_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_56_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_57_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_58_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_59_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_60_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_61_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_62_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_63_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_64_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_65_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_66_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_67_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_68_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_69_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_70_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_71_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_72_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_73_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_74_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_75_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_76_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_77_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_78_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_79_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_80_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_81_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_82_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_83_delay-0.07s.gif",
    "../src/assets/mobileGif/frame_84_delay-0.07s.gif",
  ],[])
  // Scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


//  Desktop
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);
      // console.log(scrollTop)

      const maxScroll = window.innerHeight*2.5;
      const scrollFraction = scrollTop / maxScroll;
      const frameIndex = Math.min(
        cameraFrames.length - 1,
        Math.floor(scrollFraction * cameraFrames.length)
      );
      if(frameIndex !== currentFrame){
        setCurrentFrame(frameIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setCurrentFrame, setScrollY]);

//  Mobile
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     setScrollY(scrollTop);
  //     // console.log(scrollTop)

  //     const maxScroll = window.innerHeight*2.5;
  //     const scrollFraction = scrollTop / maxScroll;
  //     const frameIndex = Math.min(
  //       mobileFrames.length - 1,
  //       Math.floor(scrollFraction * mobileFrames.length)
  //     );
  //     if (frameIndex !== mobileFrame) {
  //       setMobileFrame(frameIndex);
  //     }
  //   };
    

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [setMobileFrame, setScrollY]);

  const mobileFrameRef = useRef(0);
  const animationFrameRef = useRef(null);

  
  useEffect(() => {
    const maxScroll = window.innerHeight * 2.5; // Precompute since it doesn’t change

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollFraction = scrollTop / maxScroll;
      const targetFrame = Math.min(
        mobileFrames.length - 1,
        scrollFraction * mobileFrames.length
      );

      // Skip interpolation for large scroll jumps
      if (Math.abs(targetFrame - mobileFrameRef.current) > 10) {
        mobileFrameRef.current = targetFrame;
        setMobileFrame(Math.floor(targetFrame));
        return;
      }

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Smooth interpolation for gradual changes
      animationFrameRef.current = requestAnimationFrame(() => {
        mobileFrameRef.current =
          mobileFrameRef.current +
          (targetFrame - mobileFrameRef.current) * 0.1; // Interpolation factor
        setMobileFrame(Math.floor(mobileFrameRef.current)); // Update frame when it crosses an integer
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mobileFrames]);
 

  return (
    <>

    <div id="home" className="relative h-[280vh] md:h-[270vh] flex flex-col pt-0 md:pt-20  items-center">
      <header
        className="flex flex-col items-center gap-4  fixed text-center pt-8"
        style={{
          transform: scrollY<1500 ? `translateY(${scrollY * 0.4}px)` : "none",
          opacity: scrollY < 1400 ? 1 : 0,
          transition: "opacity 0.5s ease-out, transform 2s ease-out",
        }}
      >
        <h1
          className="text-2xl md:text-6xl font-bold text-black"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontStyle: "normal",
          }}
        >
          From Camera to your Canvas.
        </h1>
        <h3 className="text-md md:text-2xl text-gray-400 w-3/5 justify-center items-center text-center">
          Delivering Top News Right at your Fingertips
        </h3>
        <p className="flex flex-col items-center text-xs md:text-md text-gray-400"><i className="bi bi-mouse-fill text-lg md:text-3xl text-gray-300"></i>Scroll</p>
      </header>
      

      <img
        className="camera absolute hidden md:block select-none w-fit z-10"
        style={{
          transform: scrollY<2600 ? `translateY(${scrollY * 1}px)` : "none",
          opacity: scrollY < 2300? 1 : 0,
          transition: "opacity 1s ease-out",
        }}
        src={cameraFrames[currentFrame]}
        alt="Scroll animation"
      />
      {/* Mobile */}
      <img
        className="camera absolute block md:hidden select-none w-fit z-10"
        style={{
          transform: scrollY<1900 ? `translateY(${scrollY * 1}px)` : "none",
          opacity: scrollY < 1850? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
        }}
        src={mobileFrames[mobileFrame]}
        alt="Scroll animation"
      />
    </div>
    <HomeNews/>
   
    </>
  );
};

export default Home;
