import { ContactShadows, Environment, OrbitControls, PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import Model from "./Model";
import { GridHelper } from "three";

export default function Scene(OrbitCamera) {
  const OrbitState = OrbitCamera.OrbitCamera;
  const orbitref = useRef();
  useEffect(() => {
    if (OrbitState === 2) {
      console.log("reset");
      orbitref.current.reset();
    }
  }, [OrbitState]);
  return (
    <Canvas gl={{ antialias: true }} shadows >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5]}

        fov={45}
        near={0.1}
        far={100}
      />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {OrbitState === 1 ? <OrbitControls ref={orbitref}
      /> : null}



      <Suspense fallback={null}>
        <Environment files="/environment.hdr" />
        <Model OrbitState={OrbitState} />
        <ContactShadows position={[0, -1.2, 0]} opacity={0.3} />
      </Suspense>
    </Canvas>
  )
}