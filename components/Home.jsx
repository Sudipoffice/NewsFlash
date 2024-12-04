import React, { useEffect, useMemo, useRef, useState } from "react";
import HomeNews from "./HomeNews";

const Home = ({ scrollY, setScrollY }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [mobileFrame, setMobileFrame] = useState(0);

  const cameraFrames = useMemo(
    () => [
      "/Desktop/frame_000_delay-0.07s.webp",
      "/Desktop/frame_001_delay-0.07s.webp",
      "/Desktop/frame_002_delay-0.07s.webp",
      "/Desktop/frame_003_delay-0.07s.webp",
      "/Desktop/frame_004_delay-0.07s.webp",
      "/Desktop/frame_005_delay-0.07s.webp",
      "/Desktop/frame_006_delay-0.07s.webp",
      "/Desktop/frame_007_delay-0.07s.webp",
      "/Desktop/frame_008_delay-0.07s.webp",
      "/Desktop/frame_009_delay-0.07s.webp",
      "/Desktop/frame_010_delay-0.07s.webp",
      "/Desktop/frame_011_delay-0.07s.webp",
      "/Desktop/frame_012_delay-0.07s.webp",
      "/Desktop/frame_013_delay-0.07s.webp",
      "/Desktop/frame_014_delay-0.07s.webp",
      "/Desktop/frame_015_delay-0.07s.webp",
      "/Desktop/frame_016_delay-0.07s.webp",
      "/Desktop/frame_017_delay-0.07s.webp",
      "/Desktop/frame_018_delay-0.07s.webp",
      "/Desktop/frame_019_delay-0.07s.webp",
      "/Desktop/frame_020_delay-0.07s.webp",
      "/Desktop/frame_021_delay-0.07s.webp",
      "/Desktop/frame_022_delay-0.07s.webp",
      "/Desktop/frame_023_delay-0.07s.webp",
      "/Desktop/frame_024_delay-0.07s.webp",
      "/Desktop/frame_025_delay-0.07s.webp",
      "/Desktop/frame_026_delay-0.07s.webp",
      "/Desktop/frame_027_delay-0.07s.webp",
      "/Desktop/frame_028_delay-0.07s.webp",
      "/Desktop/frame_029_delay-0.07s.webp",
      "/Desktop/frame_030_delay-0.07s.webp",
      "/Desktop/frame_031_delay-0.07s.webp",
      "/Desktop/frame_032_delay-0.07s.webp",
      "/Desktop/frame_033_delay-0.07s.webp",
      "/Desktop/frame_034_delay-0.07s.webp",
      "/Desktop/frame_035_delay-0.07s.webp",
      "/Desktop/frame_036_delay-0.07s.webp",
      "/Desktop/frame_037_delay-0.07s.webp",
      "/Desktop/frame_038_delay-0.07s.webp",
      "/Desktop/frame_039_delay-0.07s.webp",
      "/Desktop/frame_040_delay-0.07s.webp",
      "/Desktop/frame_041_delay-0.07s.webp",
      "/Desktop/frame_042_delay-0.07s.webp",
      "/Desktop/frame_043_delay-0.07s.webp",
      "/Desktop/frame_044_delay-0.07s.webp",
      "/Desktop/frame_045_delay-0.07s.webp",
      "/Desktop/frame_046_delay-0.07s.webp",
      "/Desktop/frame_047_delay-0.07s.webp",
      "/Desktop/frame_048_delay-0.07s.webp",
      "/Desktop/frame_049_delay-0.07s.webp",
      "/Desktop/frame_050_delay-0.07s.webp",
      "/Desktop/frame_051_delay-0.07s.webp",
      "/Desktop/frame_052_delay-0.07s.webp",
      "/Desktop/frame_053_delay-0.07s.webp",
      "/Desktop/frame_054_delay-0.07s.webp",
      "/Desktop/frame_055_delay-0.07s.webp",
      "/Desktop/frame_056_delay-0.07s.webp",
      "/Desktop/frame_057_delay-0.07s.webp",
      "/Desktop/frame_058_delay-0.07s.webp",
      "/Desktop/frame_059_delay-0.07s.webp",
      "/Desktop/frame_060_delay-0.07s.webp",
      "/Desktop/frame_061_delay-0.07s.webp",
      "/Desktop/frame_062_delay-0.07s.webp",
      "/Desktop/frame_063_delay-0.07s.webp",
      "/Desktop/frame_064_delay-0.07s.webp",
      "/Desktop/frame_065_delay-0.07s.webp",
      "/Desktop/frame_066_delay-0.07s.webp",
      "/Desktop/frame_067_delay-0.07s.webp",
      "/Desktop/frame_068_delay-0.07s.webp",
      "/Desktop/frame_069_delay-0.07s.webp",
      "/Desktop/frame_070_delay-0.07s.webp",
      "/Desktop/frame_071_delay-0.07s.webp",
      "/Desktop/frame_072_delay-0.07s.webp",
      "/Desktop/frame_073_delay-0.07s.webp",
      "/Desktop/frame_074_delay-0.07s.webp",
      "/Desktop/frame_075_delay-0.07s.webp",
      "/Desktop/frame_076_delay-0.07s.webp",
      "/Desktop/frame_077_delay-0.07s.webp",
      "/Desktop/frame_078_delay-0.07s.webp",
      "/Desktop/frame_079_delay-0.07s.webp",
      "/Desktop/frame_080_delay-0.07s.webp",
      "/Desktop/frame_081_delay-0.07s.webp",
      "/Desktop/frame_082_delay-0.07s.webp",
      "/Desktop/frame_083_delay-0.07s.webp",
      "/Desktop/frame_084_delay-0.07s.webp",
      "/Desktop/frame_085_delay-0.07s.webp",
      "/Desktop/frame_086_delay-0.07s.webp",
      "/Desktop/frame_087_delay-0.07s.webp",
      "/Desktop/frame_088_delay-0.07s.webp",
      "/Desktop/frame_089_delay-0.07s.webp",
      "/Desktop/frame_090_delay-0.07s.webp",
      "/Desktop/frame_091_delay-0.07s.webp",
      "/Desktop/frame_092_delay-0.07s.webp",
      "/Desktop/frame_093_delay-0.07s.webp",
      "/Desktop/frame_094_delay-0.07s.webp",
      "/Desktop/frame_095_delay-0.07s.webp",
      "/Desktop/frame_096_delay-0.07s.webp",
      "/Desktop/frame_097_delay-0.07s.webp",
      "/Desktop/frame_098_delay-0.07s.webp",
      "/Desktop/frame_099_delay-0.07s.webp",
      "/Desktop/frame_100_delay-0.07s.webp",
      "/Desktop/frame_101_delay-0.07s.webp",
      "/Desktop/frame_102_delay-0.07s.webp",
      "/Desktop/frame_103_delay-0.07s.webp",
      "/Desktop/frame_104_delay-0.07s.webp",
      "/Desktop/frame_105_delay-0.07s.webp",
      "/Desktop/frame_106_delay-0.07s.webp",
      "/Desktop/frame_107_delay-0.07s.webp",
    ],
    []
  );
  const mobileFrames = useMemo(
    () => [
      "/Mobile/frame_00_delay-0.07s.webp",
      "/Mobile/frame_01_delay-0.07s.webp",
      "/Mobile/frame_02_delay-0.07s.webp",
      "/Mobile/frame_03_delay-0.07s.webp",
      "/Mobile/frame_04_delay-0.07s.webp",
      "/Mobile/frame_05_delay-0.07s.webp",
      "/Mobile/frame_06_delay-0.07s.webp",
      "/Mobile/frame_07_delay-0.07s.webp",
      "/Mobile/frame_08_delay-0.07s.webp",
      "/Mobile/frame_09_delay-0.07s.webp",
      "/Mobile/frame_10_delay-0.07s.webp",
      "/Mobile/frame_11_delay-0.07s.webp",
      "/Mobile/frame_12_delay-0.07s.webp",
      "/Mobile/frame_13_delay-0.07s.webp",
      "/Mobile/frame_14_delay-0.07s.webp",
      "/Mobile/frame_15_delay-0.07s.webp",
      "/Mobile/frame_16_delay-0.07s.webp",
      "/Mobile/frame_17_delay-0.07s.webp",
      "/Mobile/frame_18_delay-0.07s.webp",
      "/Mobile/frame_19_delay-0.07s.webp",
      "/Mobile/frame_20_delay-0.07s.webp",
      "/Mobile/frame_21_delay-0.07s.webp",
      "/Mobile/frame_22_delay-0.07s.webp",
      "/Mobile/frame_23_delay-0.07s.webp",
      "/Mobile/frame_24_delay-0.07s.webp",
      "/Mobile/frame_25_delay-0.07s.webp",
      "/Mobile/frame_26_delay-0.07s.webp",
      "/Mobile/frame_27_delay-0.07s.webp",
      "/Mobile/frame_28_delay-0.07s.webp",
      "/Mobile/frame_29_delay-0.07s.webp",
      "/Mobile/frame_30_delay-0.07s.webp",
      "/Mobile/frame_31_delay-0.07s.webp",
      "/Mobile/frame_32_delay-0.07s.webp",
      "/Mobile/frame_33_delay-0.07s.webp",
      "/Mobile/frame_34_delay-0.07s.webp",
      "/Mobile/frame_35_delay-0.07s.webp",
      "/Mobile/frame_36_delay-0.07s.webp",
      "/Mobile/frame_37_delay-0.07s.webp",
      "/Mobile/frame_38_delay-0.07s.webp",
      "/Mobile/frame_39_delay-0.07s.webp",
      "/Mobile/frame_40_delay-0.07s.webp",
      "/Mobile/frame_41_delay-0.07s.webp",
      "/Mobile/frame_42_delay-0.07s.webp",
      "/Mobile/frame_43_delay-0.07s.webp",
      "/Mobile/frame_44_delay-0.07s.webp",
      "/Mobile/frame_45_delay-0.07s.webp",
      "/Mobile/frame_46_delay-0.07s.webp",
      "/Mobile/frame_47_delay-0.07s.webp",
      "/Mobile/frame_48_delay-0.07s.webp",
      "/Mobile/frame_49_delay-0.07s.webp",
      "/Mobile/frame_50_delay-0.07s.webp",
      "/Mobile/frame_51_delay-0.07s.webp",
      "/Mobile/frame_52_delay-0.07s.webp",
      "/Mobile/frame_53_delay-0.07s.webp",
      "/Mobile/frame_54_delay-0.07s.webp",
      "/Mobile/frame_55_delay-0.07s.webp",
      "/Mobile/frame_56_delay-0.07s.webp",
      "/Mobile/frame_57_delay-0.07s.webp",
      "/Mobile/frame_58_delay-0.07s.webp",
      "/Mobile/frame_59_delay-0.07s.webp",
      "/Mobile/frame_60_delay-0.07s.webp",
      "/Mobile/frame_61_delay-0.07s.webp",
      "/Mobile/frame_62_delay-0.07s.webp",
      "/Mobile/frame_63_delay-0.07s.webp",
      "/Mobile/frame_64_delay-0.07s.webp",
      "/Mobile/frame_65_delay-0.07s.webp",
      "/Mobile/frame_66_delay-0.07s.webp",
      "/Mobile/frame_67_delay-0.07s.webp",
      "/Mobile/frame_68_delay-0.07s.webp",
      "/Mobile/frame_69_delay-0.07s.webp",
      "/Mobile/frame_70_delay-0.07s.webp",
      "/Mobile/frame_71_delay-0.07s.webp",
      "/Mobile/frame_72_delay-0.07s.webp",
      "/Mobile/frame_73_delay-0.07s.webp",
      "/Mobile/frame_74_delay-0.07s.webp",
      "/Mobile/frame_75_delay-0.07s.webp",
      "/Mobile/frame_76_delay-0.07s.webp",
      "/Mobile/frame_77_delay-0.07s.webp",
      "/Mobile/frame_78_delay-0.07s.webp",
      "/Mobile/frame_79_delay-0.07s.webp",
      "/Mobile/frame_80_delay-0.07s.webp",
      "/Mobile/frame_81_delay-0.07s.webp",
      "/Mobile/frame_82_delay-0.07s.webp",
      "/Mobile/frame_83_delay-0.07s.webp",
      "/Mobile/frame_84_delay-0.07s.webp",
    ],
    []
  );
  // Scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // preload images
  useEffect(() => {
    cameraFrames.forEach((frame) => {
      const img = new Image();
      img.src = frame;
    });
  
    mobileFrames.forEach((frame) => {
      const img = new Image();
      img.src = frame;
    });
  }, [cameraFrames, mobileFrames]);
  

  //  Desktop
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);
      // console.log(scrollTop)

      const maxScroll = window.innerHeight * 2.5;
      const scrollFraction = scrollTop / maxScroll;
      const frameIndex = Math.min(
        cameraFrames.length - 1,
        Math.floor(scrollFraction * cameraFrames.length)
      );
      if (frameIndex !== currentFrame) {
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
          mobileFrameRef.current + (targetFrame - mobileFrameRef.current) * 0.1; // Interpolation factor
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
      <div
        id="home"
        className="relative h-[280vh] md:h-[270vh] flex flex-col pt-0 md:pt-20  items-center"
      >
        <header
          className="flex flex-col items-center gap-4  fixed text-center pt-8"
          style={{
            transform:
              scrollY < 1500 ? `translateY(${scrollY * 0.4}px)` : "none",
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
          <p className="flex flex-col items-center text-xs md:text-md text-gray-400">
            <i className="bi bi-mouse-fill text-lg md:text-3xl text-gray-300"></i>
            Scroll
          </p>
        </header>

        <img
          className="camera absolute hidden md:block select-none w-fit z-10"
          style={{
            transform: scrollY < 2600 ? `translateY(${scrollY * 1}px)` : "none",
            opacity: scrollY < 2300 ? 1 : 0,
            transition: "opacity 1s ease-out",
          }}
          src={cameraFrames[currentFrame]}
          alt="Scroll animation"
        />
        {/* Mobile */}
        <img
          className="camera absolute block md:hidden select-none w-fit z-10"
          style={{
            transform: scrollY < 1900 ? `translateY(${scrollY * 1}px)` : "none",
            opacity: scrollY < 1850 ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
          src={mobileFrames[mobileFrame]}
          alt="Scroll animation"
        />
      </div>
      <HomeNews />
    </>
  );
};

export default Home;
