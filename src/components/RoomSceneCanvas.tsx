import { OrbitControls } from "@react-three/drei";
import { JapanRoomReducedOptimized } from "./models/JapanRoomReducedOptimized";
import { CoffeeTableModel } from "./models/CoffeeTableModel";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import OliviaBowlModel from "./models/OliviaBowlModel";

const VEC_UP = new THREE.Vector3(0, 1, 0);

export default function RoomSceneCanvas() {
  const plateRef = useRef<THREE.Group>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);

  const [platePos] = useState<[number, number, number]>([-0.991, 2.12, 0.78]);
  const [camPos] = useState<[number, number, number]>([-0.792, 2.276, 2.194]);
  const [enablePan] = useState(true);

  const camera = useThree((state) => state.camera);
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    // effect for set the spot light target to plate only once on mount
    if (!spotLightRef.current || !plateRef.current) return;

    const spotTarget = new THREE.Object3D();
    scene.add(spotTarget);
    spotTarget.position.copy(plateRef.current.position);
    spotLightRef.current.target = spotTarget;

    return () => {
      spotTarget.removeFromParent();
    };
  }, [scene]);

  useEffect(() => {
    camera.position.copy(new THREE.Vector3(...camPos));
    camera.lookAt(
      new THREE.Vector3(...platePos).addScaledVector(VEC_UP, -0.23),
    );

    return () => {};
  }, [camera, camPos, platePos]);

  useFrame(({ clock }, delta) => {
    // console.log(plateRef.current);

    // if for some reason, plateRef haven't been set, just return
    if (!plateRef.current) return;

    // spin on Y
    const o = plateRef.current.quaternion.clone();
    const c = o.clone().conjugate();
    plateRef.current.quaternion.multiply(c.normalize());
    const n = new THREE.Quaternion().setFromAxisAngle(
      VEC_UP,
      Math.PI * delta * 0.2,
    );
    plateRef.current.quaternion.multiply(n.normalize());
    plateRef.current.quaternion.multiply(o.normalize());

    // bob on Y
    plateRef.current.position.setY(Math.sin(clock.getElapsedTime()) * 0.05 + platePos[1]);

    if (enablePan) {
      // camera orbit on Y
      const targetPos = new THREE.Vector3(...platePos).addScaledVector(
        VEC_UP,
        -0,
      );
      const initialCamPos = new THREE.Vector3(...camPos);
      const v = initialCamPos.clone().sub(targetPos);
      v.applyAxisAngle(
        VEC_UP,
        Math.sin(clock.getElapsedTime() / 3) * (Math.PI / 24),
      );
      v.add(targetPos);
      camera.position.set(v.x, v.y, v.z);
      camera.lookAt(targetPos);
    }
  });

  return (
    <>
      <OrbitControls target={new THREE.Vector3(...platePos)} />
      <directionalLight
        intensity={4}
        position={[2, 8, 4]}
        castShadow
        shadow-intensity={0.6}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0005}
        shadow-normalBias={0.04}
        // shadow-radius={1}
        shadow-camera-left={-15}
        shadow-camera-bottom={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-near={0}
        shadow-camera-far={100}
      />

      <spotLight
        ref={spotLightRef}
        args={[0xffffff]}
        intensity={32}
        penumbra={0.2}
        angle={Math.PI / 20}
        position={[camPos[0] - 0.8, camPos[1] + 0.5, camPos[2] + 2]}
        castShadow
        shadow-intensity={1.1}
        shadow-bias={-0.0009}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />

      <JapanRoomReducedOptimized />
      <CoffeeTableModel position={[-1, 0, 0.65]} />
      <OliviaBowlModel ref={plateRef} scale={0.68} position={platePos} />

      <EffectComposer>
        <DepthOfField
          focusDistance={0.0015}
          focalLength={0.0012}
          bokehScale={2.5}
        />
      </EffectComposer>
    </>
  );
}
