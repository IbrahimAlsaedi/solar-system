import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const TOTAL_PARTICLES = 10000; // Total number of particles
const PARTICLES_TO_FOLLOW_CURSOR = 100; // Number of particles to follow the cursor

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(TOTAL_PARTICLES), { radius: 1.2 }));
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    // Update positions of particles to follow the cursor direction
    const speed = 0.001;
    for (let i = 0; i < PARTICLES_TO_FOLLOW_CURSOR * 3; i += 3) {
      const dx = mousePosition.x - sphere[i];
      const dy = mousePosition.y - sphere[i + 1];
      sphere[i] += dx * speed;
      sphere[i + 1] += dy * speed;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  // Listen for mousemove events to update the mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      // Normalize mouse coordinates to the range [-1, 1]
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.00102}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
