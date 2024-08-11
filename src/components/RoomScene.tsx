import { Canvas } from "@react-three/fiber";
import RoomSceneCanvas from "./RoomSceneCanvas";

export default function RoomScene() {
  return (
    <div className="canvas-container">
      <Canvas gl={{ alpha: false }}>
        <RoomSceneCanvas />
      </Canvas>
    </div>
  );
}
