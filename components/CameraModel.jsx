import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

// Function to load and render the 3D model
const CameraModel = () => {
  const modelRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const [model, setModel] = useState(null); // Track the model state

  // Load the 3D model (GLTF format)
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/gopro.glb", (gltf) => {
      setModel(gltf.scene); // Set the loaded model
    });
  }, []);

  // Listen for scroll events to change the rotation
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      //   console.log(scrollY)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Map scrollY to rotation angles
  const rotationSpeed = 0.008;
  const rotationX = scrollY * rotationSpeed;
  const rotationY = scrollY * rotationSpeed * 1.8;
  //   const rotationZ = scrollY * rotationSpeed*0.3;

  const size = () => {
    const scale = 1 + scrollY * 0.0025;
    if (scrollY <= 180) {
      return [2.05 * scale, 2.05 * scale, 2.05 * scale];
    } else if (scrollY > 180) {
      return [2.2 * scale, 2.2 * scale, 2.2 * scale];
    }
  };

  const lerp = (start, end, t) => start + (end - start) * t;
  const rotation = () => {
    const t = Math.min(1, (scrollY - 112) / (180 - 112)); // Normalized progress (0 to 1)

    if (scrollY <= 112) {
      return [rotationX, rotationY, 0];
    } else if (scrollY <= 200) {
      const smoothX = lerp(rotationX, scrollY * 0.001, t);
      const smoothY = lerp(rotationY, scrollY * 0.01 * 1.6, t);
      return [smoothX, smoothY, 0];
    }
  };

  return (
    <>
    <div className="hidden md:flex flex-col items-center" style={{ height: "140vh" }}>
      {" "}
      {/* Make the container tall for scrolling */}
      <header
        className="flex flex-col items-center justify-center gap-4  fixed text-center pt-40"
        style={{
          transform: scrollY < 400 ? `translateY(${scrollY * 0.4}px)` : "none",
          opacity: scrollY < 300 ? 1 : 0,
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
      <Canvas
        className=""
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{
          transform:
            scrollY >= 150
              ? `translateY(${scrollY * 0.5}px)`
              : "translateX(0px) translateY(0px)",
          transition: "transform 0.09s ease-in-out, opacity 1s ease-out",
          opacity: scrollY < 500 ? 1 : 0,
        }}
      >
        {/* Ambient and directional lights */}
        <ambientLight intensity={0.99} />
        <directionalLight position={[10, 10, 10]} intensity={3.5} />

        {/* Check if model is loaded */}
        {model && (
          <mesh ref={modelRef} rotation={rotation()}>
            <primitive object={model} scale={size()} />
          </mesh>
        )}
      </Canvas>
    </div>


    {/* Mobile */}

        <div className="flex md:hidden flex-col items-center" style={{ height: "100vh" }}>
      {" "}
      {/* Make the container tall for scrolling */}
      <header
        className="flex flex-col items-center justify-center gap-4  fixed text-center pt-16"
        style={{
          transform: scrollY < 400 ? `translateY(${scrollY * 0.4}px)` : "none",
          opacity: scrollY < 300 ? 1 : 0,
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
      <Canvas
        className="z-30"
        camera={{ position: [0, 0, 7], fov: 75 }}
        style={{
          transform:
            scrollY >= 100
              ? `translateY(${scrollY * 1}px)`
              : "translateX(0px) translateY(0px)",
          transition: "transform 0.09s ease-in-out, opacity 1s ease-out",
          opacity: scrollY < 500 ? 1 : 0,
        }}
      >
        {/* Ambient and directional lights */}
        <ambientLight intensity={0.99} />
        <directionalLight position={[10, 10, 10]} intensity={5} />

        {/* Check if model is loaded */}
        {model && (
          <mesh ref={modelRef} rotation={rotation()}>
            <primitive object={model} scale={size()} />
          </mesh>
        )}
      </Canvas>
    </div>
    </>
  );
};

export default CameraModel;
