// app/components/ThreeDMenu.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { Environment, OrbitControls, Text, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

// Model component to load and display 3D models with optional rotation and text
const Model = ({ path, position, scale, rotate, pivot, initialRotation, text, textPosition }: { path: string, position: [number, number, number], scale: [number, number, number], rotate?: boolean, pivot: [number, number, number], initialRotation?: [number, number, number], text: string, textPosition?: [number, number, number] }) => {
  const { scene } = useGLTF(path);
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (ref.current && initialRotation) {
      ref.current.rotation.set(initialRotation[0], initialRotation[1], initialRotation[2]);
    }
  }, [initialRotation]);

  useFrame(() => {
    if (ref.current && rotate) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={ref} position={position}>
      <primitive object={scene} position={pivot} scale={scale} />
      <Text
        position={textPosition || [pivot[0], pivot[1] + 2, pivot[2]]} // Use textPosition prop if provided
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

// Functional component for the 3D Menu
const ThreeDMenu: React.FC = () => {
  const boardScale: [number, number, number] = [0.01, 0.01, 0.01];
  const modelScale: [number, number, number] = [0.1, 0.1, 0.1];

  return (
    <div className="w-full h-screen">
      <Canvas 
        camera={{ position: [0, 2, 5], fov: 75 }} 
        gl={{ antialias: true }} 
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
        }}
      >
        {/* Ambient Light for general illumination */}
        <ambientLight intensity={0.6} />

        {/* Directional Light to simulate sunlight */}
        <directionalLight 
          position={[5, 10, 7.5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* Point Lights to add more focused light sources */}
        <pointLight position={[-5, 5, 5]} intensity={0.5} />
        <pointLight position={[5, -5, -5]} intensity={0.5} />

        <OrbitControls enableDamping dampingFactor={0.25} enableZoom />

        <Environment preset="city" />

        {/* Load the Monopoly board */}
        <Model path="/models/monopoly.glb" position={[0, 0, 0]} scale={boardScale} rotate={false} pivot={[0, 0, 0]} text="$0.00" textPosition={[0, 2, 0]} />

        {/* Load the coffee delights */}
        <Model path="/models/boba_tea_cup.glb" position={[6, 0.5, 4.75]} scale={[0.5, 0.5, 0.5]} rotate={true} pivot={[-1.4, -0.5, 0]} text="$5.50" textPosition={[-1.4, 1.5, 0]} />
        <Model path="/models/bubble_tea_and_cookies.glb" position={[-6.8, 1.4, -4.75]} scale={[0.8, 0.8, 0.8]} rotate={true} pivot={[-0.9, -0.5, 0.22]} text="$5.50" textPosition={[-0.9, 1.5, 0.22]} />
        <Model path="/models/cafe_latte_with_art.glb" position={[-1.5, 0.5, 6]} scale={[2.3, 2.3, 2.3]} rotate={true} pivot={[0, -0.5, 0]} text="$5.50" textPosition={[0, 2, 0]} />
        <Model path="/models/coffee_shop_cup.glb" position={[-6.3, 0.5, 4.7]} scale={[2.3, 2.3, 2.3]} rotate={true} pivot={[0, -0.5, 0]} text="$5.50" textPosition={[0, 2, 0]} />
        <Model path="/models/desserts.glb" position={[6, 0.5, -3.9]} scale={[1, 1, 1]} rotate={true} pivot={[0, -0.5, 0]} text="$5.50" textPosition={[0, 2, 0]} />
      </Canvas>
    </div>
  );
};

export default ThreeDMenu; // Exporting the ThreeDMenu component