import { Canvas } from "@react-three/fiber";
import RoomSceneCanvas from "./RoomSceneCanvas";
import { Suspense } from "react";
import { Html } from "@react-three/drei";

export default function RoomScene() {
  return (
    <div className="canvas-container">
      <Canvas gl={{ alpha: false }} shadows camera={{ fov: 45 }}>
        <Suspense
          fallback={
            <Html>
              <p style={{ width: "200px" }}>加载中...</p>
            </Html>
          }
        >
          <RoomSceneCanvas />
        </Suspense>
      </Canvas>
    </div>
  );
}
