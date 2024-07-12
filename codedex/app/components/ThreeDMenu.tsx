"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ThreeDMenuProps {
  modelPath: string;
  backgroundColor: string;
}

const ThreeDMenu: React.FC<ThreeDMenuProps> = ({ modelPath, backgroundColor }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 20, 40); // Further back and higher up

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;
    controls.target.set(0, 0, 0); // Ensure the camera looks at the center
    controls.update();

    // Load Model
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Center the model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      model.position.x -= center.x;
      model.position.y -= center.y;
      model.position.z -= center.z;

      // Adjust camera distance based on model size
      const maxDim = Math.max(size.x, size.y, size.z);
      const distance = maxDim * 2.5;
      camera.position.set(0, distance / 2, distance);
      controls.target.set(center.x, center.y, center.z);
      controls.update();
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      controls.dispose();
    };
  }, [modelPath, backgroundColor]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeDMenu;