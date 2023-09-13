import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Neptune = () => {
  const { scene } = useGLTF("./neptune/scene.gltf"); // Update the path

  return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />;
};

const NeptuneCanvas = () => {
  return (
    <Canvas
      style={{ height: "100vh" }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <OrbitControls autoRotate enableZoom={false} />

      <ambientLight intensity={100.5} />
      <pointLight position={[10, 10, 10]} />

      <Suspense fallback={null}>
        <Neptune /> {/* Replace with your 3D model */}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default NeptuneCanvas;
