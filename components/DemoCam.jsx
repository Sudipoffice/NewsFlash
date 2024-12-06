import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { rotate } from 'three/webgpu';
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Model = () => {
  const modelRef = useRef();
  const scrollPosition = useRef(0);
  const [scrollY, setScrollY] = useState(0);

  // Load the GLTF model
  const { scene } = useGLTF('/VideoCam.glb');

  // Rotate the model based on scroll
  useFrame(() => {
    if (modelRef.current && scrollY <= 700) {
      modelRef.current.rotation.y = scrollPosition.current / 100; // Adjust divisor for sensitivity
    }
  });

  // Update scroll position in real-time
  useEffect(() => {
      const handleScroll = () => {
        const scroll = window.scrollY; // Get scrollY directly
        setScrollY(scroll);
          scrollPosition.current = window.scrollY;
    //   console.log(scroll)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lerp = (start, end, t) => start + (end - start) * t;

  const rotation = () => {
    const threshold = 512; // Scroll threshold for switching rotation axis
    const t = Math.min(1, (scrollY - 112) / (threshold - 112)); // Normalized progress (0 to 1)

    if (scrollY <= threshold) {
      // Horizontal rotation (Y-axis) active
      return [0, lerp(0, -Math.PI / 2, t), 0]; // Smoothly rotate horizontally
    }
     else {
      // Stop horizontal rotation at -90 degrees and start vertical rotation (X-axis)
      const verticalRotation = (scrollY - threshold) * -0.02; // Control vertical rotation speed
      return [verticalRotation, -Math.PI / 2, 0]; // Keep horizontal at -90 degrees, rotate vertically
    }
  };

  const size = () => {
    const scale = 1 + scrollY * 0.0025;
    if (scrollY <= 312) {
      return [0.5 * scale, 0.5 * scale, 0.5 * scale];
    } 
    // else if (scrollY > 312) {
    //   return [0.55 * scale, 0.55 * scale, 0.55 * scale];
    // }
    
  };

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={size()} // Ensure scale stays within reasonable bounds
      position={[0, -30-scrollY*0.1, 0]} // Center model vertically
      rotation={rotation()}
    />
  );
};



const DemoCam = () => {
    const [scrollY, setScrollY] = useState(0); // Use state for scrollY to trigger re-renders

    // Update scroll position in real-time
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY); // Update scroll position state
        // console.log(scrollY)
      };
      window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);
  return (
    <div  style={{ position: 'relative', height: '200vh' }}>
    <header
          className="flex flex-col items-center justify-center gap-4 w-screen fixed text-center pt-0 md:pt-20 z-10 "
          style={{
            transform: scrollY < 600 ? `translateY(${scrollY * 0.4}px)` : "none",
            opacity: scrollY < 900 ? 1 : 0,
            transition: "opacity 0.5s ease-out, transform 2s ease-out",
          }}
        >
          <h1
            className="text-2xl md:text-6xl font-bold text-black"
            style={{
             color:scrollY<600? "#4a4a4a":"black",
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
          <p className="flex flex-col items-center text-xs md:text-md text-gray-400" style={{
            opacity: scrollY < 600 ? 1 : 0,
            transition: "opacity 0.5s ease-out",
          }}>
            <i className="bi bi-mouse-fill text-lg md:text-3xl text-gray-300"></i>
            Scroll
          </p>
        </header>
      <Canvas className=''
        camera={{ position: [0, 20, 90], fov: 75 }} // Move camera further back
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
         opacity: scrollY > 625 ? 0 : 1, // Control opacity
          transition: "opacity 0.5s ease-out",
          pointerEvents: scrollY > 630 ? "none" : "auto",
        }}
      >
        <ambientLight intensity={2} /> {/* Moderate ambient light */}
        <directionalLight position={[50, 60, 50]} intensity={10} /> {/* Lower directional light */}
        <Model />
      </Canvas>



      {/* Model */}
      <ParallaxProvider>
     <Parallax speed={-60} className='z-20'>

     {/* Laptop Model */}
          <div className='hidden md:block' style={{
            opacity:scrollY<1680? scrollY < 630 ? 0 : 1: 0,
            transform: scrollY > 630
            ? `scale(${Math.min(0.0019 * scrollY, 3)}) translateY(${Math.min(0.04 * scrollY, 100)}px)` // Limit scale and translateY
            : 'scale(1) translateY(0)',
            transition: "opacity 1s ease-in",}}>
      <div  className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*Gvgic29bgoiGVLmI6AVbUg.gif" className="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg" alt=""/>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*Gvgic29bgoiGVLmI6AVbUg.gif" className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt=""/>
    </div>
</div>
<div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px] ">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
</div>
     </div>

      {/* Phone Model */}

<div class="relative block md:hidden mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[1.8rem] h-[400px] w-[200px]" style={{
            opacity:scrollY<1300? scrollY < 630 ? 0 : 1: 0,
            transform: scrollY > 630
            ? `scale(${Math.min(0.0015 * scrollY, 3)}) translateY(${Math.min(0.9 * scrollY, 400)}px)` // Limit scale and translateY
            : 'scale(1) translateY(0)',
            transition: "opacity 0.2s ease-in",}}>
    <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[1rem] overflow-hidden w-[172px] h-[372px] bg-white dark:bg-gray-800">
        {/* <img src="https://assets-v2.lottiefiles.com/a/35dde376-1178-11ee-9ed9-5fa2debad506/pEm0ztvcpk.gif" class="dark:hidden w-[172px] h-[372px]" alt=""/> */}
        <div className='bg-white w-[172px] h-[372px]'>
        <img src="https://assets-v2.lottiefiles.com/a/35dde376-1178-11ee-9ed9-5fa2debad506/pEm0ztvcpk.gif" class="hidden dark:block w-fit" alt=""/>

        </div>
    </div>
</div>


      </Parallax>
      </ParallaxProvider>



    </div>

    
  );
};

export default DemoCam;
