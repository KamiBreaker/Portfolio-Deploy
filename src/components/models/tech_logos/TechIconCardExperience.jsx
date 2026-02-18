import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  // Only load GLTF if a path is provided
  const scene = model.modelPath ? useGLTF(model.modelPath) : null;

  useEffect(() => {
    if (scene && model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={model.scale}
          rotation={model.rotation}
          position={model.position || [0, 0, 0]}
        >
          {model.shape === "torus" && (
            <mesh>
              <torusKnotGeometry args={[10, 3, 100, 16]} />
              <meshStandardMaterial color={model.color || "orange"} roughness={0.2} metalness={0.5} />
            </mesh>
          )}

          {model.shape === "icosahedron" && (
            <mesh>
              <icosahedronGeometry args={[10, 0]} />
              <meshStandardMaterial color={model.color || "green"} wireframe />
            </mesh>
          )}

          {model.shape === "cylinder" && (
            <mesh>
              <cylinderGeometry args={[4, 4, 8, 32]} />
              <meshStandardMaterial color={model.color || "blue"} wireframe />
            </mesh>
          )}

          {/* Render GLTF if present */}
          {scene && <primitive object={scene.scene} />}
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
